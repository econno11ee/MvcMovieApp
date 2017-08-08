namespace MvcMovie.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Movie
    {
        [Key]
        public int MovieID { get; set; }

        [StringLength(128)]
        public string Title { get; set; }

        public DateTime? ReleaseDate { get; set; }

        [StringLength(50)]
        public string Genre { get; set; }

        [Column(TypeName = "money")]
        public decimal? Price { get; set; }

        [StringLength(10)]
        public string Rating { get; set; }
    }
}
