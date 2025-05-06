/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
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
import Link from "next/link";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerUser } from "@/service/auth";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please Enter a valid Email",
  }),
  password: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

export function RegisterForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Shariful Islam",
      email: "sharifuls@gmail.com",
      password: "Shariful!23",
      confirmPassword: "Shariful!23",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const password = form.watch("password");
  const confirmPassword = form.watch("confirmPassword");

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const userData = {
      ...data,
      role: "user",
    };
    try {
      const res = await registerUser(userData);
      console.log("res: ", res);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/login");
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto pt-10">
      <div className="border-2 border-slate-200 p-10 rounded-md bg-white max-w-xl mx-auto ">
        <h2 className="text-3xl mb-5 text-center">Please Register</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="max-w-xl "
                      placeholder="name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="max-w-xl"
                      placeholder="email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className="max-w-xl"
                      placeholder="password"
                      type="password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ConfirmPassword</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="max-w-xl"
                      placeholder="confirmPassword"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="" />
                </FormItem>
              )}
            />

            <div className="text-center">
              <Button
                disabled={!!confirmPassword && password !== confirmPassword}
                type="submit"
                className="w-full bg-slate-100 hover:bg-slate-200 text-black border-2 border-slate-30 "
              >
                {isSubmitting ? "Registering..." : "Register"}
              </Button>
            </div>
          </form>
          <p className="text-center mt-5">
            Have an Account?{" "}
            <Link className="text-purple-500" href={"/login"}>
              Login
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
