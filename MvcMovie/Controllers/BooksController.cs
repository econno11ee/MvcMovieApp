using MvcMovie.DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace MvcMovie.Models
{

	public class BooksController : Controller
	{
		private MediaTypeRepository repo;

		public BooksController()
		{
			this.repo = new MediaTypeRepository(new MediaTypeDBContext());
		}

		public BooksController(MediaTypeRepository repo)
		{
			this.repo = repo;
		}


		// GET: Movies
		public ActionResult Index()
		{ return View("~/Views/Books/Index.cshtml"); }
		public ActionResult GetData(string bookGenre, string searchString)
		{
			var GenreLst = new List<string>();

			var GenreQry = from b in repo.GetMediaTypes()
						   where b is Book
						   orderby b.Genre
						   select b.Genre;

			GenreLst.AddRange(GenreQry.Distinct());
			ViewBag.movieGenre = new SelectList(GenreLst);

			var books = from b in repo.GetMediaTypes()
						 where b is Book
						 select b;

			if (!String.IsNullOrEmpty(searchString))
			{
				books = books.Where(s => s.Title.Contains(searchString));
			}

			if (!string.IsNullOrEmpty(bookGenre))
			{
				books = books.Where(x => x.Genre == bookGenre);
			}

			return Json(books, JsonRequestBehavior.AllowGet);
		}

		// GET: Movies/Details/5
		public ActionResult Details(int? id)
		{ return View("~/Views/Books/Details.cshtml"); }


		public ActionResult GetDetails(int? id)
		{
			if (id == null)
			{
				return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
			}
			Book book = (Book)repo.GetMediaTypeDetails(id);
			if (book == null)
			{
				return HttpNotFound();
			}
			return Json(book, JsonRequestBehavior.AllowGet); ;
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

		public ActionResult CreateNew(Book book)
		{


			repo.CreateMediaType(book);
			repo.Save();
			return RedirectToAction("Index", new Book());

		}

		// GET: Movies/Edit/5
		public ActionResult Edit(int? id)
		{

			return View("~/Views/Books/Edit.cshtml");
		}

		// POST: Movies/Edit/5
		// To protect from overposting attacks, please enable the specific properties you want to bind to, for 
		// more details see https://go.microsoft.com/fwlink/?LinkId=317598.
		[HttpPut]
		public ActionResult UpdateMedia(Book book)
		{

			repo.UpdateMediaType(book);
			repo.Save();
			return RedirectToAction("Index");

		}

		// GET: Movies/Delete/5
		public ActionResult Delete(int? id)
		{
			return View("~/Views/Books/Delete.cshtml");
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
