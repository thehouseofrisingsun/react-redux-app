using DBRepository.Interfaces;
using Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using DbRepository;

namespace DBRepository.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory) { }

        public async Task<Page<CategoryModel>> GetCategories(int index, int pageSize, string tag = null)
        {
            var result = new Page<CategoryModel>() { CurrentPage = index, PageSize = pageSize };

            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.Categories.AsQueryable();
                result.TotalPages = await query.CountAsync();
                result.Records = await query.OrderByDescending(p => p.Id).Skip(index * pageSize).Take(pageSize).ToListAsync();
            }

            return result;
        }

        public async Task<CategoryModel> GetCategory(int categpryId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Categories.FirstOrDefaultAsync(p => p.Id == categpryId);
            }
        }

        public async Task AddCategory(CategoryModel category)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Categories.Add(category);
                await context.SaveChangesAsync();
            }
        }

        public async Task DeleteCategory(int categoryId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var cateogry = new CategoryModel() { Id = categoryId };
                context.Categories.Remove(cateogry);
                await context.SaveChangesAsync();
            }
        }
    }
}
