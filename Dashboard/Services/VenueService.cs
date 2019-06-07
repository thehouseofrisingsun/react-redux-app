using System.Collections.Generic;
using System.Threading.Tasks;
using Models;
using Microsoft.Extensions.Configuration;
using DbRepository;
using DBRepository.Interfaces;
using Dashboard.Services.Interfaces;
using Dashboard.API.ViewModels;
using System.Linq;
using DbRepository.Repositories.Interfaces;

namespace Dashboard.Services
{
    public class VenueService : IVenueService
    {
        IVenueRepository _repository;
        IConfiguration _config;

        public VenueService(IVenueRepository repository, IConfiguration configuration)
        {
            _repository = repository;
            _config = configuration;
        }

        public async Task<VenueViewModel> AddVenue(VenueModel venue)
        {
           var result = await _repository.AddVenue(venue);
            return new VenueViewModel
            {
                CityId = result.CityId,
                Description = result.Description,
                Name = result.Name,
                Id = result.Id
            };
        }

        public async Task<VenueViewModel> DeleteVenue(long id)
        {
            var result = await _repository.DeleteVenue(id);
            return new VenueViewModel
            {
                CityId = result.Id,
                Id = result.Id,
                Description = result.Description,
                Name = result.Name
            };
        }

        public async Task<List<City>> GetCities()
        {
            return await _repository.GetCities();
        }

        public async Task<Page<VenueViewModel>> GetVenues(int pageIndex)
        {
            var pageSize = _config.GetValue<int>("pageSize");
            var venues = await _repository.GetVenues(pageIndex, pageSize);
            var result = new Page<VenueViewModel>
            {
                Records = venues.Records.Select(v => new VenueViewModel()
                {
                    CityId = v.CityId,
                    Description = v.Description,
                    Id = v.Id,
                    Name = v.Name,
                }).ToList(),

                CurrentPage = venues.CurrentPage,
                PageSize = pageSize,
                TotalPages = venues.TotalPages,
            };

            return result;
        }

        public async Task<List<VenueViewModel>> GetVenuesList()
        {
            List<VenueModel>  list = await _repository.GetVenuesList();
            var result = list.Select(x => new VenueViewModel
            {
                CityId = x.CityId,
                Description = x.Description,
                Id = x.Id,
                Name = x.Name
            }).ToList();

            return result;
        }

        public async Task<VenueViewModel> UpdateVenue(VenueModel venue)
        {
            var model = await _repository.UpdateVenueAsync(venue);
            return new VenueViewModel
            {
                CityId = model.CityId,
                Description = model.Description,
                Id = model.Id,
                Name = model.Name,
            };

        }
    }
}
