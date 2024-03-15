import { Logo, Button } from "../supplier";
import { useRouter } from "next/router"; // Import the useRouter hook

export function FirstStep() {
  const router = useRouter(); // Initialize the router

  const toSecondStep = () => {
    router.push("/stepper/secondstep"); // Navigate to the "/steps/SecondStep" path d s
  };
  return (
    <div className=" flex flex-col items-center gap-y-36 h-screen">
      <div className="flex flex-col items-center mt-10 gap-y-12">
        <Logo></Logo>
        <ul className="steps">
          <li className="step step-info">Register</li>
          <li className="step">Choose plan</li>
          <li className="step">Purchase</li>
        </ul>
      </div>
      <div
        className="max-w-[384px] flex flex-col items-center
      ">
        <div>
          <div>
            <div className="flex flex-col items-center gap-y-4">
              <div className="flex flex-col items-center">
                <div
                  className="bg-cover flex justify-center text-white "
                  style={{
                    backgroundImage: `url('/blueRound.svg')`,
                    width: "40px",
                    height: "40px",
                  }}>
                  <img src="./Money.svg" alt="" className=" text-center w-7" />
                </div>
                <p>Select base currency</p>
              </div>
              <div>
                <details className="dropdown max-w-[384px]">
                  <summary className="m-1 btn">
                    MNT - Mongolian Tugrik <img src=" ./dropDown.svg" alt="" />
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
            <div></div>
          </div>
        </div>
        <div className=" text-xs text-[#475569] mb-8">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one{" "}
        </div>
      </div>
    </div>
  );
}
