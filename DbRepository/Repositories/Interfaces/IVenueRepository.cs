using Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DbRepository.Repositories.Interfaces
{
    public interface IVenueRepository
    {
        Task<Page<VenueModel>> GetVenues(int pageIndex, int pageSize);

        Task<VenueModel> AddVenue(VenueModel venue);

        Task<VenueModel> UpdateVenueAsync(VenueModel venue);

        Task<List<City>> GetCities();

        Task<VenueModel> DeleteVenue(long id);

        Task<List<VenueModel>> GetVenuesList();
    }
}
