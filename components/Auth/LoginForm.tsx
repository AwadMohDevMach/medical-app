"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { type TRegisterAndLogInIputsProps } from "@/types/dataServices";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Alert } from "flowbite-react";
import TextInputs from "../FormInputs/TextInputs";
import { useState } from "react";
import SubmitButton from "../FormInputs/SubmitButton";
import { HiInformationCircle } from "react-icons/hi";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRegisterAndLogInIputsProps>();

  async function onSubmit(data: TRegisterAndLogInIputsProps) {
    try {
      setIsLoading(true);
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setIsLoading(false);
        toast.error("Sign-in error: Check your credentials");
        setShowNotification(true);
      } else {
        // Sign-in was successful
        setShowNotification(false);
        reset();
        setIsLoading(false);
        toast.success("Login Successful");
        router.push("/dashboard");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
    }
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          alt="Your Company"
          src="/logo.jpg"
          className="mx-auto h-24 w-24"
          width={243}
          height={207}
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {showNotification && (
            <Alert color="failure" icon={HiInformationCircle}>
              <span className="font-medium">Sign-in error!</span> Please Check
              your credentials
            </Alert>
          )}
          <TextInputs
            label="Email address"
            name="email"
            register={register}
            errors={errors}
            type="email"
            placeholder=""
          />
          <TextInputs
            label="Password"
            name="password"
            register={register}
            errors={errors}
            type="password"
             placeholder=""
          />
          <div>
            <SubmitButton
              title=" log in"
              isLoading={isLoading}
              titleLoading="logging in please wait..."
            />
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          don't have account?{" "}
          <Link
            href="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
