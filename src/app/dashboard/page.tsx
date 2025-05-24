"use client";

import { FiUsers, FiPhoneCall, FiDollarSign, FiCheckSquare } from 'react-icons/fi';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { SalesChart } from '@/components/dashboard/SalesChart';
import { RecentActivities } from '@/components/dashboard/RecentActivities';
import { formatCurrency } from '@/lib/utils';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-base-content/70">Overview of your CRM performance</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Customers"
          value="1,234"
          icon={<FiUsers className="h-6 w-6" />}
          trend={{ value: 12, isPositive: true }}
          description="vs. last month"
        />
        <StatsCard
          title="New Leads"
          value="432"
          icon={<FiPhoneCall className="h-6 w-6" />}
          trend={{ value: 8, isPositive: true }}
          description="vs. last month"
        />
        <StatsCard
          title="Total Sales"
          value={formatCurrency(682500)}
          icon={<FiDollarSign className="h-6 w-6" />}
          trend={{ value: 15, isPositive: true }}
          description="vs. last month"
        />
        <StatsCard
          title="Tasks Completed"
          value="78%"
          icon={<FiCheckSquare className="h-6 w-6" />}
          trend={{ value: 5, isPositive: false }}
          description="vs. last month"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <SalesChart />
        <RecentActivities />
      </div>
    </div>
  );
}
