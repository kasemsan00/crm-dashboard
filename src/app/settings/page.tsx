"use client";

import { useState } from 'react';
import { FiSave } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function SettingsPage() {
  const [generalSettings, setGeneralSettings] = useState({
    companyName: 'Your Company',
    email: 'contact@yourcompany.com',
    phone: '(555) 123-4567',
    address: '123 Business St, City, State, 12345',
    website: 'https://yourcompany.com',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    leadAlerts: true,
    dealUpdates: true,
    taskReminders: true,
    weeklyReports: true,
  });

  const [themeSettings, setThemeSettings] = useState({
    theme: 'light',
  });

  const handleGeneralSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setGeneralSettings({
      ...generalSettings,
      [name]: value,
    });
  };

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotificationSettings({
      ...notificationSettings,
      [name]: checked,
    });
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setThemeSettings({
      ...themeSettings,
      theme: value,
    });
    
    // Apply the theme to the document
    document.documentElement.setAttribute('data-theme', value);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-base-content/70">Manage your CRM preferences</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Company Name</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  className="input input-bordered w-full"
                  value={generalSettings.companyName}
                  onChange={handleGeneralSettingsChange}
                />
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  value={generalSettings.email}
                  onChange={handleGeneralSettingsChange}
                />
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  className="input input-bordered w-full"
                  value={generalSettings.phone}
                  onChange={handleGeneralSettingsChange}
                />
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  name="address"
                  className="textarea textarea-bordered w-full"
                  value={generalSettings.address}
                  onChange={handleGeneralSettingsChange}
                />
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Website</span>
                </label>
                <input
                  type="url"
                  name="website"
                  className="input input-bordered w-full"
                  value={generalSettings.website}
                  onChange={handleGeneralSettingsChange}
                />
              </div>
              
              <Button className="w-full">
                <FiSave className="mr-2 h-4 w-4" /> Save Changes
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-3">
                    <input
                      type="checkbox"
                      name="emailNotifications"
                      className="checkbox"
                      checked={notificationSettings.emailNotifications}
                      onChange={handleNotificationChange}
                    />
                    <span className="label-text">Email Notifications</span>
                  </label>
                </div>
                
                <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-3">
                    <input
                      type="checkbox"
                      name="leadAlerts"
                      className="checkbox"
                      checked={notificationSettings.leadAlerts}
                      onChange={handleNotificationChange}
                    />
                    <span className="label-text">New Lead Alerts</span>
                  </label>
                </div>
                
                <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-3">
                    <input
                      type="checkbox"
                      name="dealUpdates"
                      className="checkbox"
                      checked={notificationSettings.dealUpdates}
                      onChange={handleNotificationChange}
                    />
                    <span className="label-text">Deal Updates</span>
                  </label>
                </div>
                
                <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-3">
                    <input
                      type="checkbox"
                      name="taskReminders"
                      className="checkbox"
                      checked={notificationSettings.taskReminders}
                      onChange={handleNotificationChange}
                    />
                    <span className="label-text">Task Reminders</span>
                  </label>
                </div>
                
                <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-3">
                    <input
                      type="checkbox"
                      name="weeklyReports"
                      className="checkbox"
                      checked={notificationSettings.weeklyReports}
                      onChange={handleNotificationChange}
                    />
                    <span className="label-text">Weekly Reports</span>
                  </label>
                </div>
                
                <Button className="w-full">
                  <FiSave className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Theme Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Theme</span>
                  </label>
                  <select 
                    className="select select-bordered w-full" 
                    value={themeSettings.theme}
                    onChange={handleThemeChange}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="corporate">Corporate</option>
                  </select>
                </div>
                
                <Button className="w-full">
                  <FiSave className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
