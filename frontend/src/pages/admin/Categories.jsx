import React from 'react'
import { Button, Table, TableHead, TableBody, TableHeadCell, TableCell, TableRow } from 'flowbite-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { Checkbox, Label, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";
import { useState } from "react";

const Categories = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div>
         <div className=" bg-gray-100 p-7 m-7">
          <div className="p-5 flex justify-between items-center  ">
            {/* Left side title */}
            <h2 className="text-xl font-semibold text-gray-700">
              Product Categories
            </h2>

            {/* Right side button */}
            <Button color="red" className="rounded-xl px-4 py-2" onClick={()=>setOpenModal(true)}>
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
        <>
              <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} >
                <ModalHeader />
                <ModalBody>
                  <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add New Category</h3>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="category-name">Category Name :</Label>
                      </div>
                      <TextInput id="category-name"required />
                    </div>
                   
                    <div className="w-full">
                      <Button>Add Category</Button>
                    </div>
                  </div>
                </ModalBody>
              </Modal>
            </>
    </div>
  )
}

export default Categories