using PhoneService.Api.Models;
using PhoneService.LoadTests.Models;
using PhoneService.LoadTests.Providers;
using PhoneService.LoadTests.Static;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace PhoneService.LoadTests.Services
{
    public class LoadTestService
    {
        private readonly HttpProvider _httpProvider;
        private string _pathPostPhoneConvert = "/api/PhoneService/PostPhoneConvert";
        private string _pathGetPhoneConvert = "/api/PhoneService/GetPhoneConvert";

        public LoadTestService(HttpProvider httpProvider)
        { 
            _httpProvider = httpProvider;
        }

        public async Task<LoadTestPhoneConvertResponse> LoadTestGetPhoneConverAsync()
        {

            var res = new LoadTestPhoneConvertResponse();

            try
            {
                var random = new Random();
                var randomCountTask = random.Next(50, 100);
                res.RequestCount = randomCountTask;
                List<Task<string>> tasks = new List<Task<string>>();

                for (int i = 0; i < randomCountTask; i++)
                {
                    var guid = Guid.NewGuid();
                    var phone = GetPhoneRandom();
                    var url = $"{GlobalBag.PhoneServiceApiUrld}{_pathGetPhoneConvert}?phone={phone}&TraceId={guid}";

                    tasks.Add(_httpProvider.GetRequestAsync(url));
                }

                await Task.WhenAll(tasks);

                foreach (var task in tasks)
                {
                    var resTask = await task;

                    if (!string.IsNullOrEmpty(resTask))
                    {
                        JsonSerializerOptions options = new(JsonSerializerDefaults.Web)
                        {
                            WriteIndented = true
                        };

                        var response = JsonSerializer.Deserialize<PhoneConvertResponse>(resTask, options);

                        if (response is not null)
                        {
                            if (response.Success)
                            {
                                res.ComplitRequestCount++;
                            }
                            else
                            {
                                res.UnsuccessfulRequestsCount++;
                            }
                        }
                    }
                }
            }
            catch { }

            return res;
        }

        public async Task<LoadTestPhoneConvertResponse> LoadTestPostPhoneConverAsync()
        {
            var res = new LoadTestPhoneConvertResponse();

            try
            {
                var random = new Random();
                var randomCountTask = random.Next(50, 100);
                res.RequestCount = randomCountTask;
                List<Task<string>> tasks = new List<Task<string>>();

                for (int i = 0; i < randomCountTask; i++)
                {
                    var guid = Guid.NewGuid();
                    var phone = GetPhoneRandom();
                    var url = $"{GlobalBag.PhoneServiceApiUrld}{_pathPostPhoneConvert}";
                    var requestData = new PhoneConvertRequest()
                    { 
                        Phone = phone,
                        TraceId = guid,
                    };

                    tasks.Add(_httpProvider.PostRequestAsync(url, requestData));
                }

                await Task.WhenAll(tasks);

                foreach (var task in tasks)
                {
                    var resTask = await task;

                    if (!string.IsNullOrEmpty(resTask))
                    {
                        JsonSerializerOptions options = new(JsonSerializerDefaults.Web)
                        {
                            WriteIndented = true
                        };

                        var response = JsonSerializer.Deserialize<PhoneConvertResponse>(resTask, options);

                        if (response is not null)
                        {
                            if (response.Success)
                            {
                                res.ComplitRequestCount++;
                            }
                            else
                            {
                                res.UnsuccessfulRequestsCount++;
                            }
                        }
                    }
                }
            }
            catch { }

            return res;
        }

        private string GetPhoneRandom()
        {
            var result = "89";
            var random = new Random();

            for (int i = 0; i <= 8 ; i++)
            {
                result += random.Next(0,9);
            }

            return result;
        }

    }
}
