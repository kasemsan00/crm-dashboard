"use client";

import { useState } from 'react';
import { FiPlus, FiSearch, FiFilter, FiEdit2, FiTrash2, FiUserPlus } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { formatDate } from '@/lib/utils';

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  source: 'website' | 'referral' | 'social' | 'event' | 'other';
  status: 'new' | 'contacted' | 'qualified' | 'unqualified';
  dateAdded: string;
};

const leads: Lead[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '(555) 123-7890',
    company: 'Johnson Tech',
    source: 'website',
    status: 'new',
    dateAdded: '2025-05-22T10:30:00',
  },
  {
    id: '2',
    name: 'David Williams',
    email: 'david.williams@example.com',
    phone: '(555) 987-1234',
    company: 'Williams & Associates',
    source: 'referral',
    status: 'contacted',
    dateAdded: '2025-05-21T14:45:00',
  },
  {
    id: '3',
    name: 'Jennifer Brown',
    email: 'jennifer.brown@example.com',
    phone: '(555) 456-7891',
    company: 'Brown Enterprises',
    source: 'social',
    status: 'qualified',
    dateAdded: '2025-05-20T09:15:00',
  },
  {
    id: '4',
    name: 'Michael Davis',
    email: 'michael.davis@example.com',
    phone: '(555) 789-4561',
    company: 'Davis Corp',
    source: 'event',
    status: 'unqualified',
    dateAdded: '2025-05-19T16:20:00',
  },
  {
    id: '5',
    name: 'Lisa Miller',
    email: 'lisa.miller@example.com',
    phone: '(555) 234-5678',
    company: 'Miller Group',
    source: 'website',
    status: 'new',
    dateAdded: '2025-05-18T11:10:00',
  },
];

function getSourceBadge(source: Lead['source']) {
  switch (source) {
    case 'website':
      return <span className="badge badge-info">Website</span>;
    case 'referral':
      return <span className="badge badge-success">Referral</span>;
    case 'social':
      return <span className="badge badge-primary">Social</span>;
    case 'event':
      return <span className="badge badge-secondary">Event</span>;
    case 'other':
      return <span className="badge badge-neutral">Other</span>;
    default:
      return null;
  }
}

function getStatusBadge(status: Lead['status']) {
  switch (status) {
    case 'new':
      return <span className="badge badge-warning">New</span>;
    case 'contacted':
      return <span className="badge badge-info">Contacted</span>;
    case 'qualified':
      return <span className="badge badge-success">Qualified</span>;
    case 'unqualified':
      return <span className="badge badge-error">Unqualified</span>;
    default:
      return null;
  }
}

export default function LeadsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Leads</h1>
          <p className="text-base-content/70">Manage your potential customers</p>
        </div>
        <Button>
          <FiPlus className="mr-2 h-4 w-4" /> Add Lead
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Lead List</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <FiSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-base-content/50" />
                <input
                  type="search"
                  placeholder="Search leads..."
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
                  <th>Name</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>Source</th>
                  <th>Status</th>
                  <th>Date Added</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id}>
                    <td>{lead.name}</td>
                    <td>{lead.email}</td>
                    <td>{lead.company}</td>
                    <td>{getSourceBadge(lead.source)}</td>
                    <td>{getStatusBadge(lead.status)}</td>
                    <td>{formatDate(lead.dateAdded)}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="xs" title="Convert to Customer">
                          <FiUserPlus className="h-4 w-4" />
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
