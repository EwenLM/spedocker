
import React from 'react'

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
};

export default function StatCard({ title, value, change, isPositive, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {icon}
      </div>
      <div className="flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <span
          className={`ml-2 flex items-center text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}
        >
          {isPositive ? (
            <ArrowUpIcon className="h-4 w-4 mr-0.5" />
          ) : (
            <ArrowDownIcon className="h-4 w-4 mr-0.5" />
          )}
          {change}
        </span>
      </div>
    </div>
  );
}
