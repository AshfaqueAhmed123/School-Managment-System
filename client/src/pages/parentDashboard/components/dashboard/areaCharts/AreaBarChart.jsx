import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";

const data = [
  {
    class: "i",
    absent: 70,
    present: 100,
  },
  {
    class: "ii",
    absent: 55,
    present: 85,
  },
  {
    class: "iii",
    absent: 35,
    present: 90,
  },
  {
    class: "iv",
    absent: 90,
    present: 70,
  },
  {
    class: "v",
    absent: 55,
    present: 80,
  },
  {
    class: "vi",
    absent: 30,
    present: 50,
  },
  {
    class: "vii",
    absent: 32,
    present: 75,
  },
  {
    class: "viii",
    absent: 62,
    present: 86,
  },
  {
    class: "ix",
    absent: 55,
    present: 78,
  },
  {
    class: "x",
    absent: 55,
    present: 78,
  },
  {
    class: "xi",
    absent: 55,
    present: 78,
  },
  {
    class: "ix",
    absent: 55,
    present: 78,
  },
];

const AreaBarChart = () => {
  const { theme } = useContext(ThemeContext);

  const formatTooltipValue = (value) => {
    return `${value}s`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}s`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">Students Attendence Report (Present Day)</h5>
        <div className="chart-info-data">
          <div className="info-data-value"></div>
          <div className="info-data-text">
            <FaArrowUpLong className="w-0" />
            <p></p>
          </div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="class"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="present"
              fill="#475be8"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="absent"
              fill="#e3e7fc"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;
