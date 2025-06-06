"use client";
import React, { useState } from 'react'

import {
  CalendarIcon,
  DownloadIcon,
  RefreshCwIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  UserIcon,
  GlobeIcon,
  ClockIcon,
  SmartphoneIcon,
  MonitorIcon,
  TabletIcon,
} from 'lucide-react'
export default function Page() {
  const [timeRange, setTimeRange] = useState('30d')
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">
          Statistiques du site
        </h1>
        <div className="flex items-center space-x-3">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              className={`px-3 py-1.5 text-sm font-medium ${timeRange === '7d' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
              onClick={() => setTimeRange('7d')}
            >
              7 jours
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium ${timeRange === '30d' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
              onClick={() => setTimeRange('30d')}
            >
              30 jours
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium ${timeRange === '90d' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
              onClick={() => setTimeRange('90d')}
            >
              90 jours
            </button>
          </div>
          <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            <CalendarIcon className="h-4 w-4 mr-1" />
            Personnaliser
          </button>
          <button className="p-1.5 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
            <RefreshCwIcon className="h-5 w-5" />
          </button>
          <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            <DownloadIcon className="h-4 w-4 mr-1" />
            Exporter
          </button>
        </div>
      </div>
      {/* Overview stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Visites totales"
          value="12,345"
          change="+8.2%"
          isPositive={true}
          description="vs période précédente"
        />
        <StatCard
          title="Visiteurs uniques"
          value="5,678"
          change="+12.1%"
          isPositive={true}
          description="vs période précédente"
        />
        <StatCard
          title="Taux de rebond"
          value="42.3%"
          change="-3.5%"
          isPositive={true}
          description="vs période précédente"
        />
        <StatCard
          title="Durée moyenne"
          value="2m 45s"
          change="+0.8%"
          isPositive={true}
          description="vs période précédente"
        />
      </div>
      {/* Traffic chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-800">
            Évolution du trafic
          </h2>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="h-3 w-3 bg-blue-500 rounded-full mr-1"></span>
              <span className="text-xs text-gray-500">Visites</span>
            </div>
            <div className="flex items-center">
              <span className="h-3 w-3 bg-green-500 rounded-full mr-1"></span>
              <span className="text-xs text-gray-500">Visiteurs uniques</span>
            </div>
          </div>
        </div>
        <div className="h-72 w-full">
          {/* This is a placeholder for a chart - in a real app, you would use a charting library */}
          <div className="h-full w-full bg-gray-50 flex items-center justify-center rounded border border-gray-200">
            <div className="text-center">
              <div className="text-gray-400 mb-2">
                Graphique d'évolution du trafic
              </div>
              <div className="text-sm text-gray-500">
                Utilisez une bibliothèque comme Recharts ou Chart.js pour
                implémenter ce graphique
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Traffic sources and devices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic sources */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Sources de trafic
          </h2>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                  style={{
                    backgroundColor: source.color + '20',
                  }}
                >
                  {source.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      {source.name}
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {source.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${source.percentage}%`,
                        backgroundColor: source.color,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Devices */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Appareils</h2>
          <div className="space-y-4">
            {devices.map((device, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                  style={{
                    backgroundColor: device.color + '20',
                  }}
                >
                  {device.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      {device.name}
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {device.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${device.percentage}%`,
                        backgroundColor: device.color,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Popular pages */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">
            Pages les plus visitées
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Page
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Visites
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Visiteurs uniques
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Taux de rebond
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Durée moyenne
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {popularPages.map((page, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {page.title}
                    </div>
                    <div className="text-sm text-gray-500">{page.url}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {page.visits}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {page.uniqueVisitors}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {page.bounceRate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {page.avgTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
type StatCardProps = {
  title: string
  value: string
  change: string
  isPositive: boolean
  description: string
}

function StatCard({ title, value, change, isPositive, description }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
      <div className="flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <span
          className={`ml-2 flex items-center text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}
        >
          {isPositive ? (
            <TrendingUpIcon className="h-4 w-4 mr-0.5" />
          ) : (
            <TrendingDownIcon className="h-4 w-4 mr-0.5" />
          )}
          {change}
        </span>
      </div>
      <p className="text-xs text-gray-500 mt-1">{description}</p>
    </div>
  )
}
// Dummy data for traffic sources
const trafficSources = [
  {
    name: 'Recherche organique',
    percentage: 42,
    color: '#3B82F6',
    icon: <GlobeIcon className="h-4 w-4 text-blue-500" />,
  },
  {
    name: 'Direct',
    percentage: 28,
    color: '#10B981',
    icon: <UserIcon className="h-4 w-4 text-green-500" />,
  },
  {
    name: 'Réseaux sociaux',
    percentage: 18,
    color: '#6366F1',
    icon: <TrendingUpIcon className="h-4 w-4 text-indigo-500" />,
  },
  {
    name: 'Référencement',
    percentage: 12,
    color: '#F59E0B',
    icon: <ClockIcon className="h-4 w-4 text-amber-500" />,
  },
]
// Dummy data for devices
const devices = [
  {
    name: 'Mobile',
    percentage: 58,
    color: '#3B82F6',
    icon: <SmartphoneIcon className="h-4 w-4 text-blue-500" />,
  },
  {
    name: 'Desktop',
    percentage: 32,
    color: '#10B981',
    icon: <MonitorIcon className="h-4 w-4 text-green-500" />,
  },
  {
    name: 'Tablet',
    percentage: 10,
    color: '#F59E0B',
    icon: <TabletIcon className="h-4 w-4 text-amber-500" />,
  },
]
// Dummy data for popular pages
const popularPages = [
  {
    title: "Page d'accueil",
    url: '/',
    visits: '4,235',
    uniqueVisitors: '3,128',
    bounceRate: '32%',
    avgTime: '1m 47s',
  },
  {
    title: 'Nos services',
    url: '/services',
    visits: '2,871',
    uniqueVisitors: '2,103',
    bounceRate: '28%',
    avgTime: '2m 12s',
  },
  {
    title: 'Projets récents',
    url: '/projects',
    visits: '2,156',
    uniqueVisitors: '1,728',
    bounceRate: '35%',
    avgTime: '3m 04s',
  },
  {
    title: 'À propos de nous',
    url: '/about',
    visits: '1,825',
    uniqueVisitors: '1,542',
    bounceRate: '41%',
    avgTime: '1m 23s',
  },
  {
    title: 'Contact',
    url: '/contact',
    visits: '1,247',
    uniqueVisitors: '1,103',
    bounceRate: '25%',
    avgTime: '2m 38s',
  },
]
