using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MvcMovie.DAL;
using MvcMovie.Models;

namespace MvcMovie.Controllers
{
	public class MoviesController : Controller
	{

		private MediaTypeRepository repo;

		public MoviesController()
		{
			this.repo = new MediaTypeRepository(new MediaTypeDBContext());
		}

		public MoviesController(MediaTypeRepository repo)
		{
			this.repo = repo;
		}


		// GET: Movies
		public ActionResult Index()
		{ return View("~/Views/Movies/Index.cshtml"); }
		public ActionResult GetData(string movieGenre, string searchString)
		{
			var GenreLst = new List<string>();

			var GenreQry = from m in repo.GetMediaTypes()
						   where m is Movie
						   orderby m.Genre
						   select m.Genre;

			GenreLst.AddRange(GenreQry.Distinct());
			ViewBag.movieGenre = new SelectList(GenreLst);

			var movies = from m in repo.GetMediaTypes()
						 where m is Movie
						 select m;

			if (!String.IsNullOrEmpty(searchString))
			{
				movies = movies.Where(s => s.Title.Contains(searchString));
			}

			if (!string.IsNullOrEmpty(movieGenre))
			{
				movies = movies.Where(x => x.Genre == movieGenre);
			}

			return Json(movies, JsonRequestBehavior.AllowGet);
		}

		// GET: Movies/Details/5
		public ActionResult Details(int? id)
		{ return View("~/Views/Movies/Details.cshtml"); }


		public ActionResult GetDetails(int? id)
		{
			if (id == null)
			{
				return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
			}
			Movie movie = (Movie) repo.GetMediaTypeDetails(id);
			if (movie == null)
			{
				return HttpNotFound();
			}
			return Json(movie, JsonRequestBehavior.AllowGet); ;
		}

		//GET: Movies/Create
		public ActionResult Create()
		{
			return View();
		}

		// POST: Movies/Create
		// To protect from overposting attacks, please enable the specific properties you want to bind to, for 
		// more details see https://go.microsoft.com/fwlink/?LinkId=317598.
		[HttpPost]
		
		public ActionResult CreateNew(Movie movie)
		{
		   
		   
				repo.CreateMediaType(movie);
				repo.Save();
				return RedirectToAction("Index", new Movie());
		   
		}

		// GET: Movies/Edit/5
		public ActionResult Edit(int? id)
		{
	  
			return View("~/Views/Movies/Edit.cshtml");
		}

		// POST: Movies/Edit/5
		// To protect from overposting attacks, please enable the specific properties you want to bind to, for 
		// more details see https://go.microsoft.com/fwlink/?LinkId=317598.
		[HttpPut]
		 public ActionResult UpdateMedia(Movie movie)
		{
			
				repo.UpdateMediaType(movie);
				repo.Save();
				return RedirectToAction("Index");
		   
		}

		// GET: Movies/Delete/5
		public ActionResult Delete(int? id)
		{
			return View("~/Views/Movies/Delete.cshtml");
		}

		// POST: Movies/Delete/5
	   
		public ActionResult RemoveData(int id)
		{
	
			repo.DeleteMediaType(id);
			repo.Save();
			return RedirectToAction("Index");
		}

		protected override void Dispose(bool disposing)
		{
			if (disposing)
			{
				repo.Dispose();
			}
			base.Dispose(disposing);
		}
	}
}
