"use server";

import { TRegisterAndLogInIputsProps } from "@/types/dataServices";
import { prismaClient } from "@/lib/db";
import bcrypt from "bcrypt";
// import { Resend } from "resend";
// import EmailTemplate from "@/components/Emails/EmailTemplate";
// import { isValid } from "date-fns";

export async function createUser(formData: TRegisterAndLogInIputsProps) {
  // const resend = new Resend(process.env.RESEND_API_KEY);

  const { fullName, email, phone, password, role } = formData;

  try {
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      // const error = appError.create(`User with this email ( ${email})  already exists in the Database`,409,"fail")
      // return error
      return {
        error: `User with this email ( ${email})  already exists in the Database`,
        status: 409,
        statusText: "fail",
        data: null,
      };
    }
    // Encrypt the Password =>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    //Generate Token
    const generateToken = () => {
      const min = 100000; // Minimum 6-figure number
      const max = 999999; // Maximum 6-figure number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const userToken = generateToken();
    const newUser = await prismaClient.user.create({
      data: {
        name: fullName ?? "",
        email,
        phone: phone ?? "",
        password: hashedPassword,
        role,
        token: userToken,
        isVerfied : true
      },
    });
    //Send an Email with the Token on the link as a search param
    // const token = newUser.token;
    // const userId = newUser.id;
    // const firstName = newUser.name.split(" ")[0];
    // const linkText = "Verify your Account ";
    // const message =
    //   "Thank you for registering with Gecko. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website :";
    // const sendMail = await resend.emails.send({
    //   from: "Medical App <info@jazzafricaadventures.com>",
    //   to: email,
    //   subject: "Verify Your Email Address",
    //   react: EmailTemplate({ firstName, token, linkText, message }),
    // });
    // console.log(token);
    // console.log(sendMail);
    // console.log(newUser);
    return {
        error: null,
        status: 200,
        statusText: "success",
        data: newUser,

    }
  } catch (e) {
    return { e: "somthing went wrong" };
  }
}

export async function getUserById(id: string) {
  if (id) {
    try {
      const user = await prismaClient.user.findUnique({
        where: {
          id,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

export async function updateUserById(id: string) {
  if (id) {
    try {
      const updatedUser = await prismaClient.user.update({
        where: {
          id,
        },
        data: {
          isVerfied : true
        },
      })
      return updatedUser
    } catch (error) {
      console.log(error)
    }
  }
}
