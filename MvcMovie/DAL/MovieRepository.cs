using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using MvcMovie.Models;

namespace MvcMovie.DAL
{
	public class MovieRepository : IMovieRepository, IDisposable
	{
		private MovieDBContext context;

		public MovieRepository(MovieDBContext context)
		{
			this.context = context;
		}
		public void DeleteMovie(int id)
		{
			Movie movie = context.Movies.Find(id);
			context.Movies.Remove(movie);
		}
		public IEnumerable<Movie> GetMovies()
		{
			return context.Movies.ToList();
		}

		public Movie GetMovieDetails(int? id)
		{

			return context.Movies.Find(id);

		}

		public void CreateMovie(Movie movie)
		{
			context.Movies.Add(movie);
		}

		public void Save()
		{
			context.SaveChanges();
		}

		public void UpdateMovie(Movie movie)
		{
			context.Entry(movie).State = EntityState.Modified;
		}

		private bool disposed = false;

		protected virtual void Dispose(bool disposing)
		{
			if (!this.disposed)
			{
				if (disposing)
				{
					context.Dispose();
				}
			}
			this.disposed = true;
		}

		public void Dispose()
		{
			Dispose(true);
			GC.SuppressFinalize(this);
		}

	}
}

