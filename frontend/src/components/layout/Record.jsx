import { DashboardPage } from "@/components/layout/DashboardPage";
import { RecordPage } from "@/components/layout/RecordPage"
import { useContext } from "react";
import { Context } from "../utils/Context";

export default function Record() {
  const {data } = useContext(Context)
   return (
    <div>
      <div className="flex justify-center">
        <div className="items-baseline  w-[1401px] flex justify-between bg-white top-0 my-5">
          <div className="flex gap-x-6 ">
            <img src="./Vector.svg" alt="" />
            <p>Dashboard</p>
            <p>Records</p>
          </div>
          <div className="flex gap-x-6 ">
            <button className="flex flex-row btn w-auto btn-sm rounded-[20px] hover:bg-blue-700  bg-[#0166FF] text-lg font-normal ">
              <img src="./plus.svg" alt="" />
              <p className=" text-sm text-white">Record</p>
            </button>
            <img src="./placeholder.png" alt="" className=" h-8" />
          </div>
        </div>
      </div>
      {/* <DashboardPage></DashboardPage> */}
      <RecordPage></RecordPage>
    </div>
  );
}
