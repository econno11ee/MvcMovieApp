
using MvcMovie.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MvcMovie.DAL
{
	public interface IMovieRepository : IDisposable
	{
		IEnumerable<Movie> GetMovies();
		Movie GetMovieDetails(int? id);
		void CreateMovie(Movie movie);
		void DeleteMovie(int id);
		void UpdateMovie(Movie movie);
		void Save();
	}
}
