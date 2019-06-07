using System;
using System.Collections.Generic;
using System.Text;

namespace DbRepository
{
    public abstract class BaseRepository
    {
        protected string ConnectionString { get; }
        protected IRepositoryContextFactory ContextFactory { get; }

        public BaseRepository(string connectionString, IRepositoryContextFactory repositoryContextFactory)
        {
            ConnectionString = connectionString;
            ContextFactory = repositoryContextFactory;
        }
    }
}
