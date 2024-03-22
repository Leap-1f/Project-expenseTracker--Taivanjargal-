import { useState } from "react";
import React from "react"; // Add this import statement
import DatePicker from "react-datepicker";
import { RecordCategory } from "./RecordCategory";
import "react-datepicker/dist/react-datepicker.css";

export const ModalComponent = () => {
  const [value, setValue] = useState("Expense");
  const [startDate, setStartDate] = useState(new Date());
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };

  return (
    <div className="flex *:text-lg font-normal">
      <div className="w-1/2">
        <div className="flex bg-[#F3F4F6] max-w-[400px] rounded-3xl my-6">
          <div
            className={`px-16 py-3 rounded-3xl ${
              value === "Expense"
                ? "bg-[#0166FF] text-white font-light"
                : "bg-[#F3F4F6] font-light"
            }`}
            onClick={() => setValue("Expense")}
            data-value="Expense"
          >
            Expense
          </div>
          <div
            className={`px-[73px] py-3 rounded-3xl ${
              value === "Income"
                ? "bg-[#16A34A] text-white font-light"
                : "bg-[#F3F4F6] font-light"
            }`}
            onClick={() => setValue("Income")}
            data-value="Income"
          >
            Income
          </div>
        </div>
        <div>
          {value === "Expense" ? (
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-6">
                <div>
                  <div className="bg-[#F3F4F6] rounded-lg pt-2 border-[#D1D5DB] border-[1px] max-w-[400px]">
                    <p className=" ml-4 text-base">Amount</p>
                    <input
                      type="number"
                      placeholder="₮ 000.00"
                      style={{ fontSize: "24px" }}
                      className="input w-full max-w-xs bg-[#F3F4F6] "
                    />
                  </div>
                </div>
                <RecordCategory></RecordCategory>
                <div className="flex  gap-x-10">
                  <div className="py-4 px-4 bg-[#F3F4F6] border-[1px] max-w-44 rounded-lg">
                    <DatePicker
                      selected={startDate}
                      className="bg-[#F3F4F6] w-[150px]"
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                  <div className="py-4 px-4 bg-[#F3F4F6] border-[1px] max-w-44 rounded-lg">
                    <DatePicker
                      selected={startDate}
                      className="bg-[#F3F4F6]  w-[150px]"
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <button
                  className={`flex flex-row btn w-[400px] btn-sm  h-auto
        hover:bg-blue-700  text-lg font-normal text-white px-16 py-3 rounded-3xl ${
          value === "Income" ? "bg-[#16A34A] text-white" : "bg-[#0166FF]"
        }`}
                >
                  <p className=" font-light"> Add Record</p>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-6">
                <div>
                  <div className="bg-[#F3F4F6] rounded-lg pt-2 border-[#D1D5DB] border-[1px] max-w-[400px]">
                    <p className=" ml-4 text-base">Amount</p>
                    <input
                      type="text"
                      placeholder="₮ 000.00"
                      style={{ fontSize: "24px" }}
                      className="input w-full max-w-xs bg-[#F3F4F6] "
                    />
                  </div>
                </div>
                <RecordCategory></RecordCategory>
                <div className="flex  gap-x-10">
                  <div className="py-4 px-4 bg-[#F3F4F6] border-[1px] max-w-44 rounded-lg">
                    <DatePicker
                      selected={startDate}
                      className="bg-[#F3F4F6] w-[150px]"
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                  <div className="py-4 px-4 bg-[#F3F4F6] border-[1px] max-w-44 rounded-lg">
                    <DatePicker
                      selected={startDate}
                      className="bg-[#F3F4F6]  w-[150px]"
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <button
                  className={`flex flex-row btn w-[400px] btn-sm  h-auto
        hover:bg-blue-700  text-lg font-normal text-white px-16 py-3 rounded-3xl ${
          value === "Income" ? "bg-[#16A34A] text-white" : "bg-[#0166FF]"
        }`}
                >
                  <p> Add Record</p>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-1/2 ml-7  ">
        <label className="form-control w-full  max-w-[400px]">
          <div className="label">
            <span className="label-text">Payee</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full bg-[#F3F4F6]"
          />
        </label>
        <label className="form-control mt-5">
          <div className="label">
            <span className="label-text">Note</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-[315px] bg-[#F3F4F6]"
            placeholder="Bio"
          ></textarea>
        </label>
      </div>
    </div>
  );
};
