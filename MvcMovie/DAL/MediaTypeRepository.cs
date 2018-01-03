using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using MvcMovie.Models;

namespace MvcMovie.DAL
{
	public class MediaTypeRepository : IMediaTypeRepository, IDisposable
	{
		private MediaTypeDBContext context;

		public MediaTypeRepository(MediaTypeDBContext context)
		{
			this.context = context;
		}
		public void DeleteMediaType(int id)
		{
			MediaType MediaType = context.MediaTypes.Find(id);
			context.MediaTypes.Remove(MediaType);
		}
		public IEnumerable<MediaType> GetMediaTypes()
		{
			return context.MediaTypes.ToList();
		}

		public MediaType GetMediaTypeDetails(int? id)
		{

			return context.MediaTypes.Find(id);

		}

		public void CreateMediaType(MediaType MediaType)
		{
			context.MediaTypes.Add(MediaType);
		}

		public void Save()
		{
			context.SaveChanges();
		}

		public void UpdateMediaType(MediaType MediaType)
		{
			context.Entry(MediaType).State = EntityState.Modified;
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

