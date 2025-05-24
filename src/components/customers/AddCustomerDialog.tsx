"use client";

import { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiBriefcase, FiMapPin, FiPlus } from 'react-icons/fi';
import { Button } from '../ui/Button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/Dialog';

export function AddCustomerDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    status: 'active' as 'active' | 'inactive' | 'lead',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      address: '',
      status: 'active',
    });
    // Close the dialog after submission
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button>
          <FiPlus className="mr-2 h-4 w-4" /> Add Customer
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Customer</DialogTitle>
          <DialogDescription>
            Fill in the details below to add a new customer to your CRM.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Full Name</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FiUser className="h-5 w-5 text-base-content/50" />
              </span>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full pl-10"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FiMail className="h-5 w-5 text-base-content/50" />
              </span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                className="input input-bordered w-full pl-10"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="phone">
              <span className="label-text">Phone</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FiPhone className="h-5 w-5 text-base-content/50" />
              </span>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="input input-bordered w-full pl-10"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="company">
              <span className="label-text">Company</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FiBriefcase className="h-5 w-5 text-base-content/50" />
              </span>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Acme Inc."
                className="input input-bordered w-full pl-10"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="address">
              <span className="label-text">Address</span>
            </label>
            <div className="relative">
              <span className="absolute top-3 left-3">
                <FiMapPin className="h-5 w-5 text-base-content/50" />
              </span>
              <textarea
                id="address"
                name="address"
                placeholder="123 Main St, City, Country"
                className="textarea textarea-bordered w-full pl-10 min-h-[100px]"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="status">
              <span className="label-text">Status</span>
            </label>
            <select 
              id="status"
              name="status"
              className="select select-bordered w-full"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="lead">Lead</option>
            </select>
          </div>

          <DialogFooter className="mt-6">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              Add Customer
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
