using DbRepository.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbRepository.Repositories
{
    public class VenueRepository : BaseRepository, IVenueRepository
    {
        public VenueRepository(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory)
        {
        }

        public async Task<VenueModel> AddVenue(VenueModel venue)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Venues.Add(venue);
                await context.SaveChangesAsync();
                return venue;
            }
        }

        public async Task<VenueModel> DeleteVenue(long id)
        {
            using(var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var venue = await context.Venues.FirstOrDefaultAsync(x => x.Id == id);
                context.Venues.Remove(venue);
                await context.SaveChangesAsync();
                return venue;
            }
        }

        public async Task<List<City>> GetCities()
        {
            var result = new List<City>();

            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                result = await  context.Cities.ToListAsync();
            }
            return result;
        }

        public async Task<Page<VenueModel>> GetVenues(int pageIndex, int pageSize)
        {
            var result = new Page<VenueModel>();
            result.CurrentPage = pageIndex;
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.Venues.AsQueryable();
                result.TotalPages = await query.CountAsync();
                result.Records = await query.OrderByDescending(c=>c.Id).Skip(pageIndex * pageSize).Take(pageSize).ToListAsync();
            }

            return result;
        }

        public async Task<List<VenueModel>> GetVenuesList()
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                 return await context.Venues.ToListAsync();
            }
        }

        public async Task<VenueModel> UpdateVenueAsync(VenueModel venue)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var entity = await context.Venues.FirstOrDefaultAsync(x => x.Id == venue.Id);
                entity.Name = venue.Name;
                entity.Description = venue.Description;
                entity.CityId = venue.CityId;
                await context.SaveChangesAsync();
                return venue;
            }
        }
    }
}
