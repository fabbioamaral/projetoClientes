using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesAPI.Modelos;

namespace ClientesAPI.Data
{
    public class ClienteContext : DbContext
    {
        public DbSet<Cliente> Clientes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=localhost,1433;Database=APICurso;User ID=sa;Password=#$@sadas!#DsadEREd");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }

    }
}
