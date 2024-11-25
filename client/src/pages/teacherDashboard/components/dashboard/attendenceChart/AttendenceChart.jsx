import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function AttendenceChart() {
  return (
    <div className='flex mt-10 gap-5 flex-col items-center'>
    <h1 className='text-white text-2xl capitalize font-sans'>Your Overall performance (This Month Only) </h1>
    <LineChart
    sx={{
        color:"red !important",
        textAlign:"center",
        fill:"red"
    }}
    className='m-auto'
    margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
    grid={{ vertical: true, horizontal: true }}
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={window.innerWidth/1.5}
      height={300}
    />
    </div>
  );
}