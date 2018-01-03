
using MvcMovie.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MvcMovie.DAL
{
	public interface IMediaTypeRepository : IDisposable
	{
		IEnumerable<MediaType> GetMediaTypes();
		MediaType GetMediaTypeDetails(int? id);
		void CreateMediaType(MediaType MediaType);
		void DeleteMediaType(int id);
		void UpdateMediaType(MediaType MediaType);
		void Save();
	}
}
