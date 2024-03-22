import Link from "next/link";
import { Button, Logo, Text, Input } from "../supplier/index";
import { useRouter } from "next/router";
import { userValidate } from "../validation/UserValid";
import { useState } from "react";

export const LoginPage = () => {
  
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const switchToSteps = () => {
    router.push("/step");
  };
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
            <Input
              type={"email"}
              placeholder={"Email"}
              addClass={" w-full"}
              onChange={(event) => {
                setUserData({ ...userData, email: event.target.value });
              }}
            />
            <Input
              type={"Password"}
              placeholder={"Pasword"}
              addClass={" w-full"}
              onChange={(event) => {
                setUserData({ ...userData, password: event.target.value });
              }}
            />
            <Button text={"Log in"} onClick={switchToSteps} />
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
