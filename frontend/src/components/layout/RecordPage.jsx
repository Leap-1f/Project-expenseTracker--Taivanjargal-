import { Button } from "../supplier";

export const RecordPage = () => {
  const data = [
    "Shopping",
    "Housing",
    "Transportation",
    "Vehicle",
    "Life & Entertainment",
    "Communication, PC",
    "Financial expenses",
    "Investments",
    "Income",
    "Other",
  ];
  return (
    <div>
      <div className=" bg-[#F3F4F6] h-auto pt-9 flex justify-center">
        <div className=" max-w-[1401px] border-2 flex gap-x-[30px]">
          <div className=" w-[300px] border-2 px-4 py-6 flex flex-col gap-y-6 bg-white">
            <div className=" text-2xl font-semibold flex flex-col gap-y-6">
              <p>Record</p>
              <button className="flex flex-row btn w-[250px] btn-sm rounded-[20px] hover:bg-blue-700  bg-[#0166FF] text-lg font-normal ">
                <img src="./plus.svg" alt="" />
                <p className=" text-sm text-white">Add</p>
              </button>
            </div>
            <div>
              <div>
                <input
                  placeholder="Search"
                  className="input  border-[1px] border-gray-200  w-[248px] h-8 bg-[#f8f9fb]"
                />
                <p></p>
              </div>
            </div>
            <div>
              <p className="font-semibold flex flex-col gap-y-6 mb-4">Types</p>
              <div className=" px-3 flex flex-col gap-2">
                <div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox rounded-[50%] w-3 h-3  [--chkbg:theme(colors.blue.600)] [--chkfg:white]"
                  />
                  <span className="label-text ml-2 first-letter:">All</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox rounded-[50%] w-3 h-3 [--chkbg:theme(colors.blue.600)] [--chkfg:white]"
                  />
                  <span className="label-text ml-2">Income</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox rounded-[50%] w-3 h-3 [--chkbg:theme(colors.blue.600)] [--chkfg:white]"
                  />
                  <span className="label-text ml-2">Expense</span>
                </div>
              </div>
            </div>
            <div>
              <div className=" flex justify-between mb-4">
                <p className=" font-semibold">Category</p>
                <p className=" opacity-15"> Clear</p>
              </div>
              <div className="menu flex flex-col gap-y-4 ">
                {data.map((el, index) => {
                  return (
                    <li>
                      <div className="flex p-0 justify-between">
                        <div className="flex">
                          <img src="./eye.svg" alt="" />
                          <p className="ml-3" key={index}>
                            {el}{" "}
                          </p>
                        </div>
                        <img src="./arrowRight.svg" alt="" />
                      </div>
                    </li>
                  );
                })}

                <div className="flex  ">
                  <img src="./bluePlus.svg" alt="" />
                  <p className="ml-3">Food & Drinks</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className=" font-semibold">Amount Range</p>
              <div className="flex gap-x-4">
                <div className="w-[100px] rounded-lg bg-[#F3F4F6] border-2 h-12 flex items-center">
                  <p className=" pl-4">0</p>
                </div>
                <div className="w-[100px] rounded-lg bg-[#F3F4F6] border-2 flex items-center h-12">
                  <p className="pl-4">100</p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="w-[1070px] border-2 h-32">w</div>
        </div>
      </div>
    </div>
  );
};
