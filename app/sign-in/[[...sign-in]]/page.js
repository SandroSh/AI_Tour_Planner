import { SignIn } from "@clerk/nextjs";
import React from "react";




const SigninPage = () => {
  return (
    <div className="min-h-screen  fkex justify-center items-center">
      <SignIn />
    </div>
  );
};

export default SigninPage;
