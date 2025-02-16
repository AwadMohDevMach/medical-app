"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { type TRegisterAndLogInIputsProps } from "@/types/dataServices";
import TextInputs from "../FormInputs/TextInputs";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegisterForm({ role = "USER" }: { role?: UserRole }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRegisterAndLogInIputsProps>();

  async function onSubmit(data: TRegisterAndLogInIputsProps) {
    setIsLoading(true);
    data.role = role;
    try {
      const user = await createUser(data);

      if (user && user.status === 200) {
        console.log("User created successfully");
        reset();
        setIsLoading(false);
        toast.success("User created successfully");
        router.push("/login")
        console.log(user.data);
      } else {
        console.log(user.error);
      }
    } catch (error) {
      console.log(error);
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
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <TextInputs
            label="Full Name"
            register={register}
            name="fullName"
            errors={errors}
          />
          <TextInputs
            label="Email address"
            register={register}
            name="email"
            errors={errors}
            type="email"
          />
          <TextInputs
            label="Phone Number"
            register={register}
            name="phone"
            errors={errors}
          />
          <TextInputs
            label="Password"
            register={register}
            name="password"
            errors={errors}
            type="password"
          />
          <div>
            <SubmitButton
              title="Sign Up"
              titleLoading="Creating please wait..."
              isLoading={isLoading}
            />
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Allready have account?{" "}
          <Link
            href="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
