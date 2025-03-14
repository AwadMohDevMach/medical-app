import { Loader2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

type submitButtonProps = {
  title: string;
  type?: "submit" | "reset" | "button" | undefined;
  isLoading: boolean;
  titleLoading: string;
};

export default function SubmitButton({
  title,
  type = "submit",
  isLoading = false,
  titleLoading,
}: submitButtonProps) {
  return (
    <>
      {isLoading ? (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {titleLoading}
        </Button>
      ) : (
        <Button type={type} className="w-full">
          {title}
        </Button>
      )}
    </>
  );
}
