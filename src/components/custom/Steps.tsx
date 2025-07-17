import React from 'react'
import Information from '@/components/custom/Information'
import Plan from "@/components/custom/Plan";
import AddOns from "@/components/custom/AddOns";
import Preview from "@/components/custom/Preview";
import Success from "@/components/custom/Success";
import { Button } from "@/components/ui/button";
const Steps = () => {
  return (
    <div className="">
      <Information />
      <Plan />
      <AddOns />
      <Preview />
      <Success />
      <div className="bg-white px-6 py-3 font-semibold fixed bottom-0 right-0 w-full flex justify-between items-center lg:bg-transparent lg:absolute lg::top-20 ">
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
      </div>
    </div>
  );
};

export default Steps