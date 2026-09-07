export const worldClocks = [
  ["Australia/Melbourne", "Melbourne, AU"],
  ["Asia/Shanghai", "Shanghai, CN"],
  ["America/Los_Angeles", "Long Beach, US"],
  ["Europe/Amsterdam", "Rotterdam, NL"],
  ["Europe/Rome", "La Spezia, IT"],
  ["Africa/Johannesburg", "Durban, ZA"],
].map(([zone, english]) => ({
  zone, english,
  formatter: new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit", minute: "2-digit", hourCycle: "h23", timeZone: zone,
  }),
}));
