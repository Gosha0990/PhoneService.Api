namespace PhoneService.LoadTests.Static
{
    public static class GlobalBag
    {
        public static string PhoneServiceApiUrld { get; } = Environment.GetEnvironmentVariable("PhoneServiceApiUrl") ?? string.Empty;
    }
}
