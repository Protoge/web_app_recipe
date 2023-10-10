import React from 'react'
import { Cell, Legend, Pie, PieChart } from 'recharts';

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const PieChartComponent = ({animationData}:{animationData:any}) => {
    const COLORS = ["#7B68EE", "#65AEDD", "#FFBB28",];


    return (
        <PieChart width={400} height={400}>
        <Pie
          data={animationData}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          isAnimationActive={true} // Enable animation
          animationBegin={0} // Start animation from the beginning
          animationDuration={800} // Set animation duration (adjust as needed)
          animationEasing="ease-in-out" // Use ease-in-out easing function
        >
          {animationData.map((entry: any, index: number) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    )
}

export default PieChartComponent