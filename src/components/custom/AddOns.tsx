import React, { useState } from "react";
import StepsLayout from "@/layout/StepsLayout";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { addOnsData } from "@/lib/data";
import { AddOnType } from "@/lib/type";
import { Button } from "@/components/ui/button";
import { useStep } from "@/hooks/StepProvider";

const AddOns = () => {
  const addOnsMap: AddOnType[] = addOnsData;
  const { onNextStep, onPrevStep, updateStepsData, stepsData } = useStep();

  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    const billingCycle = stepsData.plan?.billingCycle || "monthly"; // default fallback

    const selectedData = addOnsMap
      .filter((addon) => selectedAddOns.includes(addon.id))
      .map((addon) => ({
        id: addon.id,
        title: addon.title,
        price:
          billingCycle === "yearly" ? addon.price.yearly : addon.price.monthly,
      }));

    updateStepsData({ addOns: selectedData }); // add to context
    onNextStep();
  };

  return (
    <StepsLayout
      title="Pick add-ons"
      subtitle="Add-ons help enhance your gaming experience."
    >
      <div className="flex flex-col gap-4">
        {addOnsMap.map((addOn) => {
          const isChecked = selectedAddOns.includes(addOn.id);
          const billingCycle = stepsData.plan?.billingCycle || "monthly";
          const price =
            billingCycle === "yearly"
              ? addOn.price.yearly
              : addOn.price.monthly;

          return (
            <div
              key={addOn.id}
              className={`flex items-center justify-between gap-3 shadow-sm p-5 rounded-lg border transition-colors ${
                isChecked
                  ? "border-[var(--blue-950)] bg-[var(--grey-100)]"
                  : "border-[var(--purple-200)]"
              }`}
            >
              <div className="flex items-center gap-5">
                <Checkbox
                  id={addOn.id}
                  checked={isChecked}
                  onCheckedChange={() => handleCheckboxChange(addOn.id)}
                />
                <Label htmlFor={addOn.id} className="flex flex-col gap-3">
                  <span className="text-[var(--blue-950)]">{addOn.title}</span>
                  <span className="text-[var(--grey-500)]">
                    {addOn.description}
                  </span>
                </Label>
              </div>
              <div>
                <p className="text-[var(--purple-600)] font-medium text-sm">
                  {price}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white px-6 py-3 font-semibold fixed bottom-0 right-0 w-full flex justify-between items-center lg:bg-transparent lg:absolute lg:top-20">
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
          className="bg-[var(--blue-950)] transition-colors duration-300 "
        >
          Next Step
        </Button>
      </div>
    </StepsLayout>
  );
};

export default AddOns;
