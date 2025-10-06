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
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5">
        <div className="md:col-span-2">
          <div className="p-5 flex justify-between items-center bg-white shadow-md rounded-2xl">
            {/* Left side title */}
            <h2 className="text-xl font-semibold text-gray-700">
              Product List
            </h2>

            {/* Right side button */}
            <Button color="red" className="rounded-xl px-4 py-2">
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
                <TableCell><FontAwesomeIcon icon={faEdit} className="dark:text-white text-2xl ml-2" /></TableCell>
                <TableCell>
                  <FontAwesomeIcon icon={faTrash} className="dark:text-white text-2xl ml-2" />
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
                <TableCell><FontAwesomeIcon icon={faEdit} className="dark:text-white text-2xl ml-2" /></TableCell>
                <TableCell>
                  <FontAwesomeIcon icon={faTrash} className="dark:text-white text-2xl ml-2" />
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
                <TableCell><FontAwesomeIcon icon={faEdit} className="dark:text-white text-2xl ml-2" /></TableCell>
                <TableCell>
                  <FontAwesomeIcon icon={faTrash} className="dark:text-white text-2xl ml-2" />
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
                <TableCell><FontAwesomeIcon icon={faEdit} className="dark:text-white text-2xl ml-2" /></TableCell>
                <TableCell>
                  <FontAwesomeIcon icon={faTrash} className="dark:text-white text-2xl ml-2" />
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
                <TableCell><FontAwesomeIcon icon={faEdit} className="dark:text-white text-2xl ml-2" /></TableCell>
                <TableCell>
                  <FontAwesomeIcon icon={faTrash} className="dark:text-white text-2xl ml-2" />
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
                <TableCell><FontAwesomeIcon icon={faEdit} className="dark:text-white text-2xl ml-2" /></TableCell>
                <TableCell>
                  <FontAwesomeIcon icon={faTrash} className="dark:text-white text-2xl ml-2" />
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
                <TableCell><FontAwesomeIcon icon={faEdit} className="dark:text-white text-2xl ml-2" /></TableCell>
                <TableCell>
                  <FontAwesomeIcon icon={faTrash} className="dark:text-white text-2xl ml-2" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
       
      </div>
    </div>
  );
};

export default Products;
