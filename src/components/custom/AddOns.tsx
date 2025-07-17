import React from 'react'
import StepsLayout from "@/layout/StepsLayout";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { addOnsData } from '@/lib/data';
import { AddOnType } from '@/lib/type';
const AddOns = () => {
  const addOnsMap : AddOnType[] = addOnsData
  return (
    <StepsLayout
      title="Pick add-ons"
      subtitle="Add-ons help enhance your gaming experience.">
        <div className="flex flex-col gap-4">
        {addOnsMap.map((addOn) => (
          <div
            className="flex items-center justify-between gap-3 shadow-sm p-5 rounded-lg border border-[var(--purple-200)] "
            key={addOn.id}
          >
            <div className="flex items-center gap-5">
              <Checkbox id={addOn.id} />
              <Label htmlFor={addOn.id} className="flex flex-col gap-3">
                <span className="text-[var(--blue-950)]">{addOn.title}</span>
                <span className="text-[var(--grey-500)]">
                  {addOn.description}
                </span>
              </Label>
            </div>
            <div>
              <p className="text-[var(--purple-600)] font-medium text-sm">
                {addOn.price.monthly}
              </p>
            </div>
          </div>
        ))}
      </div>
      </StepsLayout>
  );
}

export default AddOns