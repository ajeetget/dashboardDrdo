import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function PieChartOne() {
  const options: ApexOptions = {
    colors: [
      "#34D399", // Completed
      "#465FFF", // Ongoing
      "#FFB547", // Delayed
      "#F87171", // On Hold
      "#9CA3AF", // Not Started
    ],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "pie",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    labels: [
      "Completed",
      "Ongoing",
      "Delayed",
      "On Hold",
      "Not Started",
    ],
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "Outfit, sans-serif",
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(1)}%`,
    },
    stroke: {
      width: 2,
      colors: ["#ffffff"],
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val} Projects`,
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  // Number of projects in each status category
  const series = [18, 12, 4, 2, 3];

  return (
    <div className="max-w-full overflow-x-auto custom-scrollbar">
      <div id="projectCompletionPieChart" className="min-w-[400px]">
        <Chart
          options={options}
          series={series}
          type="pie"
          height={350}
        />
      </div>
    </div>
  );
}
