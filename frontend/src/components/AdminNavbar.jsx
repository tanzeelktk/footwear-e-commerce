import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const AdminNavbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav className="bg-blue-600 text-white shadow-lg dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="text-2xl font-bold tracking-wide">Footwear</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li>
            <Link to="/admin" className="hover:text-gray-200 transition-colors">
              Dashboard
            </Link>
          </li>
          <li>
            <Button
            onClick={()=>setDropdown(!dropdown)}
             className="hover:text-gray-200 transition-colors">
              Products
            </Button>
            {dropdown && (
              <ul className="absolute bg-gray-600 text-white p-4">
                <li>
                  <Link
                    to="/admin/products"
                    className="hover:text-gray-200 transition-colors"
                  >
                    Product List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/categories"
                    className="hover:text-gray-200 transition-colors"
                  >
                    Categories
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/admin/users"
              className="hover:text-gray-200 transition-colors"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/orders"
              className="hover:text-gray-200 transition-colors"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-gray-200 transition-colors">
              Settings
            </Link>
          </li>
        </ul>

        {/* Desktop Logout Button */}
        <div className="hidden md:block">
          <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md font-medium transition">
            Logout
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-700 px-6 pb-4">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#" className="hover:text-gray-200 transition-colors">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition-colors">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition-colors">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition-colors">
                Settings
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <button className="w-full bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md font-medium transition">
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
