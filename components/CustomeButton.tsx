import { Button } from "@/components/ui/button";
import Link from "next/link";

type CustomeButtonProps = {
  title: string;
  icon?: any;
  href?: string;
  className?:string;
};

export default function CustomeButton({
  title,
  icon,
  href,
  className
}: CustomeButtonProps) {
  const Icon = icon;
  return (
    <>
      {href ? (
        <Button asChild className={className}>
          <Link href={href} className="flex items-center">
            {Icon && <Icon className="mr-2 h-4 w-4" />}
            {title}
          </Link>
        </Button>
      ) : (
        <Button>
          {Icon && <Icon className="mr-2 h-4 w-4" />}
          {title}
        </Button>
      )}
    </>
  );
}
