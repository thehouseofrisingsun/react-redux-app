using Dashboard.API.ViewModels;
using Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dashboard.Services.Interfaces
{
    public interface ICategoryService
    {
        Task<Page<CategoryViewModel>> GetCategories(int pageIndex);
        Task<CategoryModel> GetCategory(int postId);
        Task AddCategory(CategoryModel request);
        Task DeleteCategory(int postId);
    }
}
