using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models
{
    public class CategoryModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public string Name { get; set; }

       // public int? ParentCategoryId { get; set; }

       // public virtual CategoryModel ParentCategory { get; set; }

       // public virtual ICollection<CategoryModel> Categories { get; set; }
    }
}
