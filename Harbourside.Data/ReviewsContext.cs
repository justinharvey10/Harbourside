using Microsoft.EntityFrameworkCore;
using System;

namespace Harbourside.Data
{
    public class ReviewsContext : DbContext
    {
        public DbSet<Review> Reviews { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseCosmos("https://harbourside.documents.azure.com:443/",
                "NknHGliyEhQSJQ69Z65k9ETJyfSf2GQbuliVlEHvsWjGpepNC3ZTSFp24zhjKXinROrH4MzVADu9licPROth8A==", "HarboursideReviews");
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultContainer("HarboursideReviews");
            modelBuilder.Entity<Review>().ToContainer("HarboursideReviews");
            modelBuilder.Entity<Review>().HasNoDiscriminator();

            

        }
    }
}
