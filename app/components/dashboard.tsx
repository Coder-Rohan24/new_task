"use client";
import { useState } from "react";
import { Menu, Bell, Users, Calendar, Briefcase, Activity, LifeBuoy, Settings,Sun,Moon } from "lucide-react";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark bg-gray-900" : "bg-gray-100 text-gray-900"}>
    <div className="flex">
      {/* Sidebar - Visible in Medium & Large Screens */}
      <div className={`hidden md:flex flex-col shadow-md transition-all md:w-45 lg:w-60 m-[10px] ${darkMode ? "bg-gray-900 text-white" : "bg-white"}`}>
        <div className="p-2 text-center w-full flex justify-center md:h-20 lg:h-24 items-center">
          <h1 className="font-bold md:text-2xl lg:text-4xl ">WeHR</h1>
        </div>
        <nav className="mt-6 ml-3 flex flex-col space-y-4 items-center md:items-center lg:items-start" >
        <ul className={`mb-0 lg:mb-6 ${darkMode ? "text-white" : "text-gray-600"}`}>
          <li className="flex items-center p-4 rounded-lg md:w-auto text-red-500 " >
            <i className="fas fa-th-large mr-3">
            </i>
            <span className="ml-3 hidden md:hidden lg:inline">Dashboard</span>
          </li>
          <li className="flex items-center p-4  hover:bg-gray-200 rounded-lg w-full md:w-auto">
          <i className="fas fa-user-friends mr-3">
          </i>
            <span className="ml-3 hidden md:hidden lg:inline">Recruitment</span>
          </li>
          <li className="flex items-center p-4  hover:bg-gray-200 rounded-lg w-full md:w-auto">
          <i className="fas fa-calendar-alt mr-3">
          </i>
            <span className="ml-3 hidden md:hidden lg:inline">Schedule</span>
          </li>
          <li className="flex items-center p-4  hover:bg-gray-200 rounded-lg w-full md:w-auto">
          <i className="fas fa-users mr-3">
          </i>
            <span className="ml-3 hidden md:hidden lg:inline">Employee</span>
          </li>
          <li className="flex items-center p-4  hover:bg-gray-200 rounded-lg w-full ">
          <i className="fas fa-building mr-3">
          </i>
            <span className="ml-3 hidden md:hidden lg:inline">Department</span>
          </li>
        </ul>
        <div className="mt-0 flex flex-col space-y-4 items-center md:items-center lg:items-start" >
        <h2 className=" text-sm uppercase px-4 hidden md:hidden lg:inline">
        Other
        </h2>
        <ul>
          <li className="flex items-center p-4  hover:bg-gray-200 rounded-lg w-full md:w-auto">
          <i className="fas fa-life-ring mr-3">
          </i>
            <span className="ml-3 hidden md:hidden lg:inline">Support</span>
          </li>
          <li className="flex items-center p-4  hover:bg-gray-200 rounded-lg w-full md:w-auto">
          <i className="fas fa-cog mr-3">
          </i>
            <span className="ml-3 hidden md:hidden lg:inline">Settings</span>
          </li>
        </ul>
        </div>
        </nav>
        </div>

      {/* Navbar - Mobile & Medium Screens */}
      <div className="flex-1">
        <div className={`flex justify-between items-center p-4 shadow-md mt-[10px] mr-[10px] ${darkMode ? "bg-gray-900" :"bg-white"}`}>
          {/* Mobile Menu Button */}
          
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            <Menu className="text-gray-700 md:mr-2" />
          </button>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 mr-2 ml-2">
              {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-900" />}
          </button>
          {/* Brand Name */}
          

          {/* Profile & Notifications */}
          <div className="flex-1 ">
            <div className="flex justify-between items-center ">
              <div className={`relative flex rounded-full py-2 px-4 pl-10 focus:outline-none ${darkMode?"bg-transparent sm:bg-gray-200": " bg-white sm:bg-gray-200"}`}>
                <div><input className=" hidden sm:inline md:inline lg:inline w-[150px] custom-style-2" placeholder="Search" type="text"/></div>
                <div><i className="fas fa-search text-gray-500 mt-[5px]">
                </i>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-bell text-gray-500 mr-6">
                </i>
                <i className="fas fa-envelope text-gray-500 mr-6">
                </i>
                <div className="flex items-center">
                  <img alt="User profile picture" className="rounded-full w-10 h-10 mr-2" height="40" src="/profile.png" width="40"/>
                  <span className={`font-semibold hidden md:inline lg:inline ${darkMode ? "text-white" : "text-gray-900"}`}>
                    Admirra John
                  </span>
            
                  <i className="fas fa-chevron-down ml-2 text-gray-500">
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Inside Navbar */}
        {isOpen && (
          <div className="absolute top-14 left-0 mr-2 mt-7 ">
            <ul className={`py-2 md:ml-3 shadow-md z-10 p-4 ${darkMode?"bg-gray-900 text-white":" bg-gray-100 md:bg-white md:shadow-white"}`}>
              <li className="p-3 hover:bg-gray-200 font-semibold"><i className="fas fa-th-large mr-3 text-red-500">
              </i>Dashboard</li>
              <li className="p-3 hover:bg-gray-200 font-semibold"><i className="fas fa-user-friends mr-3">
              </i>Recruitment</li>
              <li className="p-3 hover:bg-gray-200 font-semibold"><i className="fas fa-calendar-alt mr-3">
              </i>Schedule</li>
              <li className="p-3 hover:bg-gray-200 font-semibold"><i className="fas fa-users mr-3">
              </i>Employee</li>
              <li className="p-3 hover:bg-gray-200 font-semibold"><i className="fas fa-building mr-3">
              </i>Department</li>
              <li className="p-3 hover:bg-gray-200 font-semibold "><i className="fas fa-life-ring mr-3">
              </i>Support</li>
              <li className="p-3 hover:bg-gray-200 font-semibold"><i className="fas fa-cog mr-3">
              </i>Settings</li>
            </ul>
          </div>
        )}
    <h2 className={`text-2xl font-semibold mb-6 m-[10px] ${darkMode ? "text-white" : "text-gray-900"}`}>
     Dashboard
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 m-[10px]">
     <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-red-100 p-6 rounded-lg">
       <h2 className="text-lg font-semibold text-gray-800">
        Available Position
       </h2>
       <h3 className="text-4xl font-bold">
        24
       </h3>
       <p className="text-red-500">
        4 Urgently needed
       </p>
    
      </div>
      <div className="bg-blue-100 p-6 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-800">
        Job Open
       </h2>
       <h3 className="text-4xl font-bold">
        10
       </h3>
       <p className="text-blue-500">
        4 Active hiring
       </p>
  
      </div>
      <div className="bg-purple-100 p-6 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-800 ">
        New Employees
       </h2>
       <h3 className="text-4xl font-bold">
        24
       </h3>
       <p className="text-purple-500">
        4 Department
       </p>
      </div>
      <div className="flex gap-6 flex-col md:col-span-3 lg:col-span-3 sm:flex-row">
        <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between w-full">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">
          Total Employees
          </h2>
          <p className="text-5xl font-bold text-gray-900">
          216
          </p>
          <p className="text-gray-600 mt-2">
          120 Men
          </p>
          <p className="text-gray-600">
          96 Women
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
          <img alt="Graph showing a 2% increase" className="w-30 h-16" height="60" src="/plt1.png" width="100"/>

          </div>
          <div className="bg-red-100 text-red-500 text-xs font-semibold px-2 py-1 rounded mt-2">
          +2% Past month
          </div>
        </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between w-full">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">
          Talent Request 
          </h2>
          <p className="text-5xl font-bold text-gray-900">
          16
          </p>
          <p className="text-gray-600 mt-2">
          6 Men
          </p>
          <p className="text-gray-600">
          10 Women
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
          <img alt="Graph showing a 2% increase" className="w-32 h-16" height="60" src="/plt2.png" width="100"/>

          </div>
          <div className="bg-red-100 text-red-500 text-xs font-semibold px-2 py-1 rounded mt-2">
          +5% Past month
          </div>
        </div>
        </div>
      </div>
     </div>
     <div className="bg-purple-950 text-white p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">
       Recently Activity
      </h3>
      <p className="text-sm">
       10:40 AM, 10 Sept 2021
      </p>
      <p className="font-semibold">
       You Posted a New Job
      </p>
      <p className="text-sm mt-2">
       Kindly check the requirements and terms of work and make sure everything is right.
      </p>
      <p className="text-sm mt-2">
       Today you makes 12 Activity
      </p>
      <button className="bg-red-500 text-white py-2 px-4 rounded-full mt-4">
       See All Activity
      </button>
     </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 m-[10px]">
     <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
      <div className="flex justify-between custom-style flex-row ">
      <h3 className="text-lg font-semibold mb-4">
       Announcement
      </h3>
      <div className="flex mb-4 mt-2">
       <p className="text-gray-500">
        Today, 13 Sep 2021
       </p>
       <i className="fas fa-chevron-down ml-2 mt-1 text-gray-500"></i>
      </div>
      </div>
      <div className="space-y-4">
       <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
        <div>
         <p className="font-semibold">
          Outing schedule for every departement
         </p>
         <p className="text-gray-500 text-sm">
          5 Minutes ago
         </p>
        </div>
        <i className="fas fa-thumbtack text-gray-500">
        </i>
       </div>
       <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
        <div>
         <p className="font-semibold">
          Meeting HR Department
         </p>
         <p className="text-gray-500 text-sm">
          Yesterday, 12:50 PM
         </p>
        </div>
        <i className="fas fa-thumbtack text-gray-500">
        </i>
       </div>
       <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
        <div>
         <p className="font-semibold">
          IT Department need two more talents for UX/UI Designer position
         </p>
         <p className="text-gray-500 text-sm">
          Yesterday, 09:15 AM
         </p>
        </div>
        <i className="fas fa-thumbtack text-gray-500">
        </i>
       </div>
      </div>
      <button className="text-red-500 mt-4">
       See All Announcement
      </button>
     </div>
     <div className="bg-white p-6 rounded-lg shadow-md col-span-2 lg:col-span-1 ">
      <h3 className="text-lg font-semibold mb-4">
       Upcoming Schedule
      </h3>
      <div className="flex justify-between items-center mb-4">
       <p className="text-gray-500">
        Today, 13 Sep 2021
       </p>
       <i className="fas fa-calendar-alt text-gray-500">
       </i>
      </div>
      <div className="space-y-4">
       <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">
         Review candidate applications
        </p>
        <p className="text-gray-500 text-sm">
         Today - 11:30 AM
        </p>
       </div>
       <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">
         Interview with candidates
        </p>
        <p className="text-gray-500 text-sm">
         Today - 10:30 AM
        </p>
       </div>
       <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">
         Short meeting with product designer from IT Department
        </p>
        <p className="text-gray-500 text-sm">
         Today - 09:15 AM
        </p>
       </div>
      </div>
      <button className="text-red-500 mt-4">
       Create a New Schedule
      </button>
     </div>
    </div>
   </div>
  </div>
  </div>
  );
}
