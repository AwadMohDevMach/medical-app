import React from "react";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { RecentSales } from "../Sub/RecentSales";
import { File, ListFilter, PlusCircle } from "lucide-react";
export default function Orders() {
  const invoices = [
    {
      customer: {
        name: "John Doe",
        email: "johndoe@example.com",
      },
      type: "Sale",
      status: "Egypt",
      date: "2025-03-5",
      amount: "$250.00",
    },
    {
      customer: {
        name: "John Doe",
        email: "johndoe@example.com",
      },
      type: "Sale",
      status: "Egypt",
      date: "2025-03-5",
      amount: "$250.00",
    },
    {
      customer: {
        name: "John Doe",
        email: "johndoe@example.com",
      },
      type: "Sale",
      status: "Egypt",
      date: "2025-03-5",
      amount: "$250.00",
    },
    {
      customer: {
        name: "John Doe",
        email: "johndoe@example.com",
      },
      type: "Sale",
      status: "Egypt",
      date: "2025-03-5",
      amount: "$250.00",
    },
    {
      customer: {
        name: "John Doe",
        email: "johndoe@example.com",
      },
      type: "Sale",
      status: "Egypt",
      date: "2025-03-5",
      amount: "$250.00",
    },
    {
      customer: {
        name: "John Doe",
        email: "johndoe@example.com",
      },
      type: "Sale",
      status: "Egypt",
      date: "2025-03-5",
      amount: "$250.00",
    },
    {
      customer: {
        name: "John Doe",
        email: "johndoe@example.com",
      },
      type: "Sale",
      status: "Egypt",
      date: "2025-03-5",
      amount: "$250.00",
    },
    {
      customer: {
        name: "John Doe",
        email: "johndoe@example.com",
      },
      type: "Sale",
      status: "Egypt",
      date: "2025-03-5",
      amount: "$250.00",
    },
  ];
  return (
    <main className="flex min-h-[(clac(100vh_-_theme(spacing.16)))] flex-1 flex-col gap-4 mg:gap-8 ">
      <div className="grid grid-cols-3 gap-2">
        <div className="grid gap-2 md:grid-cols-4 col-span-2 h-fit">
          <Card className="col-span-2">
            <CardHeader className="">
              <CardTitle className="">Your Orders</CardTitle>
              <CardDescription className="text-md">
                Introducing Our Dynamic orders Dashboard for seamless management
                and insightful analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Create New Order</Button>
            </CardContent>
          </Card>
          <Card className="">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Tabs defaultValue="week" className="col-span-4">
            <div className="flex justify-between">
              <TabsList>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="tear">Year</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="h-8 gap-1" size="sm">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-normal">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter By</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Darft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-normal">
                    Export
                  </span>
                </Button>
              </div>
            </div>{" "}
            <TabsContent value="week">
              <Card>
                <CardHeader>
                  <CardTitle>Orders</CardTitle>
                  <CardDescription>
                    Recent orders from your store
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableCaption>A list of your Products.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">
                          Customer
                        </TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoices.map((invoice, i) => (
                        <TableRow key={i}>
                          <TableCell className="flex flex-col">
                            <h3 className="font-semibold">{invoice.customer.name}</h3>
                            <p className="text-slate-500">{invoice.customer.email}</p>
                          </TableCell>
                          <TableCell>{invoice.type}</TableCell>
                          <TableCell>{invoice.status}</TableCell>
                          <TableCell>{invoice.date}</TableCell>
                          <TableCell>{invoice.amount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
