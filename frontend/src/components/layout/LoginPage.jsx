import Link from "next/link";
import { Button, Logo, Text, Input } from "../supplier/index";
import Stepper from "./Stepper";
export const LoginPage = () => {
  return (
    <div className="flex">
      <div className="w-1/2 h-screen items-center flex justify-center">
        <div className="flex flex-col gap-y-10">
          <Logo addClass={"flex justify-center"} />
          <div className="flex flex-col gap-y-1">
            <Text
              text={"Welcome Back"}
              addClass={"text-2xl font-semibold text-slate-900 text-center"}
            />
            <Text
              text={"Welcome back, Please enter your details"}
              addClass={"text-[#334155] text-center"}
            />
          </div>
          <form className="flex flex-col gap-4 w-[384px] px-4 sm:px-0">
            <Input placeholder={"Email"} type={"email"} addClass={" w-full"} />
            <Input
              placeholder={"Password"}
              type={"password"}
              addClass={" w-full"}
            />
            <Button text={"Log in"} />
          </form>
          <div className="flex justify-between">
            <p>Don't have an account?</p>{" "}
            <Link href="/signup">
              <span className="text-[#0166FF]">Sign up</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-[#0166FF]"></div>
    </div>
    // <Stepper />
  );
};
