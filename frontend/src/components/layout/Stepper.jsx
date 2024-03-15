// import FirstStep from "../steps/FirstStep";?
import { useState } from "react";
import { SecondStep, FirstStep, ThirdStep } from "../steps";

export const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div>
      {currentStep === 1 && <FirstStep />}
      {currentStep === 1 && <FirstStep />}
      {currentStep === 1 && <FirstStep />}
      <div>
        <Button text={"Go to dashboard"} addClass={"w-[383px]"}></Button>
      </div>
    </div>
  );
};
