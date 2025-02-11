import { UserRole } from "@prisma/client";

export type TDataServices = {
  title: string;
  Image: string;
  slug: string;
};

export type TRegisterAndLogInIputsProps = {
  fullName?: string | undefined;
  email: string;
  password: string;
  phone?: string | undefined;
  role?: UserRole;
};
