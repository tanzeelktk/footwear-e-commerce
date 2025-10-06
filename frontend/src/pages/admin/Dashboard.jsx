import { Card } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBox,
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  // Dummy Sales Data
  const salesData = [
    { month: "Jan", sales: 400 },
    { month: "Feb", sales: 300 },
    { month: "Mar", sales: 500 },
    { month: "Apr", sales: 200 },
    { month: "May", sales: 600 },
    { month: "Jun", sales: 700 },
  ];

  // Dummy Active Users Data
  const usersData = [
    { month: "Jan", active: 120 },
    { month: "Feb", active: 200 },
    { month: "Mar", active: 150 },
    { month: "Apr", active: 300 },
    { month: "May", active: 280 },
    { month: "Jun", active: 350 },
  ];

  return (
    <div className="p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-gray-700">Users</h1>
              <div className="text-2xl font-bold text-blue-600">100</div>
            </div>
            <FontAwesomeIcon icon={faUsers} className="text-blue-500 text-4xl" />
          </div>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-gray-700">Products</h1>
              <div className="text-2xl font-bold text-green-600">50</div>
            </div>
            <FontAwesomeIcon icon={faBox} className="text-green-500 text-4xl" />
          </div>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-gray-700">Orders</h1>
              <div className="text-2xl font-bold text-yellow-600">70</div>
            </div>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-yellow-500 text-4xl"
            />
          </div>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-gray-700">Revenue</h1>
              <div className="text-2xl font-bold text-purple-600">$100</div>
            </div>
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-purple-500 text-4xl"
            />
          </div>
        </Card>
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Sales Chart */}
        <Card className="shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Monthly Sales
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#4F46E5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Active Users Chart */}
        <Card className="shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Active Users
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={usersData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="active" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
