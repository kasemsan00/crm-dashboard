"use client";

import { useState } from 'react';
import { FiPlus, FiSearch, FiFilter, FiEdit2, FiTrash2, FiEye } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { formatDate, formatCurrency } from '@/lib/utils';

type Deal = {
  id: string;
  name: string;
  customer: string;
  value: number;
  stage: 'prospecting' | 'qualification' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';
  expectedCloseDate: string;
  dateCreated: string;
};

const deals: Deal[] = [
  {
    id: '1',
    name: 'Enterprise Software Package',
    customer: 'ABC Corporation',
    value: 75000,
    stage: 'proposal',
    expectedCloseDate: '2025-06-15T00:00:00',
    dateCreated: '2025-05-10T10:30:00',
  },
  {
    id: '2',
    name: 'Annual Support Contract',
    customer: 'XYZ Industries',
    value: 45000,
    stage: 'closed-won',
    expectedCloseDate: '2025-05-20T00:00:00',
    dateCreated: '2025-04-15T14:45:00',
  },
  {
    id: '3',
    name: 'Custom Development Project',
    customer: 'Johnson & Co',
    value: 120000,
    stage: 'negotiation',
    expectedCloseDate: '2025-06-30T00:00:00',
    dateCreated: '2025-05-05T09:15:00',
  },
  {
    id: '4',
    name: 'Consulting Services',
    customer: 'Davis Enterprises',
    value: 35000,
    stage: 'closed-lost',
    expectedCloseDate: '2025-05-15T00:00:00',
    dateCreated: '2025-04-20T16:20:00',
  },
  {
    id: '5',
    name: 'Software Upgrade',
    customer: 'Wilson Group',
    value: 25000,
    stage: 'qualification',
    expectedCloseDate: '2025-07-10T00:00:00',
    dateCreated: '2025-05-18T11:10:00',
  },
];

function getStageBadge(stage: Deal['stage']) {
  switch (stage) {
    case 'prospecting':
      return <span className="badge badge-neutral">Prospecting</span>;
    case 'qualification':
      return <span className="badge badge-info">Qualification</span>;
    case 'proposal':
      return <span className="badge badge-primary">Proposal</span>;
    case 'negotiation':
      return <span className="badge badge-warning">Negotiation</span>;
    case 'closed-won':
      return <span className="badge badge-success">Closed Won</span>;
    case 'closed-lost':
      return <span className="badge badge-error">Closed Lost</span>;
    default:
      return null;
  }
}

export default function DealsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDeals = deals.filter((deal) =>
    deal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deal.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Deals</h1>
          <p className="text-base-content/70">Manage your sales pipeline</p>
        </div>
        <Button>
          <FiPlus className="mr-2 h-4 w-4" /> Add Deal
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Deal Pipeline</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <FiSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-base-content/50" />
                <input
                  type="search"
                  placeholder="Search deals..."
                  className="input input-bordered w-full pl-9 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="sm">
                <FiFilter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Deal Name</th>
                  <th>Customer</th>
                  <th>Value</th>
                  <th>Stage</th>
                  <th>Expected Close</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDeals.map((deal) => (
                  <tr key={deal.id}>
                    <td>{deal.name}</td>
                    <td>{deal.customer}</td>
                    <td>{formatCurrency(deal.value)}</td>
                    <td>{getStageBadge(deal.stage)}</td>
                    <td>{formatDate(deal.expectedCloseDate)}</td>
                    <td>{formatDate(deal.dateCreated)}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="xs" title="View Details">
                          <FiEye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="xs" title="Edit">
                          <FiEdit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="xs" title="Delete">
                          <FiTrash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
