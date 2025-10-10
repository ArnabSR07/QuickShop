import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <Navbar/>

      <div className="bg-gray-50 min-h-screen flex flex-col">
        {/* Breadcrumb & Welcome */}
        <div className="px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
          <p className="text-sm text-gray-500">Home / My Account</p>
          <p className="text-sm">
            Welcome! <span className="text-red-500 font-semibold">Md Rimel</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row flex-1 px-4 sm:px-6 lg:px-8 py-6 gap-6 lg:gap-8">
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 bg-white shadow rounded-md p-6 flex-shrink-0">
            <div className="space-y-6 text-sm">
              <div>
                <h3 className="text-gray-700 font-semibold mb-2"><Link>Manage My Account</Link></h3>
                <ul className="space-y-1">
                  <li className="text-red-500 font-medium">My Profile</li>
                  <li className="text-gray-500">Address Book</li>
                  <li className="text-gray-500">My Payment Options</li>
                </ul>
              </div>

              <div>
                <h3 className="text-gray-700 font-semibold mb-2"><Link to='/cart'>My Orders</Link></h3>
                <ul className="space-y-1">
                  <li className="text-gray-500">My Returns</li>
                  <li className="text-gray-500">My Cancellations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-gray-700 font-semibold mb-2">My Wishlist</h3>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="flex-1 bg-white shadow rounded-md p-6">
            <h2 className="text-xl font-bold text-red-500 mb-6">Edit Your Profile</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* First & Last Name */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">First Name</label>
                <input
                  type="text"
                  defaultValue="Md"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-200"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Last Name</label>
                <input
                  type="text"
                  defaultValue="Rimel"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-200"
                />
              </div>

              {/* Email & Address */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  defaultValue="rimel111@gmail.com"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-200"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Address</label>
                <input
                  type="text"
                  defaultValue="Kingston, 5236, United States"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-200"
                />
              </div>

              {/* Password Section */}
              <div className="col-span-1 sm:col-span-2">
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-200"
                  placeholder='Current Password'
                />
              </div>
              <div className="col-span-1 sm:col-span-2">
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-200"
                  placeholder='New Password'
                />
              </div>
              <div className="col-span-1 sm:col-span-2">
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-200"
                  placeholder='Confirm New Password'
                />
              </div>

              {/* Buttons */}
              <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row justify-end gap-4 mt-4">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-400 rounded-md text-gray-600 hover:bg-gray-100 w-full sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 w-full sm:w-auto"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Profile
