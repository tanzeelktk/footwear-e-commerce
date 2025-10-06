import React from 'react'
import { Button, Table, TableHead, TableBody, TableHeadCell, TableCell, TableRow } from 'flowbite-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  return (
    <div>
         <div className="">
          <div className="p-5 flex justify-between items-center bg-white shadow-md rounded-2xl">
            {/* Left side title */}
            <h2 className="text-xl font-semibold text-gray-700">
              Product Categories
            </h2>

            {/* Right side button */}
            <Button color="red" className="rounded-xl px-4 py-2">
              + Add New Category
            </Button>
          </div>
          <Table hoverable>
            <TableHead>
              <TableRow>
                <TableHeadCell>Sr.</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Action</TableHeadCell>
                <TableHeadCell>Action</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="divide-y">
              <TableRow className="dark:border-gray-700 dark:bg-gray-800">
                <TableCell>1</TableCell>
                <TableCell>Electronics</TableCell>
                <TableCell><FontAwesomeIcon icon={faEdit} className="dark:text-white text-2xl ml-2" /></TableCell>
                <TableCell>
                  <FontAwesomeIcon icon={faTrash} className="dark:text-white text-2xl ml-2" />
                </TableCell>
              </TableRow>
              <TableRow className="dark:border-gray-700 dark:bg-gray-800">
                <TableCell>1</TableCell>
                <TableCell>Clothes</TableCell>
                <TableCell><FontAwesomeIcon icon={faEdit} className="dark:text-white text-2xl ml-2" /></TableCell>
                <TableCell>
                  <FontAwesomeIcon icon={faTrash} className="dark:text-white text-2xl ml-2" />
                </TableCell>
              </TableRow>
              <TableRow className="dark:border-gray-700 dark:bg-gray-800">
                <TableCell>1</TableCell>
                <TableCell>Fashion</TableCell>
                <TableCell><FontAwesomeIcon icon={faEdit} className="dark:text-white text-2xl ml-2" /></TableCell>
                <TableCell>
                  <FontAwesomeIcon icon={faTrash} className="dark:text-white text-2xl ml-2" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
    </div>
  )
}

export default Categories