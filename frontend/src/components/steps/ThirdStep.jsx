import { Logo, Button } from "../supplier/index";

export function ThirdStep() {
  return (
    <div className=" flex flex-col items-center gap-y-36 h-screen">
      <div className="flex flex-col items-center mt-10 gap-y-12">
        <Logo></Logo>
        <ul className="steps">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step step-primary">Purchase</li>
        </ul>
      </div>
      <div className="max-w-[384px] flex flex-col items-center">
        <div className="flex flex-col items-center gap-y-4">
          <div className="flex flex-col items-center">
            <div
              className="bg-cover flex justify-center text-white "
              style={{
                backgroundImage: `url('/blueRound.svg')`,
                width: "40px",
                height: "40px",
              }}>
              <img src="./Check.svg" alt="" className=" text-center w-7" />
            </div>
            <p className="text-2xl font-semibold mt-4">Good Job!</p>
          </div>
        </div>
        <div className=" text-base text-[#475569] mb-8">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </div>
        <Button text={"Go to dashboard"} addClass={"w-[383px]"}></Button>
      </div>
    </div>
  );
}
