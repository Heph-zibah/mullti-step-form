import React from 'react'
import StepsLayout from "@/layout/StepsLayout";
import { Button } from "@/components/ui/button";
import { useStep } from "@/hooks/StepProvider";
const Preview = () => {
  const { stepsData } = useStep();
  const billingCycle = stepsData.plan?.billingCycle || "monthly";
  type PriceType = { [key: string]: number };
  const planPrice =
    typeof stepsData.plan?.price === "object" && stepsData.plan?.price !== null
      ? (stepsData.plan.price as PriceType)[billingCycle] || 0
      : 0;
  const addOnsPrice = (stepsData.addOns || []).reduce((total, addOn) => {
    if (typeof addOn.price === "object" && addOn.price !== null) {
      return total + ((addOn.price as PriceType)[billingCycle] || 0);
    }
    if (typeof addOn.price === "number") {
      return total + addOn.price;
    }
    return total;
  }, 0);

  const totalPrice = planPrice + addOnsPrice;
  console.log(stepsData);
  const { onNextStep, onPrevStep } = useStep();
  const handleSubmit = () => {
    console.log(stepsData);
    onNextStep();
  };
  return (
    <StepsLayout
      title="Finishing Up"
      subtitle="  Double-check everything looks OK before confirming"
    >
      <div className="">
        <div className="bg-[var(--blue-100)] p-5 rounded-lg">
          <div className="flex items-center justify-between border-b border-b-[var(--grey-500)] pb-5 text-[var(--blue-950)] font-semibold">
            <div>
              <p>{stepsData.plan?.title}</p>
              <p className="text-sm underline cursor-pointer mt-2 text-[var(--grey-500)] font-medium">
                Change
              </p>
            </div>
            <div>
              <p>{stepsData.plan?.price}</p>
            </div>
          </div>
          <div className="text-sm pt-5 space-y-5 text-[var(--grey-500)]">
            {stepsData.addOns?.map((addon) => (
              <div key={addon.id} className="flex justify-between text-sm">
                <span>{addon.title}</span>
                <span className="text-[var(--blue-950)] font-medium">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-8 text-[var(--grey-500)] p-5 font-semibold">
          <p>Total (per month)</p>
          <p className="text-[var(--purple-600)] ">
            ${totalPrice}/{billingCycle === "monthly" ? "mo" : "yr"}
          </p>
        </div>
      </div>
      <div className="bg-white px-6 py-3 font-semibold fixed bottom-0 right-0 w-full flex justify-between items-center lg:bg-transparent lg:absolute lg::top-20 ">
        <Button
          type="button"
          onClick={() => onPrevStep()}
          variant={"secondary"}
          className="font-semibold transition-colors duration-300 "
        >
          Go Back
        </Button>
        <Button
          type="submit"
          onClick={handleSubmit}
          className="bg-[var(--blue-950)]   transition-colors duration-300 "
        >
          Confirm
        </Button>
      </div>
    </StepsLayout>
  );
};

export default Preview