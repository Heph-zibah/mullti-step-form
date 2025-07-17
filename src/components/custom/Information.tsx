"use client";

import React from "react";
import StepsLayout from "@/layout/StepsLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useStep } from "@/hooks/StepProvider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.email({ message: "Email is required" }),
  phone: z.string({
    message: "Phone number is required.",
  }),
});

const Information = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
    },
  });
  const { onNextStep, updateStepsData } = useStep();
  function onSubmit(values: z.infer<typeof formSchema>) {
    updateStepsData(values);
    onNextStep();

    console.log("Form submitted:", values);
  }

  return (
    <StepsLayout
      title="Personal Info"
      subtitle="Please provide your name, email address, and phone number."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--blue-950)] font-medium">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Stephen King"
                    {...field}
                    className="text-[var(--blue-950)]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--blue-950)] font-medium">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. stephenking@lorem.com"
                    {...field}
                    className="text-[var(--blue-950)]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--blue-950)] font-medium">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. +1 234 567 890"
                    {...field}
                    className="text-[var(--blue-950)]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
        </form>
      </Form>
    </StepsLayout>
  );
};

export default Information;
