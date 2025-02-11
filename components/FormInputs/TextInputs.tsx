import Link from "next/link";
import React from "react";

type TextInputsProps = {
  label: string;
  register: any;
  name: string;
  type?: string;
  errors: any;
};
export default function TextInputs({
  label,
  register,
  name,
  type = "text",
  errors,
}: TextInputsProps) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <label
          htmlFor={`${name}`}
          className="block text-sm/6 font-medium text-gray-900"
        >
          {label}
        </label>
        {name === "password" ? (
          <div className="text-sm">
            <Link
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </Link>
          </div>
        ) : null}
      </div>

      <div className="mt-2">
        <input
          {...register(`${name}`, { required: true })}
          id={`${name}`}
          name={`${name}`}
          type={`${type}`}
          autoComplete="name"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
        {errors[`${name}`] && (
          <span className="text-red-600 text-sm">{label} is required</span>
        )}
      </div>
    </div>
  );
}
