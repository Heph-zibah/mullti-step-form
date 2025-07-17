"use client";
import React from "react";
// import { Button } from "@/components/ui/button";
import { StepProvider } from "@/hooks/StepProvider";
import { StepsComponent } from "@/components/custom/StepsComponent";
const Steps = () => {
  return (
    <div className="">
      <StepProvider>
        <StepsComponent />
      </StepProvider>

      {/* <div className="bg-white px-6 py-3 font-semibold fixed bottom-0 right-0 w-full flex justify-between items-center lg:bg-transparent lg:absolute lg::top-20 ">
        <Button
          type="button"
          variant={"secondary"}
          className="font-semibold transition-colors duration-300 "
        >
          Go Back
        </Button>
        <Button
          type="submit"
          className="bg-[var(--blue-950)]   transition-colors duration-300 "
        >
          Next Step
        </Button>
      </div> */}
    </div>
  );
};

export default Steps;
