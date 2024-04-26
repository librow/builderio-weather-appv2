import * as React from "react";

interface WeatherIconProps {
  icon: string;
  className?: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ icon, className }) => (
  <img src={icon} alt="Weather icon" className={className} />
);

interface TemperatureUnitProps {
  unit: "C" | "F";
  isActive: boolean;
}

const TemperatureUnit: React.FC<TemperatureUnitProps> = ({ unit, isActive }) => (
  <div
    className={`justify-center items-center px-2 text-cyan-600 rounded-full h-[21px] w-[21px] ${
      isActive ? "bg-white" : ""
    }`}
  >
    {unit}
  </div>
);

interface ForecastDayProps {
  day: string;
  icon: string;
  temperature: number;
}

const ForecastDay: React.FC<ForecastDayProps> = ({ day, icon, temperature }) => (
  <div className="flex flex-col justify-center items-center self-stretch my-auto">
    <div className="text-sm font-bold">{day}</div>
    <WeatherIcon icon={icon} className="self-center mt-2.5 aspect-[0.96] w-[45px]" />
    <div className="mt-2 text-2xl">{temperature}</div>
  </div>
);

const MyComponent: React.FC = () => {
  const forecastData: ForecastDayProps[] = [
    { day: "Sun", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2979c23ca1a904fa862effec6d29c980dce407bb5ddb7942a31ddc86a8a7d78e?apiKey=bc440fac68a64e66926b38216715f888&", temperature: 92 },
    { day: "Mon", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/24f7521f123716a335313d804251630c9115e177fb3a22843e32d42daef33640?apiKey=bc440fac68a64e66926b38216715f888&", temperature: 87 },
    { day: "Tue", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2f3f486cc61df24d9ca97a04d54fa592228dfb8efd75f697e5d08baeffd69d8?apiKey=bc440fac68a64e66926b38216715f888&", temperature: 93 },
    { day: "Wed", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2f3f486cc61df24d9ca97a04d54fa592228dfb8efd75f697e5d08baeffd69d8?apiKey=bc440fac68a64e66926b38216715f888&", temperature: 95 },
    { day: "Thu", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a34bbe3dcaa921786a404ae3fe74fdd782216a074a6ce8173355b77c95c01a5?apiKey=bc440fac68a64e66926b38216715f888&", temperature: 88 },
  ];

  return (
    <div className="flex justify-center items-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center mt-12 mb-16 max-w-full w-[670px] max-md:my-10">
        <div className="flex gap-2.5 text-lg font-semibold text-right text-white">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb244f8636ca063a12a8e4c03828d2b3c41cd778d52ad39dcfe6a62c5b04613a?apiKey=bc440fac68a64e66926b38216715f888&"
            alt="Location icon"
            className="shrink-0 self-start w-2.5 aspect-[0.67] fill-white"
          />
          <div>Dallas, TX</div>
        </div>
        <div className="mt-2 text-sm text-center text-white">Saturday, Sep 16, 2018</div>
        <div className="flex flex-col self-stretch mt-2.5 bg-white rounded shadow-sm max-md:max-w-full">
          <div className="box-border flex relative flex-col shrink-0 mt-0 bg-center bg-no-repeat bg-cover bg-[url(https://cdn.builder.io/api/v1/image/assets%2Fbc440fac68a64e66926b38216715f888%2F01ab6ad93f7345d5923bcf9c03ff1294)] h-[400px]">
            <div className="flex flex-row justify-between px-8 pt-8 max-md:pl-5 max-md:max-w-full">
              <div className="flex gap-1.5 items-start self-stretch max-md:flex-wrap">
                <div className="self-stretch mr-auto w-auto text-5xl text-left text-blue-400 grow-0 max-md:text-4xl">
                  93
                </div>
                <div className="flex gap-0.5">
                  <div className="shrink-0 self-start mt-1 w-2.5 h-2.5 rounded-full border-blue-400 border-solid border-[3px] stroke-[2.5px]" />
                  <WeatherIcon icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8d66cd7a4760fa52f0be790ebb0da8a313ec5013e114cdc30915044c0e1a95c7?apiKey=bc440fac68a64e66926b38216715f888&" className="shrink-0 aspect-[1.12] w-[45px]" />
                </div>
                <div className="gap-5 justify-between mt-1.5 text-sm font-semibold text-blue-400 max-md:flex-wrap max-md:max-w-full">
                  Partly Cloudy
                  <br />
                  12 mph
                </div>
              </div>
              <div className="flex gap-3 self-start py-0.5 pr-1 pl-3 text-center whitespace-nowrap bg-cyan-600 rounded-xl">
                <div className="my-auto text-white">C</div>
                <TemperatureUnit unit="F" isActive />
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center self-stretch px-8 text-center whitespace-nowrap text-neutral-600 max-md:flex-wrap max-md:mt-10">
            {forecastData.map((forecast, index) => (
              <React.Fragment key={forecast.day}>
                <ForecastDay {...forecast} />
                {index < forecastData.length - 1 && (
                  <div className="shrink-0 self-stretch w-px bg-zinc-300 h-[142px]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;