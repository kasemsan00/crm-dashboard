"use client";

import { useState } from 'react';
import { FiPlus, FiSearch, FiFilter, FiEdit2, FiTrash2, FiEye } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { formatDate } from '@/lib/utils';

type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'active' | 'inactive' | 'lead';
  dateAdded: string;
};

const customers: Customer[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    company: 'ABC Corporation',
    status: 'active',
    dateAdded: '2025-04-15T10:30:00',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '(555) 987-6543',
    company: 'XYZ Industries',
    status: 'active',
    dateAdded: '2025-04-18T14:45:00',
  },
  {
    id: '3',
    name: 'Robert Johnson',
    email: 'robert.johnson@example.com',
    phone: '(555) 456-7890',
    company: 'Johnson & Co',
    status: 'inactive',
    dateAdded: '2025-03-22T09:15:00',
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '(555) 789-0123',
    company: 'Davis Enterprises',
    status: 'lead',
    dateAdded: '2025-05-10T16:20:00',
  },
  {
    id: '5',
    name: 'Michael Wilson',
    email: 'michael.wilson@example.com',
    phone: '(555) 234-5678',
    company: 'Wilson Group',
    status: 'active',
    dateAdded: '2025-05-05T11:10:00',
  },
];

function getStatusBadge(status: Customer['status']) {
  switch (status) {
    case 'active':
      return <span className="badge badge-success">Active</span>;
    case 'inactive':
      return <span className="badge badge-error">Inactive</span>;
    case 'lead':
      return <span className="badge badge-warning">Lead</span>;
    default:
      return null;
  }
}

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Customers</h1>
          <p className="text-base-content/70">Manage your customer relationships</p>
        </div>
        <Button>
          <FiPlus className="mr-2 h-4 w-4" /> Add Customer
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Customer List</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <FiSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-base-content/50" />
                <input
                  type="search"
                  placeholder="Search customers..."
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
                  <th>Status</th>
                  <th>Date Added</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.company}</td>
                    <td>{getStatusBadge(customer.status)}</td>
                    <td>{formatDate(customer.dateAdded)}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="xs">
                          <FiEye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="xs">
                          <FiEdit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="xs">
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
