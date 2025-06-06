import React from "react";
import AdminLayout from "@/app/admin/layout";
import {
  TrendingUpIcon,
  UsersIcon,
  EyeIcon,
  CheckCircleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  FolderIcon,
  BarChart3Icon,
} from "lucide-react";
export default function Page() {
  return (
    <AdminLayout>
 <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">
          Tableau de bord
        </h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Dernière mise à jour:</span>
          <span className="text-sm font-medium">Aujourd'hui à 14:30</span>
        </div>
      </div>
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Visites"
          value="2,345"
          change="+12.3%"
          isPositive={true}
          icon={<EyeIcon className="h-6 w-6 text-blue-500" />}
        />
        <StatCard
          title="Nouveaux utilisateurs"
          value="120"
          change="+8.2%"
          isPositive={true}
          icon={<UsersIcon className="h-6 w-6 text-green-500" />}
        />
        <StatCard
          title="Projets vus"
          value="485"
          change="-2.4%"
          isPositive={false}
          icon={<TrendingUpIcon className="h-6 w-6 text-purple-500" />}
        />
        <StatCard
          title="Projets complétés"
          value="48"
          change="+24%"
          isPositive={true}
          icon={<CheckCircleIcon className="h-6 w-6 text-amber-500" />}
        />
      </div>
      {/* Recent activity */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">
            Activité récente
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivities.map((activity, index) => (
            <div key={index} className="px-6 py-4 flex items-start">
              <div className={`rounded-full p-2 mr-4 ${activity.bgColor}`}>
                {activity.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-500">{activity.description}</p>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Actions rapides
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition">
              <FolderIcon className="h-6 w-6 text-blue-500 mb-2" />
              <span className="text-sm font-medium text-gray-600">
                Nouveau projet
              </span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition">
              <BarChart3Icon className="h-6 w-6 text-blue-500 mb-2" />
              <span className="text-sm font-medium text-gray-600">
                Voir statistiques
              </span>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Notes</h2>
          <div className="border border-gray-200 rounded-lg p-3 mb-3">
            <p className="text-sm text-gray-600">
              Réunion avec client Dupont pour le projet d'extension - Jeudi 15h
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-3">
            <p className="text-sm text-gray-600">
              Commander matériaux pour le chantier rue des Lilas
            </p>
          </div>
        </div>
      </div>
    </div>
    </AdminLayout>
  );
}
type StatCardProps = {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
};

function StatCard({ title, value, change, isPositive, icon }: StatCardProps) {
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
// Dummy data
const recentActivities = [
  {
    icon: <FolderIcon className="h-5 w-5 text-white" />,
    bgColor: "bg-blue-500",
    title: "Nouveau projet ajouté",
    description: "Rénovation appartement Rue Victor Hugo",
    time: "Il y a 2h",
  },
  {
    icon: <EyeIcon className="h-5 w-5 text-white" />,
    bgColor: "bg-green-500",
    title: "Pic de visites sur le site",
    description: "245 visiteurs actifs en ce moment",
    time: "Il y a 3h",
  },
  {
    icon: <CheckCircleIcon className="h-5 w-5 text-white" />,
    bgColor: "bg-amber-500",
    title: "Projet marqué comme terminé",
    description: "Construction maison individuelle Chemin des Oliviers",
    time: "Il y a 5h",
  },
];
