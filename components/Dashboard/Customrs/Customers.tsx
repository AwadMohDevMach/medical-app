import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Table,TableBody, TableHead,TableRow,TableCell } from '@/components/ui/table';

export default function Customers() {

    const customersContent  = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+1 123-456-7890'
        },
        {
            id: 2,
            name: 'Omar Doe',
            email: 'john.doe@example.com',
            phone: '+1 123-456-7890'
        },
        {
            id: 3,
            name: 'Mohamed Doe',
            email: 'john.doe@example.com',
            phone: '+1 123-456-7890'
        },
        {
            id: 4,
            name: 'Awad Doe',
            email: 'john.doe@example.com',
            phone: '+1 123-456-7890'
        },
    ]

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Card >
                <CardHeader className="flex justify-between items-center">
                    <CardTitle>Customers</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                    <TableBody className="table-auto w-full">
                        {
                            customersContent.map((item,i)=>{
                                return(
                                     <TableRow key={i}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.phone}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </CardContent>
                {/* <CardFooter>
                    <Button asChild className="btn btn-primary">Export to CSV</Button>
                </CardFooter> */}
            </Card>
  </main>
  )
}
