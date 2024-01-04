'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useState } from "react";

const MyTable = ({data}) => {

    







    return (
        <Table className="">
            <TableCaption>Bluetooth Speaker connection</TableCaption>


            <TableHeader>

                <TableRow
                    className="bg-gray-900 hover:bg-gray-900"
                >
                    <TableHead className="">Name</TableHead>
                    <TableHead>Mac Address</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Signal</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody
                className="bg-gray-800"
            >


                {
                    data?.map((item, index) => {
                        return (
                            <TableRow key={index}
                            >
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.address}</TableCell>
                                <TableCell>{item.method}</TableCell>
                                <TableCell className="text-right">{item.signal}</TableCell>
                            </TableRow>
                        )
                    })
                }

            </TableBody>
        </Table>
    );
}

export default MyTable;