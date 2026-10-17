'use client';

import { useState, useMemo } from 'react';
import {
  Download,
  Search,
  Lock,
  Unlock,
  AlertCircle,
  Phone,
  MessageCircle,
  Calendar,
} from 'lucide-react';
import type { LeadRecord } from '@/types/lead';

interface AdminDashboardClientProps {
  initialLeads: LeadRecord[];
}

export function AdminDashboardClient({ initialLeads }: AdminDashboardClientProps) {
  // Simple passkey state gate
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);

  const [leads, setLeads] = useState<LeadRecord[]>(initialLeads);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isUpdating, setIsUpdating] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === 'gharapna2025') {
      setIsAuthenticated(true);
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  const handleStatusChange = async (leadId: string, newStatus: LeadRecord['status']) => {
    setIsUpdating(leadId);
    try {
      const res = await fetch(`/api/leads/${leadId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
        );
      }
    } catch (err) {
      console.error('Failed to update lead status:', err);
    } finally {
      setIsUpdating(null);
    }
  };

  // Filtered leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesStatus =
        selectedStatus === 'all' || lead.status === selectedStatus;
      const matchesType =
        selectedType === 'all' || lead.enquiryType === selectedType;
      const matchesQuery =
        !searchQuery ||
        lead.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.phone.includes(searchQuery);
      return matchesStatus && matchesType && matchesQuery;
    });
  }, [leads, selectedStatus, selectedType, searchQuery]);

  // Metric counts
  const metrics = useMemo(() => {
    const total = leads.length;
    const newCount = leads.filter((l) => l.status === 'new').length;
    const scheduled = leads.filter((l) => l.status === 'visit-scheduled').length;
    const contacted = leads.filter((l) => l.status === 'contacted').length;
    return { total, new: newCount, scheduled, contacted };
  }, [leads]);

  // Authentication Gate Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-4 font-sans">
        <div className="bg-card border border-border rounded-3xl p-8 max-w-sm w-full space-y-6 text-center shadow-sm">
          <div className="w-12 h-12 rounded-full bg-muted/10 flex items-center justify-center text-foreground mx-auto">
            <Lock className="w-5 h-5 text-coral-start" />
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Operations <span className="font-serif italic font-normal">access</span>
            </h1>
            <p className="text-xs text-muted">
              Internal portal for site visits and inquiries.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <input
                id="passcode"
                type="password"
                placeholder="Enter access key"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl text-sm bg-transparent border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-coral-start transition"
              />
              {passcodeError && (
                <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Invalid passcode. Use <code className="font-mono">gharapna2025</code>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-coral-start to-coral-end hover:opacity-95 text-white transition active:scale-95 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Admin Desk</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 font-sans">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-border">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Lead &amp; <span className="font-serif italic font-normal">Site Visit</span> Management
          </h1>
          <p className="text-xs text-muted mt-1">
            Internal operations dashboard
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/api/export-leads"
            download
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-border text-foreground hover:bg-muted/10 transition"
          >
            <Download className="w-3.5 h-3.5 text-coral-start" />
            <span>Export CSV</span>
          </a>

          <button
            onClick={() => setIsAuthenticated(false)}
            type="button"
            className="px-4 py-2 rounded-full text-xs font-semibold bg-muted/15 text-foreground hover:opacity-80 transition cursor-pointer"
          >
            Lock
          </button>
        </div>
      </div>

      {/* Metrics Row (rounded-3xl containers, tabular numbers) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl border border-border bg-card">
          <span className="text-xs text-muted block">
            Total Enquiries
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-foreground tabular-nums mt-1">
            {metrics.total}
          </div>
        </div>

        <div className="p-5 rounded-3xl border border-border bg-card">
          <span className="text-xs text-muted block">
            New Inquiries
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-foreground tabular-nums mt-1">
            {metrics.new}
          </div>
        </div>

        <div className="p-5 rounded-3xl border border-border bg-card">
          <span className="text-xs text-muted block">
            Visits Booked
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-foreground tabular-nums mt-1">
            {metrics.scheduled}
          </div>
        </div>

        <div className="p-5 rounded-3xl border border-border bg-card">
          <span className="text-xs text-muted block">
            Contacted
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-foreground tabular-nums mt-1">
            {metrics.contacted}
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 py-3 border-y border-border text-xs">
        {/* Status Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {['all', 'new', 'contacted', 'visit-scheduled', 'closed'].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              type="button"
              className={`px-3.5 py-1.5 rounded-full font-medium capitalize transition cursor-pointer ${
                selectedStatus === status
                  ? 'bg-foreground text-background'
                  : 'border border-border text-muted hover:text-foreground'
              }`}
            >
              {status.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Search & Type Select */}
        <div className="flex items-center gap-3">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-1.5 rounded-full text-xs bg-background border border-border text-foreground focus:outline-none cursor-pointer"
          >
            <option value="all">All Types</option>
            <option value="site-visit">Site Visit</option>
            <option value="callback">Callback</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="brochure">Brochure</option>
          </select>

          <div className="relative min-w-[200px]">
            <Search className="w-3.5 h-3.5 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search name or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-full text-xs bg-transparent border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-coral-start"
            />
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="rounded-3xl border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs divide-y divide-border">
            <thead className="bg-muted/5 text-muted font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="px-5 py-3.5">Customer &amp; Contact</th>
                <th className="px-5 py-3.5">Enquiry Detail</th>
                <th className="px-5 py-3.5">Preferences / Schedule</th>
                <th className="px-5 py-3.5">Source &amp; Date</th>
                <th className="px-5 py-3.5">Status Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-12 text-center text-muted">
                    No leads found matching current filter parameters.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="hover:bg-muted/5 transition"
                  >
                    {/* Customer */}
                    <td className="px-5 py-4 align-top">
                      <div className="font-semibold text-sm text-foreground">
                        {lead.fullName}
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-muted">
                        <span>{lead.phone}</span>
                        <a
                          href={`https://wa.me/91${lead.phone.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded hover:text-emerald-500 transition"
                          title="Message on WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                        </a>
                        <a
                          href={`tel:+91${lead.phone}`}
                          className="p-1 rounded hover:text-coral-start transition"
                          title="Direct Call"
                        >
                          <Phone className="w-3.5 h-3.5 text-coral-start" />
                        </a>
                      </div>
                      {lead.email && (
                        <div className="text-[11px] text-muted mt-0.5">{lead.email}</div>
                      )}
                    </td>

                    {/* Enquiry */}
                    <td className="px-5 py-4 align-top">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border border-border text-foreground">
                        {lead.enquiryType}
                      </span>
                      {lead.bhkPreference && (
                        <div className="text-xs text-muted mt-1">
                          Preference: {lead.bhkPreference}
                        </div>
                      )}
                    </td>

                    {/* Preferences & Schedule */}
                    <td className="px-5 py-4 align-top space-y-1">
                      {lead.preferredDate && (
                        <div className="flex items-center gap-1.5 text-xs text-foreground">
                          <Calendar className="w-3.5 h-3.5 text-coral-start" />
                          <span>{lead.preferredDate}</span>
                          {lead.preferredTimeSlot && (
                            <span className="text-muted">
                              ({lead.preferredTimeSlot})
                            </span>
                          )}
                        </div>
                      )}

                      {lead.preferredLocalities && lead.preferredLocalities.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-0.5">
                          {lead.preferredLocalities.map((loc) => (
                            <span
                              key={loc}
                              className="px-2 py-0.5 rounded-full border border-border text-[10px] capitalize text-muted"
                            >
                              {loc}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>

                    {/* Source & Date */}
                    <td className="px-5 py-4 align-top text-muted">
                      <div className="truncate max-w-[160px]" title={lead.sourcePage}>
                        {lead.sourcePage}
                      </div>
                      <div className="text-[10px] text-muted mt-0.5">
                        {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </td>

                    {/* Status Select Action */}
                    <td className="px-5 py-4 align-top">
                      <select
                        value={lead.status}
                        disabled={isUpdating === lead.id}
                        onChange={(e) =>
                          handleStatusChange(lead.id, e.target.value as LeadRecord['status'])
                        }
                        className="px-2.5 py-1 rounded-full text-xs font-semibold capitalize border border-border bg-background text-foreground focus:outline-none cursor-pointer"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="visit-scheduled">Visit Scheduled</option>
                        <option value="closed">Closed</option>
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
