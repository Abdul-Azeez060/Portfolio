"use client";
import db from "../db";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Form,
  FormDescription,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const UserInputSchema = z.object({
  email: z.string().email({ message: "please enter valid email" }).min(5, {
    message: "Email must be atleast 5 characters",
  }),
  message: z.string().min(5, {
    message: "Message should be atleast 5 characters",
  }),
});

export function FormElement() {
  async function onSubmit(values: z.infer<typeof UserInputSchema>) {
    console.log(values);
    try {
    } catch (error) {}
    await fetch("/api/usermessage", {
      method: "POST",
      body: JSON.stringify(values),
    });
  }
  const form = useForm<z.infer<typeof UserInputSchema>>({
    resolver: zodResolver(UserInputSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full h-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johnDoe@gmail.com" {...field} />
              </FormControl>
              <FormDescription>Enter your email</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here."
                  id="message-2"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <Button className="w-full" type="submit">
          Send
        </Button>
      </form>
    </Form>
  );
}
