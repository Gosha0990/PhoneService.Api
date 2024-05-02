using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PhoneService.LoadTests.Services;

namespace PhoneService.LoadTests.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LoadTestsController : ControllerBase
    {
        private readonly LoadTestService _loadTestService;
        public LoadTestsController(LoadTestService loadTestService) 
        { 
            _loadTestService = loadTestService;
        }

        [HttpGet]
        public async Task<IActionResult> LoadTestGetPhoneConvert()
        {
            var response = await _loadTestService.LoadTestGetPhoneConverAsync();

            if(response is not null)
            {
                return Ok(response);
            }
            else 
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<IActionResult> LoadTestPostPhoneConvert()
        {
            var response = await _loadTestService.LoadTestPostPhoneConverAsync();

            if (response is not null)
            {
                return Ok(response);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
