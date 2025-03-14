"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { type TRegisterAndLogInIputsProps } from "@/types/dataServices";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import TextInputs from "../FormInputs/TextInputs";
import Link from "next/link";
import Image from "next/image";
import { FaGoogle, FaApple } from "react-icons/fa";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";

type RegisterProps = {
  role?: UserRole;
  // className: React.ComponentProps<"div">;
};

export default function Register({
  role = "USER",
  ...props
}: RegisterProps) {
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
        router.push("/login");
        console.log(user.data);
      } else {
        console.log(user.error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={cn("flex flex-col gap-6")} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Register</h1>
                <p className="text-muted-foreground">
                  Enter your information to create an account.
                </p>
              </div>
              <TextInputs
                label="Full Name"
                name="fullName"
                register={register}
                errors={errors}
                type="text"
                placeholder="EG. awad mohamed"
              />
              <TextInputs
                label="Phone"
                name="phone"
                register={register}
                errors={errors}
                type="text"
                placeholder="EG. +20 010 99 50 88 49"
              />
              <TextInputs
                label="Email address"
                name="email"
                register={register}
                errors={errors}
                type="email"
                placeholder="EG. awad@gmail.com"
              />
              <TextInputs
                label="Password"
                name="password"
                register={register}
                errors={errors}
                type="password"
                placeholder="******"
              />
              <SubmitButton
                title="Create an account"
                isLoading={isLoading}
                titleLoading="Creating please wait..."
              />
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <FaApple className="w-4 h-4 flex-shrink-0" />
                  <span className="sr-only">Sign Up with Apple</span>
                </Button>
                <Button variant="outline" className="w-full">
                  <FaGoogle className="w-4 h-4 flex-shrink-0" />
                  <span className="sr-only">Sign Up with Google</span>
                </Button>
              </div>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="underline underline-offset-4">
                  Log In
                </Link>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <Image
              src="/bg-login.jpg"
              alt="Iamge"
              width={1920}
              height={1080}
              className="linear-bg absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale "
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
