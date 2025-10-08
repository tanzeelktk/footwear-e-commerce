import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  Checkbox,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
  FileInput,
} from "flowbite-react";
import { useState } from "react";

const Products = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="">
        <div className="bg-gray-100 m-7 p-7">
          <div className="p-5 flex justify-between items-center">
            {/* Left side title */}
            <h2 className="text-xl font-semibold text-gray-700">
              Product List
            </h2>

            {/* Right side button */}
            <Button
              color="red"
              className="rounded-xl px-4 py-2"
              onClick={() => setOpenModal(true)}
            >
              + Add New Product
            </Button>
          </div>

          <Table hoverable>
            <TableHead>
              <TableRow>
                <TableHeadCell>Sr.</TableHeadCell>
                <TableHeadCell>Image</TableHeadCell>
                <TableHeadCell>Product Name</TableHeadCell>
                <TableHeadCell>Price</TableHeadCell>
                <TableHeadCell>Action</TableHeadCell>
                <TableHeadCell>Action</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="divide-y">
              <TableRow className="dark:border-gray-700 dark:bg-gray-800">
                <TableCell>1</TableCell>
                <TableCell>
                  <img
                    className="w-10 h- 10 rounded-md"
                    src="https://image01-in.oneplus.net/media/202507/02/0dc5e3a3ff4bd6d124d040d8927ecc1a.png?x-amz-process=image/format,webp/quality,Q_80"
                  />
                </TableCell>
                <TableCell>Iphone</TableCell>
                <TableCell>30$</TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="dark:text-white text-2xl ml-2"
                  />
                </TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="dark:text-white text-2xl ml-2"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="dark:border-gray-700 dark:bg-gray-800">
                <TableCell>2</TableCell>
                <TableCell>
                  <img
                    className="w-10 h- 10 rounded-md"
                    src="https://image01-in.oneplus.net/media/202406/19/ec64eb41a8e787a798be1b71c13a51bb.png?x-amz-process=image/format,webp/quality,Q_80"
                  />
                </TableCell>
                <TableCell>Iphone</TableCell>
                <TableCell>20$</TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="dark:text-white text-2xl ml-2"
                  />
                </TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="dark:text-white text-2xl ml-2"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="dark:border-gray-700 dark:bg-gray-800">
                <TableCell>2</TableCell>
                <TableCell>
                  <img
                    className="w-10 h- 10 rounded-md"
                    src="https://image01-in.oneplus.net/media/202406/19/ec64eb41a8e787a798be1b71c13a51bb.png?x-amz-process=image/format,webp/quality,Q_80"
                  />
                </TableCell>
                <TableCell>Iphone</TableCell>
                <TableCell>20$</TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="dark:text-white text-2xl ml-2"
                  />
                </TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="dark:text-white text-2xl ml-2"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="dark:border-gray-700 dark:bg-gray-800">
                <TableCell>2</TableCell>
                <TableCell>
                  <img
                    className="w-10 h- 10 rounded-md"
                    src="https://image01-in.oneplus.net/media/202406/19/ec64eb41a8e787a798be1b71c13a51bb.png?x-amz-process=image/format,webp/quality,Q_80"
                  />
                </TableCell>
                <TableCell>Iphone</TableCell>
                <TableCell>20$</TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="dark:text-white text-2xl ml-2"
                  />
                </TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="dark:text-white text-2xl ml-2"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="dark:border-gray-700 dark:bg-gray-800">
                <TableCell>2</TableCell>
                <TableCell>
                  <img
                    className="w-10 h- 10 rounded-md"
                    src="https://image01-in.oneplus.net/media/202406/19/ec64eb41a8e787a798be1b71c13a51bb.png?x-amz-process=image/format,webp/quality,Q_80"
                  />
                </TableCell>
                <TableCell>Iphone</TableCell>
                <TableCell>20$</TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="dark:text-white text-2xl ml-2"
                  />
                </TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="dark:text-white text-2xl ml-2"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="dark:border-gray-700 dark:bg-gray-800">
                <TableCell>2</TableCell>
                <TableCell>
                  <img
                    className="w-10 h- 10 rounded-md"
                    src="https://image01-in.oneplus.net/media/202406/19/ec64eb41a8e787a798be1b71c13a51bb.png?x-amz-process=image/format,webp/quality,Q_80"
                  />
                </TableCell>
                <TableCell>Iphone</TableCell>
                <TableCell>20$</TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="dark:text-white text-2xl ml-2"
                  />
                </TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="dark:text-white text-2xl ml-2"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="dark:border-gray-700 dark:bg-gray-800">
                <TableCell>2</TableCell>
                <TableCell>
                  <img
                    className="w-10 h- 10 rounded-md"
                    src="https://image01-in.oneplus.net/media/202406/19/ec64eb41a8e787a798be1b71c13a51bb.png?x-amz-process=image/format,webp/quality,Q_80"
                  />
                </TableCell>
                <TableCell>Iphone</TableCell>
                <TableCell>20$</TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="dark:text-white text-2xl ml-2"
                  />
                </TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="dark:text-white text-2xl ml-2"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <>
        <Modal
          show={openModal}
          size="lg"
          popup
          onClose={() => setOpenModal(false)}
        >
          <ModalHeader />
          <ModalBody>
            <div className="space-y-6">
              <div className="text-2xl font-bold">Add New Product</div>

              <div>
                <Label className="mb-2 block" htmlFor="multiple-file-upload">
                  Upload multiple files
                </Label>
                <FileInput id="multiple-file-upload" multiple />
              </div>
              <div>
                <Label htmlFor="product-name">Product Name : </Label>
                <TextInput id="product-name" />
              </div>
              <div>
                <Label htmlFor="product-price">Price : </Label>
                <TextInput id="product-price" />
              </div>
              <div className="flex justify-around">
                <Button>Save Product</Button>
                <Button color={"red"}>Clear</Button>
                <Button color={"red"} onClick={() => setOpenModal(false)}>Cancel</Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </>
    </div>
  );
};

export default Products;
