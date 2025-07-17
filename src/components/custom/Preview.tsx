import React from 'react'
import StepsLayout from "@/layout/StepsLayout";
const Preview = () => {
  return (
    <StepsLayout
        title="Finishing Up"
        subtitle="  Double-check everything looks OK before confirming">
        <div className="">
            <div className="bg-[var(--blue-100)] p-5 rounded-lg">
            <div className="flex items-center justify-between border-b border-b-[var(--grey-500)] pb-5 text-[var(--blue-950)] font-semibold">
                <div>
                <p>Arcade(Monthly)</p>
                <p className="text-sm underline cursor-pointer mt-2 text-[var(--grey-500)] font-medium">
                    Change
                </p>
                </div>
                <div>
                <p>$9/mo</p>
                </div>
            </div>
            <div className="text-sm pt-5 space-y-5 text-[var(--grey-500)]">
                <div className="flex items-center justify-between">
                <div>
                    <p>Online service</p>
                </div>
                <div>
                    <p>$1/mo</p>
                </div>
                </div>
                <div className="flex items-center justify-between">
                <div>
                    <p>Larger Storage</p>
                </div>
                <div>
                    <p>$2/mo</p>
                </div>
                </div>
            </div>
            </div>
            <div className="flex items-center justify-between mt-8 text-[var(--grey-500)] p-5 font-semibold">
            <p>Total (per month)</p>
            <p className="text-[var(--purple-600)] ">+$12/mo</p>
            </div>
        </div>
      </StepsLayout>
   
  );
}

export default Preview