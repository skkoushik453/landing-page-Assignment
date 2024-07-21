import { useState } from 'react';
import {
  ChevronDownIcon,
  PlusIcon,
  ShoppingCartIcon,
  HomeIcon,
  UserIcon,
  UserGroupIcon,
  DocumentTextIcon,
  TicketIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Food',
    icon: HomeIcon,
    color: 'red-500',
  },
  {
    name: 'Parking',
    icon: UserGroupIcon,
    color: 'blue-500',
  },
  {
    name: 'Laundry',
    icon: UserIcon,
    color: 'green-500',
  },
  {
    name: 'Transport',
    icon: DocumentTextIcon,
    color: 'yellow-500',
  },
  {
    name: 'Coaching',
    color: 'pink-500',
  },
  {
    name: 'Entertainment',
    icon: TicketIcon,
    color: 'purple-500',
  },
];

const addOnServices = [
  {
    name: 'Food',
    icon: HomeIcon,
    color: 'red-500',
  },
  {
    name: 'Parking',
    icon: UserGroupIcon,
    color: 'blue-500',
  },
];

const dashboard = [
  {
    name: 'Raise Tickets',
    icon: TicketIcon,
    color: 'green-500',
  },
  {
    name: 'Invoice Due',
    color: 'yellow-500',
  },
  {
    name: 'Bills',
    icon: CreditCardIcon,
    color: 'red-500',
  },
];

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showAddOnServices, setShowAddOnServices] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-10" />
          <h1 className="text-xl font-bold ml-4">MY COMPANY</h1>
        </div>
        <div className="flex space-x-4">
          <button className="text-gray-500 hover:text-gray-700">Services</button>
          <button className="text-gray-500 hover:text-gray-700">Media</button>
          <button className="text-gray-500 hover:text-gray-700">Cases</button>
          <button className="text-gray-500 hover:text-gray-700">FAQ</button>
          <button className="text-gray-500 hover:text-gray-700">Contacts</button>
          <div className="relative">
            <button className="bg-gray-200 rounded-full px-4 py-2">
              +91 0000000000
            </button>
            <div className="absolute top-10 right-0 w-48 bg-white shadow-md rounded-md">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">demo@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            User-Centric Excellence: Our App Development services
            Tackles Your Pain Points
          </h2>
          <p className="text-lg mb-8">
            Experience a Seamless Digital Journey with Desun - Where Every Line
            of Code Resolves Your Challenges and Elevates Your App Experience
            to Unparalleled Heights.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setShowContactForm(true)}
          >
            Leave your contacts and we will call you back
          </button>
        </div>

        {showContactForm && (
          <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6 mt-8">
            <h3 className="text-xl font-bold mb-4">
              Leave your contacts and we will call you back
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="+91 0000000000"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Business Mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="demoaccount@gmail.com"
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type="submit"
              >
                Get Consultation
              </button>
            </form>
          </div>
        )}

        <div className="max-w-screen-xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-md shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">
                Featured Category Services
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="bg-gray-200 rounded-md shadow-md flex flex-col items-center justify-center p-4"
                  >
                    <p className="text-gray-700 font-bold mt-2">
                      {feature.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md p-6 relative">
              <div className="absolute top-4 right-4 cursor-pointer">
                <ShoppingCartIcon className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Dashboard</h3>
              <div className="bg-gray-200 rounded-md shadow-md p-4">
                <div className="flex items-center">
                  <UserIcon className="w-10 h-10 text-gray-700" />
                  <div className="ml-4">
                    <p className="text-gray-700 font-bold">Hello, Barun</p>
                    <p className="text-gray-500">
                      Overdue Invoice: AUG, 2023
                    </p>
                    <p className="text-gray-500">Last Date: 12/08/2023</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <p className="text-gray-700 font-bold">Total Amount</p>
                  <p className="text-gray-700 font-bold">₹ 12,980</p>
                </div>
                <div className="bg-red-100 rounded-md shadow-md p-4 mt-4">
                  <div className="flex items-center">
                    <PlusIcon className="w-6 h-6 text-red-500" />
                    <p className="text-red-500 font-bold ml-2">
                      Please Update Your KYC
                    </p>
                  </div>
                  <p className="text-gray-500 mt-2">
                    Please submit updated KYC documents for verification on or
                    before 20/10/2023. During this period, you may face
                    limitations while using our services. For any assistance
                    regarding KYC submission, please contact our customer care.
                  </p>
                </div>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                onClick={() => setShowAddOnServices(true)}
              >
                Our available add-on services
              </button>
            </div>
            {showAddOnServices && (
              <div className="bg-white rounded-md shadow-md p-6 relative">
                <div className="absolute top-4 right-4 cursor-pointer">
                  <ChevronDownIcon className="w-6 h-6 text-gray-500" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {addOnServices.map((feature) => (
                    <div
                      key={feature.name}
                      className="bg-gray-200 rounded-md shadow-md flex flex-col items-center justify-center p-4"
                    >
                      <feature.icon className="w-12 h-12 text-gray-700" />
                      <p className="text-gray-700 font-bold mt-2">
                        {feature.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="bg-white rounded-md shadow-md p-6 relative">
              <div className="absolute top-4 right-4 cursor-pointer">
                <ChevronDownIcon className="w-6 h-6 text-gray-500" />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                onClick={() => setShowDashboard(true)}
              >
                Dashboard
              </button>
            </div>
            {showDashboard && (
              <div className="bg-white rounded-md shadow-md p-6 relative">
                <div className="absolute top-4 right-4 cursor-pointer">
                  <ChevronDownIcon className="w-6 h-6 text-gray-500" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {dashboard.map((feature) => (
                    <div
                      key={feature.name}
                      className="bg-gray-200 rounded-md shadow-md flex flex-col items-center justify-center p-4"
                    >
                      <p className="text-gray-700 font-bold mt-2">
                        {feature.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
