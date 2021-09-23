using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ClientesAPI.Modelos;

namespace ClientesAPI.Data.Map
{
    public class ClienteMap : IEntityTypeConfiguration<Cliente>
    {
        public void Configure(EntityTypeBuilder<Cliente> builder)
        {
            builder.ToTable("Clientes");
            builder.HasKey(x => x.CPF);
            builder.Property(x => x.CPF).HasMaxLength(11).HasColumnType("varchar(11)");
            builder.Property(x => x.Nome).IsRequired().HasMaxLength(120).HasColumnType("varchar(60)");
            builder.Property(x => x.Sobrenome).IsRequired().HasMaxLength(120).HasColumnType("varchar(120)");
            builder.Property(x => x.Nacionalidade).IsRequired().HasMaxLength(70).HasColumnType("varchar(70)");
            builder.Property(x => x.Email).IsRequired().HasMaxLength(70).HasColumnType("varchar(120)");
            builder.Property(x => x.Telefone).IsRequired().HasMaxLength(12).HasColumnType("varchar(12)");
            builder.HasOne(x => x.Endereco).WithOne(e => e.Cliente).HasForeignKey<Endereco>(e => e.ClienteId);     
        }
    }
}
