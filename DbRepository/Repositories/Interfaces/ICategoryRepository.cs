using Models;
using System.Threading.Tasks;

namespace DBRepository.Interfaces
{
    public interface ICategoryRepository
    {
        Task<Page<CategoryModel>> GetCategories(int index, int pageSize, string tag = null);
        Task<CategoryModel> GetCategory(int id);
        Task AddCategory(CategoryModel category);
        Task DeleteCategory(int id);

    }
}
