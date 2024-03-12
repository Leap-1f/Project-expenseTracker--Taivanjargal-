// import FirstStep from "../steps/FirstStep";?
import { SecondStep, FirstStep, ThirdStep } from "../steps";

export default function Stepper() {
  return (
    <div>
      <FirstStep />
      <SecondStep />
      <ThirdStep></ThirdStep>
    </div>
  );
}
