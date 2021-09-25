using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ClientesAPI.Data;
using ClientesAPI.Modelos;
using Microsoft.EntityFrameworkCore;

namespace ClientesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly StoreDataContext _contexto;

        public ClienteController(StoreDataContext contexto)
        {
            _contexto = contexto;
        }

        // GET: api/Cliente
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cliente>>> GetClientes()
        {
            return await _contexto.Clientes.Include(x=>x.Endereco).ToListAsync();
        }

        // GET: api/Cliente/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cliente>> GetClientePorId(int id)
        {
            var cliente = await _contexto.Clientes.Include(x => x.Endereco).FirstOrDefaultAsync(x => x.Id == id);

            if (cliente == null)
                return NotFound();

            return cliente;
        }

        // PUT: api/Cliente/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCliente(int id,Cliente cliente)
        {
            if (id != cliente.Id)
                return BadRequest();

            _contexto.Entry(cliente).State = EntityState.Modified;
            _contexto.Entry(cliente.Endereco).State = EntityState.Modified;

            try
            {
                await _contexto.SaveChangesAsync();
            }
            catch (Exception)
            {
                if (!VerificarExistenciaCliente(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // POST: api/Cliente
        [HttpPost]
        public async Task<ActionResult<Cliente>> PostCliente(Cliente cliente)
        {
            _contexto.Clientes.Add(cliente);
            await _contexto.SaveChangesAsync();

            return CreatedAtAction("GetClientePorId", new { id = cliente.Id }, cliente);
        }

        // DELETE: api/Cliente/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCliente(int id)
        {
            var cliente = await _contexto.Clientes.FindAsync(id);

            if (cliente == null)
                return NotFound();

            _contexto.Clientes.Remove(cliente);
            await _contexto.SaveChangesAsync();

            return NoContent();
        }

        private bool VerificarExistenciaCliente(int id)
        {
            return _contexto.Clientes.Any(x => x.Id == id);
        }

    }
}
