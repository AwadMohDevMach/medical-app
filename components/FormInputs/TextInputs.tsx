import Link from "next/link";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type TextInputsProps = {
  label: string;
  register: any;
  name: string;
  type?: string;
  errors: any;
  placeholder: string;
  page?:string
};
export default function TextInputs({
  label,
  register,
  name,
  type = "text",
  errors,
  placeholder,
  page
}: TextInputsProps) {
  return (
    <div className="grid gap-2">
      {type === "password" && page === "login" ? (
        <div className="flex items-center">
          <Label htmlFor={`${name}`}>{label}</Label>
          <Link
            href="#"
            className="ml-auto text-sm underline-offset-2 hover:underline"
          >
            Forgot your password?
          </Link>
        </div>
      ) : (
        <Label htmlFor={`${name}`}>{label}</Label>
      )}

      <Input
        {...register(`${name}`, { required: true })}
        id={`${name}`}
        name={`${name}`}
        type={`${type}`}
        autoComplete="name"
        placeholder={placeholder}
      />
      {errors[`${name}`] && (
        <span className="text-red-600 text-sm">{label} is required</span>
      )}
    </div>
  );
}
