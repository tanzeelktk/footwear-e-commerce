import { Table, TableBody, TableCell, TableHeadCell, TableHead , Button, TableRow, Select} from 'flowbite-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faTrash, faUserCheck, faUserSlash} from "@fortawesome/free-solid-svg-icons";


const Users = () => {
  return (
    <div>
        <div className="p-5 flex justify-between items-center bg-white shadow-md rounded-2xl">
            {/* Left side title */}
            <h2 className="text-xl font-semibold text-gray-700">
              Users List
            </h2>

            {/* Right side button */}
            <Button color="red" className="rounded-xl px-4 py-2">
            + Add New User
            </Button>
          </div>

          <Table hoverable>
            <TableHead>
              <TableRow>
                <TableHeadCell>Sr.</TableHeadCell>
                <TableHeadCell>Image</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Email</TableHeadCell>
                <TableHeadCell>Role</TableHeadCell>
                <TableHeadCell>Action</TableHeadCell>
                <TableHeadCell>Action</TableHeadCell>
                <TableHeadCell>Action</TableHeadCell>
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
                    src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                  />
                </TableCell>
                <TableCell>Tanzeel</TableCell>
                <TableCell>tanzeelktk@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell><FontAwesomeIcon icon={faEdit} className="dark:text-white text-2xl ml-2 hover:text-blue-600 hover:cursor-pointer" /></TableCell>
                <TableCell>
                  <FontAwesomeIcon icon={faTrash} className="dark:text-white text-2xl ml-2  hover:text-blue-600 hover:cursor-pointer" />
                </TableCell>
                <TableCell><FontAwesomeIcon icon={faUserCheck} className="dark:text-white text-2xl ml-2  hover:text-blue-600 hover:cursor-pointer" /></TableCell>
                <TableCell>
                  <FontAwesomeIcon icon={faUserSlash} className="dark:text-white text-2xl ml-2  hover:text-blue-600 hover:cursor-pointer" />
                </TableCell>
                <TableCell>
                    <Select>
                        <option>Admin</option>
                        <option>User</option>
                    </Select>
                </TableCell>
              </TableRow>
              </TableBody>
              </Table>
    </div>
  )
}

export default Users