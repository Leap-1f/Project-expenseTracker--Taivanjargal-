import { Button, Logo, Text, Input } from "../supplier/index";
import { Chart as ChartJS } from "chart.js/auto";
import { useContext } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { Context } from "../utils/Context";

export const DashboardPage = () => {
  const string = [
    "Lending & Renting",
    "Killing & Shooting",
    "Arrogance  & Boast",
    "Obanai  & Mitsuri",
    "Kimizuka & Natsugani",
  ];

  const { data, options, optionsBar, dataBar } = useContext(Context);
  return (
    <div>
      <div className=" bg-[#F3F4F6] h-auto pt-9 flex justify-center">
        <div className=" max-w-[1401px] ">
          <div className="flex gap-x-3 justify-center flex-wrap gap-y-5">
            <img src="./NoiseCard.svg" alt="" className="w-[450px]" />
            <div className=" bg-white w-[450px] h-auto rounded-lg">
              <div className=" px-6 py-5 flex gap-x-2 border-b-2 text-lg">
                <img src="./Ellipse.svg" alt="" />
                <p>Your income</p>
              </div>
              <div className="px-8 py-5 ">
                <div>
                  <p className=" font-semibold text-4xl">1,200,000 ₮</p>
                  <p className="text-[#64748B] pt-3 ">Your income account</p>
                </div>
                <div className="flex pt-7 ">
                  <img src="./Arrow.svg" alt="" />
                  <p>32% from last month</p>
                </div>
              </div>
            </div>
            <div className=" bg-white w-[450px] h-auto rounded-lg">
              <div className=" px-6 py-5 flex gap-x-2 border-b-2 text-lg">
                <img src="./Ellipse2.svg" alt="" />
                <p>Total Expenses</p>
              </div>
              <div className="px-8 py-5 ">
                <div>
                  <p className=" font-semibold text-4xl">1,200,000 ₮</p>
                  <p className="text-[#64748B] pt-3">Your income account</p>
                </div>
                <div className="flex pt-7 ">
                  <img src="./Arrow.svg" alt="" />
                  <p>32% from last month</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex mt-7 px-3 gap-x-4 flex-wrap">
            <div className=" bg-white w-[670px] rounded-lg">
              <div className=" px-6 py-5 border-b-[1px] flex justify-between">
                <p>Income - Expense</p>
              </div>
              <div className="px-6 py-6 h-[300px] w-[650px]  ">
                <Bar data={dataBar} options={optionsBar}></Bar>
              </div>
            </div>
            <div className=" bg-white w-[670px] rounded-lg ">
              <div className=" px-6 py-5 border-b-[1px] flex justify-between">
                <p>Income - Expense</p>
                <p>Jun 1 - Nov 30</p>
              </div>
              <div className="px-6 py-5 w-[300px] flex  gap-x-20">
                <Doughnut data={data} options={options}></Doughnut>
                <div className="flex flex-col gap-y-[18px] pt-7">
                  <p>5’000’000₮</p>
                  <p>5’000’000₮</p>
                  <p>5’000’000₮</p>
                  <p>5’000’000₮</p>
                  <p>5’000’000₮</p>
                </div>
                <div className="flex flex-col gap-y-[18px] pt-7">
                  <p>15.50%</p>
                  <p>15.50%</p>
                  <p>15.50%</p>
                  <p>15.50%</p>
                  <p>15.50%</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white w-full h-auto mt-7 rounded-xl  px-3">
            <div>
              <p className=" px-6 py-5 border-b-[1px]">Last Recordings</p>
            </div>
            <div>
              {string.map((el, index) => {
                return (
                  <div>
                    <div className="flex j border-b-[1px]">
                      <div className="py-5">
                        <div
                          className="bg-cover flex justify-center text-white "
                          style={{
                            backgroundImage: `url('/blueRound.svg')`,
                            width: "40px",
                            height: "40px",
                          }}>
                          <img
                            src="./House.svg"
                            alt=""
                            className=" text-center w-7"
                          />
                        </div>
                      </div>
                      <div className="px-6 py-5">
                        <p key={index} className=" ">
                          {el}
                        </p>
                        <p className=" text-[#6B7280]">3 hours ago</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
