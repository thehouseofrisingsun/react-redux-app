using Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Dashboard.Services.Interfaces;
using Dashboard.API.ViewModels;
using System.Collections.Generic;

namespace Dashboard.Controllers
{
    [Route("api/[controller]")]
    public class VenueController : Controller
    {
        IVenueService _venueService;

        public VenueController(IVenueService venueService)
        {
            _venueService = venueService;
        }


        public IActionResult Index()
        {
            return View();
        }

        [Route("venue")]
        [HttpGet]
        public async Task<List<VenueViewModel>> GetVenues()
        {
            return await _venueService.GetVenuesList();
        }

        [Route("venuePage")]
        [HttpGet]
        public async Task<Page<VenueViewModel>> GetVenues(int pageIndex)
        {
            var result = await _venueService.GetVenues(pageIndex);
            return result;
        }

        [Route("city")]
        [HttpGet]
        public async Task<List<City>> GetCities()
        {
            return await _venueService.GetCities();
        }

        [Route("venue")]
        [HttpPost]
        public async Task<VenueViewModel> AddVenue([FromBody] VenueModel venue)
        {
            var result = await _venueService.AddVenue(venue);
            return result;
        }

        [Route("venue")]
        [HttpPut]
        public async Task<VenueViewModel> UpdateCategory([FromBody] VenueModel venue)
        {
            var result = await _venueService.UpdateVenue(venue);
            return result;
        }

        [Route("venue")]
        [HttpDelete]
        public async Task<VenueViewModel> DeleteVenue([FromBody]  VenueViewModel venue)
        {
           return await _venueService.DeleteVenue(venue.Id);
        }
    }
}
