using System.Collections.Generic;
using System.Threading.Tasks;
using Models;
using Microsoft.Extensions.Configuration;
using DbRepository;
using DBRepository.Interfaces;
using Dashboard.Services.Interfaces;
using Dashboard.API.ViewModels;
using System.Linq;

namespace Dashboard.Services
{
	public class CategoryService : ICategoryService
	{
		ICategoryRepository _repository;
		IConfiguration _config;

		public CategoryService(ICategoryRepository repository, IConfiguration configuration)
		{
			_repository = repository;
			_config = configuration;
		}

		public async Task AddCategory(CategoryModel category)
		{
			await _repository.AddCategory(category);
		}

		public async Task<CategoryModel> GetCategory(int id)
		{
			var result = await _repository.GetCategory(id);
			return result;
		}

		public async Task DeleteCategory(int id)
		{
			await _repository.DeleteCategory(id);
		}

		public async Task<Page<CategoryViewModel>> GetCategories(int pageIndex)
		{
			var pageSize = _config.GetValue<int>("pageSize");
			var page = await _repository.GetCategories(pageIndex, pageSize);
            var result = new Page<CategoryViewModel>()
            {
                Records = page.Records.Select(x => new CategoryViewModel()
                {
                    Id = x.Id,
                    Name = x.Name
                }).ToList(),
                CurrentPage = page.CurrentPage,
                PageSize =  page.PageSize,
                TotalPages = page.TotalPages
            };

            return result;
		}
	}
}
