import { useContext } from "react";
import { Button } from "../supplier";
import { Plus, X } from "@phosphor-icons/react";
import { useState } from "react";

export const RecordPage = () => {
  // const [position, setPosition] = useContext("Expense")
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const modalStyle = {
    width: "100%", // Set width to 100% to expand
    maxWidth: "1000px", // Set max-width to 1000px
  };

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
            <div className="text-2xl font-semibold flex flex-col gap-y-6">
              <p>Record</p>
              <button
                className="flex flex-row btn w-[250px] btn-sm rounded-[20px]
        hover:bg-blue-700 bg-[#0166FF] text-lg font-normal text-white"
                onClick={openModal}
              >
                <Plus></Plus>
                <p>Add Record</p>
              </button>
              {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div
                    className="modal-box bg-white rounded-lg shadow-lg p-6"
                    style={modalStyle}
                  >
                    <div className="flex justify-between items-baseline mb-4">
                      <div>Add Record</div>
                      <button onClick={closeModal}>Close</button>
                    </div>
                    <div className="flex">
                      <div className="w-1/2"></div>
                      <div className="w-1/2">
                        <p>Payee</p>
                        <div>
                          <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>
                              Who shot first?
                            </option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
              <p className="font-semibold flex flex-col gap-y-6   mb-4">
                Types
              </p>
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
                s
              </div>
              <div>
                <input
                  type="range"
                  min={0}
                  max="100"
                  value="40"
                  className="range range-info "
                />
              </div>
              <div className="flex justify-between">
                <p>0</p>
                <p>100</p>
              </div>
            </div>
          </div>
          <div className="w-[1070px] border-2 h-32 py-6">
            <div className=" flex justify-between">
              {" "}
              <div className="join pl-10">
                <button className="join-item btn">«</button>
                <button className="join-item btn">Page 22</button>
                <button className="join-item btn">»</button>
              </div>
              <div>
                <div>
                  <details className="dropdown max-w-[384px] ">
                    <summary className="m-1 btn border-2">
                      Newest first <img src=" ./dropDown.svg" alt="" />
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
