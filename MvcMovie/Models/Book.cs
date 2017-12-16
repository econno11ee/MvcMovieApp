namespace MvcMovie.Models
{
	using System;
	using System.ComponentModel.DataAnnotations;
	using System.ComponentModel.DataAnnotations.Schema;

	public class Book : MediaType
	{
		[StringLength(50)]
		public string Author { get; set; }
		public DateTime? DatePublished { get; set; }

	}
}
