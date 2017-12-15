namespace MvcMovie.Models
{
	using System;
	using System.Data.Entity;
	using System.ComponentModel.DataAnnotations.Schema;
	using System.Linq;

	public partial class MovieDBContext : DbContext
	{
		public MovieDBContext()
			: base("name=Movies")
		{
		}

		public virtual DbSet<Movie> Movies { get; set; }

		protected override void OnModelCreating(DbModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Movie>()
				.Property(e => e.Price)
				.HasPrecision(19, 4);
			modelBuilder.Entity<Movie>().MapToStoredProcedures();
		}
	}
}
