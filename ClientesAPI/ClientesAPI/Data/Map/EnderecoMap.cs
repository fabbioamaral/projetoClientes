using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ClientesAPI.Modelos;

namespace ClientesAPI.Data.Map
{
    public class EnderecoMap : IEntityTypeConfiguration<Endereco>
    {
        public void Configure(EntityTypeBuilder<Endereco> builder)
        {
            builder.ToTable("Enderecos");
            builder.HasKey(e => e.Id);
            builder.Property(e => e.Logradouro).IsRequired().HasMaxLength(120).HasColumnType("varchar(120)");
            builder.Property(e => e.Cidade).IsRequired().HasMaxLength(50).HasColumnType("varchar(50)");
            builder.Property(e => e.Estado).IsRequired().HasMaxLength(20).HasColumnType("varchar(20)");
            builder.Property(e => e.CEP).IsRequired().HasMaxLength(8).HasColumnType("nchar(8)");
        }
    }
}
