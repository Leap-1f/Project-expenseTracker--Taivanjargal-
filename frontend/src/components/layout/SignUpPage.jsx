import { useState } from "react";
import { Logo, Button, Input, Text } from "../supplier/index";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { userSchema } from "../validation/UserValid";
import { useRouter } from "next/router";

export const SignUpPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const createData = async (event) => {
    event.preventDefault();
    const id = uuidv4();
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData, id }),
      });
      if (response.ok) {
        console.log("User data saved successfully");
      } else {
        console.error("Failed to save user data");
      }
    } catch (error) {
      console.error("Error:", error);
    }

  };

  return (
    <div className="flex ">
      <div className="w-1/2 h-screen flex justify-center items-center ">
        <div className=" flex flex-col gap-y-10 ">
          <Logo addClass={"flex justify-center gap-x-2"} />
          <div className="flex flex-col gap-y-1">
            <Text
              text={"Create Geld Account"}
              addClass={"text-2xl font-semibold text-slate-900 text-center"}
            />
            <Text
              text={"Sign up below to create your Wallet account"}
              addClass={"text-[#334155] text-center"}
            />
          </div>
          <form className="flex flex-col gap-y-4 w-[384px]">
            <Input
              type={"text"}
              placeholder={"Name"}
              addClass={" w-full"}
              onChange={(event) => {
                setUserData({ ...userData, name: event.target.value });
              }}
            />
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
            <Input
              type={"Password"}
              placeholder={"Re-Pasword"}
              addClass={" w-full"}
              onChange={(event) => {
                setUserData({ ...userData, repassword: event.target.value });
              }}
            />
            <Button text={"Sign Up"} onClick={createData}></Button>
          </form>
          <div className=" flex justify-between">
            <Text text={"Already have an account?"}></Text>
            <Link href="/login">
              <span className="text-[#0166FF]">Login </span>
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-1/2 h-screen bg-[#0166FF]"></div>
    </div>
  );
};
