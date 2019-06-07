﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }
       public ICollection<VenueModel> Venues { get; set; }
    }
}
