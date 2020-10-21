using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Harbourside.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Harbourside.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        ILogger<ReviewsController> _logger;
        public ReviewsController(ILogger<ReviewsController> logger)
        {
            _logger = logger;
        }
        [HttpGet("GetReviews")]
        public IEnumerable<Review> Get()
        {
            IEnumerable<Review> ret;
            using (var context = new ReviewsContext())
            {
                ret = context.Reviews.ToList();
            }
            return ret;
        }
    }
}
