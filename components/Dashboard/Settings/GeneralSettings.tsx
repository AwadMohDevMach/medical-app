import React from 'react'


import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
export default function GeneralSettings() {
  return (
    <div className="flex flex-col gap-4 ">
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Stor Name</CardTitle>
        <CardDescription>
          Used to identify your store in the marketplce
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Input type="Search" placeholder="Store Name" className="" />
        </form>
      </CardContent>
      <div className="flex"></div>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button>Save</Button>
      </CardFooter>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Plugins Directory</CardTitle>
        <CardDescription>
          The directory withen your project, in in which your plugins are
          located.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Input type="Search" placeholder="Store Name" className="" />
        </form>
        <div className="flex pt-3 ">
          <Checkbox id="terms1" />
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
          >
            Accept terms and conditions
          </label>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button>Save</Button>
      </CardFooter>
    </Card>
  </div>
  )
}
