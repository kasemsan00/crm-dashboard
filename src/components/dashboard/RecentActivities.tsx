import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { formatDate } from '@/lib/utils';

type Activity = {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'customer' | 'lead' | 'deal' | 'task';
};

const activities: Activity[] = [
  {
    id: '1',
    title: 'New Customer',
    description: 'John Doe was added as a new customer',
    date: '2025-05-24T10:30:00',
    type: 'customer',
  },
  {
    id: '2',
    title: 'Deal Closed',
    description: 'Enterprise package deal with ABC Corp was closed',
    date: '2025-05-23T16:45:00',
    type: 'deal',
  },
  {
    id: '3',
    title: 'New Lead',
    description: 'New lead from website contact form: XYZ Industries',
    date: '2025-05-23T09:15:00',
    type: 'lead',
  },
  {
    id: '4',
    title: 'Task Completed',
    description: 'Follow-up call with potential client completed',
    date: '2025-05-22T14:20:00',
    type: 'task',
  },
  {
    id: '5',
    title: 'New Lead',
    description: 'New lead from trade show: Acme Inc.',
    date: '2025-05-22T11:10:00',
    type: 'lead',
  },
];

function getActivityIcon(type: Activity['type']) {
  switch (type) {
    case 'customer':
      return (
        <div className="w-8 h-8 rounded-full bg-info/20 text-info flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      );
    case 'lead':
      return (
        <div className="w-8 h-8 rounded-full bg-warning/20 text-warning flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
      );
    case 'deal':
      return (
        <div className="w-8 h-8 rounded-full bg-success/20 text-success flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
      );
    case 'task':
      return (
        <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 11l3 3L22 4"></path>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
        </div>
      );
    default:
      return null;
  }
}

export function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              {getActivityIcon(activity.type)}
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{activity.title}</p>
                  <span className="text-xs text-base-content/70">
                    {formatDate(activity.date)}
                  </span>
                </div>
                <p className="text-sm text-base-content/70">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
