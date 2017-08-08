namespace MvcMovie.Migrations
{
    using MvcMovie.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MvcMovie.Models.MovieDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(MvcMovie.Models.MovieDBContext context)
        {
            context.Movies.AddOrUpdate(i => i.Title,
                new Movie
                {
                    MovieID = 1,
                    Title = "When Harry Met Sally",
                    ReleaseDate = DateTime.Parse("1989-1-11"),
                    Genre = "Romantic Comedy",
                    Price = 7.99M,
                    Rating = "PG"
                },

                 new Movie
                 {
                     MovieID = 2,
                     Title = "Ghostbusters ",
                     ReleaseDate = DateTime.Parse("1984-3-13"),
                     Genre = "Comedy",
                     Price = 8.99M,
                     Rating = "PG"
                 },

                 new Movie
                 {
                     MovieID = 3,
                     Title = "Ghostbusters 2",
                     ReleaseDate = DateTime.Parse("1986-2-23"),
                     Genre = "Comedy",
                     Price = 9.99M,
                     Rating = "PG"
                 },

               new Movie
               {
                   MovieID = 4,
                   Title = "Rio Bravo",
                   ReleaseDate = DateTime.Parse("1959-4-15"),
                   Genre = "Western",
                   Price = 3.99M,
                   Rating = "PG"
               }
           );

        }
    }
}
