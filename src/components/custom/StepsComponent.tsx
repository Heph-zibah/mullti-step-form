import React from 'react'
import Information from "@/components/custom/Information";
import Plan from "@/components/custom/Plan";
import AddOns from "@/components/custom/AddOns";
import Preview from "@/components/custom/Preview";
import Success from "@/components/custom/Success";
import {  useStep } from "@/hooks/StepProvider";
export function StepsComponent () {
    const {steps} = useStep();
    
      switch(steps) {
        case 1:
          return <Information />;
        case 2: 
          return <Plan />;
        case 3: 
          return <AddOns />;
        case 4:
          return <Preview />;
        case 5:
          return <Success />;
        default:
            return null
      }

    }

