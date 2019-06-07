using System;
using System.Collections.Generic;
using System.Text;

namespace DbRepository
{
    public interface IRepositoryContextFactory
    {
        RepositoryContext CreateDbContext(string connectionString);
    }
}
