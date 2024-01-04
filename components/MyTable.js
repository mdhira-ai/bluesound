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
import { AnimatePresence, motion } from "framer-motion"

const MyTable = ({ data }) => {

    const [popLayout, setPopLayout] = useState(false)








    return (
        <Table className="overflow-hidden border-none">
            <TableCaption>Bluetooth Speaker connection</TableCaption>


            <TableHeader
                className="border-none"
            >

                <TableRow
                    className="bg-gray-900  border-none hover:bg-gray-900"
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


                <AnimatePresence
                    
                    initial={false}

                    mode={
                        popLayout ? "popLayout" : "sync"
                    }
                >

                    {
                        data?.map((item, index) => {
                            return (


                                <TableRow
                                    className="hover:bg-gray-700 cursor-pointer border-cyan-500"



                                    initial={{ x: -50 }}

                                    animate={{ x: 0 }}

                                    // out
                                    exit={{ x: -50 }}


                                    key={index}
                                >
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.address}</TableCell>
                                    <TableCell>{item.method}</TableCell>
                                    <TableCell className="text-right">{item.signal}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </AnimatePresence>

            </TableBody>
        </Table>
    );
}

export default MyTable;