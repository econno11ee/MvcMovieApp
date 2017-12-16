namespace MvcMovie.Models
{
	using System;
	using System.Data.Entity;
	using System.ComponentModel.DataAnnotations.Schema;
	using System.Linq;

	public partial class MediaTypeDBContext : DbContext
	{
		public MediaTypeDBContext()
			: base("name=Movies")
		{
		}

		public DbSet<MediaType> MediaTypes { get; set; }

	
		protected override void OnModelCreating(DbModelBuilder modelBuilder)
		{
			modelBuilder.Entity<MediaType>()
				.Property(e => e.Price)
				.HasPrecision(19, 4);
			modelBuilder.Entity<Book>().MapToStoredProcedures();
		}
	}
}
