using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class VenueModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int Capacity { get; set; }

        public City City { get; set; }

        public int CityId { get; set; }

        public string Address { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }
    }
}
