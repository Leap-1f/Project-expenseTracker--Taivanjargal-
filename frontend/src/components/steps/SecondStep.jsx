import { Input, Logo, Button } from "../supplier/index";

export function SecondStep() {
  return (
    <div className="flex flex-col items-center gap-y-36">
      <div className="flex flex-col items-center mt-10 gap-y-12">
        <Logo></Logo>
        <ul className="steps ">
          <li className="step step-info">Register</li>
          <li className="step step-info">Choose plan</li>
          <li className="step">Purchase</li>
        </ul>
      </div>
      <div>
        <div className=" flex flex-col items-center">
          <div
            className="bg-cover flex justify-center text-white w"
            style={{
              backgroundImage: `url('/blueRound.svg')`,
              width: "40px",
              height: "40px",
            }}>
            <img src="./Coins.svg" alt="" className=" text-center w-7" />
          </div>
          <p className=" text-2xl font-semibold mt-4">
            Set up your cash Balance
          </p>
          <Input
            placeholder={"Email"}
            type={"email"}
            addClass={"mt-6 w-96"}></Input>
          <p className=" mt-3 text-xs text-[#475569] self-start">
            How much cash do you have in your wallet?
          </p>
        </div>
        <div className="mt-8">
          <Button text={"Confirm "}></Button>
        </div>
      </div>
    </div>
  );
}
