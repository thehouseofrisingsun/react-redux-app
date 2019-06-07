using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dashboard.API.ViewModels
{
    public class CategoryViewModel
    {
        public long Id { get; set; }

        public string Name { get; set; }

        public string ParentCategory { get; set; }

        public long ParentCategoryId { get; set; }
    }
}
