using Dashboard.API.ViewModels;
using Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dashboard.Services.Interfaces
{
    public interface IVenueService
    {
        Task<Page<VenueViewModel>> GetVenues(int pageIndex);

        Task<VenueViewModel> AddVenue(VenueModel venue);

        Task<VenueViewModel> UpdateVenue(VenueModel venue);

        Task<List<City>> GetCities();

        Task<VenueViewModel> DeleteVenue(long id);

        Task<List<VenueViewModel>> GetVenuesList();
    }
}
