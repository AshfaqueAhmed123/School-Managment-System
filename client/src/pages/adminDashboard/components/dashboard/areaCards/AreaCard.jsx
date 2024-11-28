import PropTypes from "prop-types";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import { useState,useEffect } from "react";
import { fetchWrapper } from "@/utils/fetchWrapper";

const AreaCard = ({ colors, percentFillValue, cardInfo }) => {
  const maleCount = (percentFillValue / 100) * 360; // 360 degress for a full circle
  const femaleCount = 360 - maleCount;

  const data = [
    { name: "female", value: femaleCount },
    { name: "male", value: maleCount },
  ];

  const renderTooltipContent = (value) => {
    return `${(value / 360) * 100} %`;
  };


  return (
    <div className="area-card">
      <div className="area-card-info">
        <h5 className="info-title">{cardInfo.title}</h5>
        <div className="info-value">{cardInfo.value}</div>
        <p className="info-text">{cardInfo.text}</p>
      </div>
      <div className="area-card-chart">
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx={50}
            cy={45}
            innerRadius={20}
            fill="#e4e8ef"
            paddingAngle={0}
            dataKey="value"
            startAngle={-270}
            endAngle={150}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={renderTooltipContent} />
        </PieChart>
      </div>
    </div>
  );
};

export default AreaCard;

AreaCard.propTypes = {
  colors: PropTypes.array.isRequired,
  percentFillValue: PropTypes.number.isRequired,
  cardInfo: PropTypes.object.isRequired,
};
