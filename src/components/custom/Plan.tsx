"use client";

import React, {useState} from 'react'
import Image from 'next/image';
import {plansData} from "@/lib/data";
import { PlanType } from '@/lib/type';

const Plan = () => {
    const plans: PlanType[] = plansData
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
      "yearly"
    );
  return (
    <section className="max-w-md mx-auto">
      <h1 className="text-2xl lg:text-4xl text-[var(--blue-950)] font-bold">
        Select your plan
      </h1>
      <p className="text-[var(--grey-500)] mt-2">
        You have the option of monthly or yearly billing.
      </p>
      <div className="grid lg:grid-cols-3 gap-4 mt-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="border border-[var(--grey-500)] rounded-lg p-4 flex md:flex-col items-center md:items-start md:gap-14 gap-7"
          >
            <div>
              <Image
                src={plan.icon}
                alt={`${plan.title} Plan`}
                width={24}
                height={24}
                className="w-auto h-auto"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[var(--blue-950)]">
                {plan.title}
              </h2>
              <p className="text-sm text-[var(--grey-500)]">
                {plan.price[billingCycle]}
              </p>
              <p className="text-sm font-medium text-[var(--blue-950)] hidden md:block">
                {plan.promo}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 items-center justify-center mt-6 bg-[var(--blue-100)] p-3 rounded-lg">
        <p
          className={`${
            billingCycle === "monthly"
              ? "text-[var(--blue-950)] font-semibold"
              : "text-[var(--grey-500)]"
          }`}
        >
          Monthly
        </p>
        <div
          className="bg-[var(--blue-950)] w-10 h-5 rounded-full transition-colors duration-300 cursor-pointer relative"
          onClick={() =>
            setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
          }
        >
          <div
            className={`bg-white w-3 h-3 rounded-full absolute top-1 transition-transform duration-300 ${
              billingCycle === "monthly" ? "left-1" : "right-1"
            }`}
          ></div>
        </div>
        <p
          className={`${
            billingCycle === "yearly"
              ? "text-[var(--blue-950)] font-semibold"
              : "text-[var(--grey-500)] "
          }`}
        >
          Yearly
        </p>
      </div>
    </section>
  );
}

export default Plan