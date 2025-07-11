"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
 phone: z.number().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const Information = () => {
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          email: "",
          phone: 0,
        },
      });

      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
      }
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl lg:text-4xl text-[var(--blue-950)] font-bold">
        Personal Info
      </h1>
      <p className="text-[var(--grey-500)] mt-2">
        Please provide your name, email address, and phone number.
      </p>
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
          <Button type="submit" className="bg-[var(--blue-950)]">
            Next Step
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Information;
