import React, { useState } from "react";
import "../globals.css";
import {
  LayoutDashboardIcon,
  Images,
  BarChart3Icon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
  BellIcon,
  SearchIcon,
} from "lucide-react";
import { link } from "fs";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const menuItems = [
    {
      id: "dashboard",
      label: "Tableau de bord",
      icon: <LayoutDashboardIcon size={20} />,
      link: "/admin",
    },
    {
      id: "projects",
      label: "Réalisations",
      icon: <Images size={20} />,
      link: "/admin/realisations",
    },
    {
      id: "analytics",
      label: "Statistiques",
      icon: <BarChart3Icon size={20} />,
      link: "/admin/stats",
    },
  ];

  return (
    <html lang="fr">
      <body>
        <div className="flex h-screen w-full bg-gray-50">
          {/* Sidebar */}
          <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h1 className="text-xl font-bold text-blue-600">SPE Admin</h1>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              <nav className="px-2 space-y-1">
                {menuItems.map((item) => (
                  <a href={item.link}
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${currentPage === item.id ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="p-4 border-t border-gray-200">
              <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 w-full">
                <LogOutIcon size={20} className="mr-3" />
                Déconnexion
              </button>
            </div>
          </div>
          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top header */}
            <header className="bg-white border-b border-gray-200">
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex-1 flex">
                  <div className="max-w-lg w-full lg:max-w-xs relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon size={18} className="text-gray-400" />
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Rechercher..."
                      type="search"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-400 hover:text-gray-500 relative">
                    <BellIcon size={20} />
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                  </button>
                  <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                    <UserIcon size={20} className="mr-1" />
                    Admin
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    <SettingsIcon size={20} />
                  </button>
                </div>
              </div>
            </header>
            {/* Page content */}
            <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
export const metadata = {
  // Metadata spécifique pour l'admin
  title: 'Admin - SPE',
  description: 'Administration SPE'
}
