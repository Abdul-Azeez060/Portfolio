"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
import { useState } from "react";
import { Loader2 } from "lucide-react";

export const UserInputSchema = z.object({
  email: z.string().email({ message: "please enter valid email" }).min(5, {
    message: "Email must be atleast 5 characters",
  }),
  message: z.string().min(5, {
    message: "Message should be atleast 5 characters",
  }),
});

export function FormElement() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof UserInputSchema>) {
    setLoading(true);
    console.log(values);

    try {
      await fetch("/api/usermessage", {
        method: "POST",
        body: JSON.stringify(values),
      });
      toast({
        description: "Your message has been sent.",
      });
      form.reset();
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Something went wrong. Could not send the message",
      });
      console.log(err);
    } finally {
      setLoading(false);
    }
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
              <FormDescription>Thank you for your message.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <Button className="w-full" type="submit">
          {loading ? (
            <span className=" animate-spin ">
              <Loader2 />
            </span>
          ) : (
            "Send"
          )}
        </Button>
      </form>
    </Form>
  );
}
