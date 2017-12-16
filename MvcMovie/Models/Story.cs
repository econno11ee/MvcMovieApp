using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcMovie.Models
{
	public abstract class MediaType
	{
		[Key]
		
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int ID { get; set; }

		[StringLength(128)]
		public string Title { get; set; }

		[StringLength(50)]
		public string Genre { get; set; }

		[Column(TypeName = "money")]
		public decimal? Price { get; set; }

	}
}
