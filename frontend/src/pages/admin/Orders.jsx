import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  TableHead,
  TableHeadCell,
  TableRow,
  Table,
  TableBody,
  TableCell,
} from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Orders = () => {
  const location = useLocation();
  return (
    <div className="bg-gray-100 p-7 m-7">
      <div className="py-5 flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          Order{" "}
          <span className="font-medium text-sm text-gray-500">
            15 Orders Found
          </span>
        </h2>
        <Button>Dropdown</Button>
      </div>
      <div className="flex">
        <div className="px-5">
          <Link
            className={`relative pb-1 text-lg font-medium transition-colors duration-200
          ${
            location.pathname === "/admin/orders"
              ? "text-blue-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-500"
              : "text-gray-500 hover:text-blue-400"
          }`}
          >
            All Orders
          </Link>
        </div>
        <div className="px-5">
          <Link
            className={`relative pb-1 text-lg font-medium transition-colors duration-200
          ${
            location.pathname === "/orders"
              ? "text-blue-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-500"
              : "text-gray-500 hover:text-blue-400"
          }`}
          >
            Completed
          </Link>
        </div>
        <div className="px-5">
          <Link
            className={`relative pb-1 text-lg font-medium transition-colors duration-200
          ${
            location.pathname === "/orders"
              ? "text-blue-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-500"
              : "text-gray-500 hover:text-blue-400"
          }`}
          >
            Pending
          </Link>
        </div>
        <div className="px-5">
          <Link
            className={`relative pb-1 text-lg font-medium transition-colors duration-200
          ${
            location.pathname === "/orders"
              ? "text-blue-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-500"
              : "text-gray-500 hover:text-blue-400"
          }`}
          >
            Canceled
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>#</TableHeadCell>
              <TableHeadCell>
                Order ID
                <FontAwesomeIcon icon={faSort} className="dark:text-white" />
              </TableHeadCell>
              <TableHeadCell>
                Product Name
                <FontAwesomeIcon icon={faSort} className="dark:text-white" />
              </TableHeadCell>
              <TableHeadCell>
                Address
                <FontAwesomeIcon icon={faSort} className="dark:text-white" />
              </TableHeadCell>
              <TableHeadCell>
                Date
                <FontAwesomeIcon icon={faSort} className="dark:text-white" />
              </TableHeadCell>
              <TableHeadCell>
                Price
                <FontAwesomeIcon icon={faSort} className="dark:text-white" />
              </TableHeadCell>
              <TableHeadCell>
                Status
                <FontAwesomeIcon icon={faSort} className="dark:text-white" />
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell className="font-medium">#7859465553</TableCell>
              <TableCell className="font-medium flex items-center"><img className="w-10 h-10" src="https://havitstore.pk/cdn/shop/files/M9040S_9.png?v=1728988298"/>Smart Watch</TableCell>
              <TableCell className="font-medium">Karak City</TableCell>
              <TableCell className="font-medium">10/02/2023</TableCell>
              <TableCell className="font-medium">$365.00</TableCell>
              <TableCell className="font-medium">
                <button className="bg-green-50 text-green-500 w-28 h-9 rounded-4xl hover:bg-green-100 hover:cursor-pointer">
                  Complete
                </button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell className="font-medium">#7859465553</TableCell>
              <TableCell className="font-medium flex items-center"><img className="w-10 h-10" src="https://freepngimg.com/save/21604-smartphone-transparent-background/460x460"/>Mobile Phone</TableCell>
              <TableCell className="font-medium">Kohat City</TableCell>
              <TableCell className="font-medium">10/02/2024</TableCell>
              <TableCell className="font-medium">$400.00</TableCell>
              <TableCell className="font-medium">
                <button className="bg-orange-50 text-orange-500 w-28 h-9 rounded-4xl hover:bg-orange-100 hover:cursor-pointer">
                  Pending
                </button>
              </TableCell>
            </TableRow>
             <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell className="font-medium">#7859465553</TableCell>
              <TableCell className="font-medium flex items-center"><img className="w-10 h-10" src="https://png.pngtree.com/png-vector/20250416/ourmid/pngtree-white-airpods-wireless-earphones-with-charging-case-isolated-on-transparent-background-png-image_16032402.png"/>Ear Buds</TableCell>
              <TableCell className="font-medium">Karachi City</TableCell>
              <TableCell className="font-medium">10/02/2025</TableCell>
              <TableCell className="font-medium">$200.00</TableCell>
              <TableCell className="font-medium">
                <button className="bg-red-50 text-red-500 w-28 h-9 rounded-4xl hover:bg-red-100 hover:cursor-pointer">
                  Canceled
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Orders;
