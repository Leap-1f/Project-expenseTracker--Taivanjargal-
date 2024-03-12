import { Button, Logo, Text, Input } from "../supplier/index";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

export default function DashboardPage() {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div>
      <div className="flex items-baseline px-32 justify-between my-5">
        <div className="flex gap-x-6">
          <img src="./Vector.svg" alt="" />
          <p>Dashboard</p>
          <p>Records</p>
        </div>
        <div className="flex gap-x-6">
          <button className="flex flex-row btn w-auto btn-sm rounded-[20px] hover:bg-blue-700  bg-[#0166FF] text-lg font-normal ">
            <img src="./plus.svg" alt="" />
            <p className=" text-sm text-white">Record</p>
          </button>
          <img src="./placeholder.png" alt="" className=" h-8" />
        </div>
      </div>
      <div className=" bg-[#F3F4F6] h-screen">
        div
      </div>
    </div>
  );
}
