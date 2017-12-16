namespace MvcMovie.Models
{
	using System;
	using System.ComponentModel.DataAnnotations;
	using System.ComponentModel.DataAnnotations.Schema;

	public class Movie : MediaType
	{
		[StringLength(50)]
		public string Director { get; set; }
		public DateTime? ReleaseDate { get; set; }

		[StringLength(10)]
		public string Rating { get; set; }
	}
}
