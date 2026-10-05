"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Bell,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Headphones,
  Home,
  Mail,
  Menu,
  MessageCircle,
  Plus,
  ReceiptText,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Signal,
  Smartphone,
  TicketCheck,
  Tv,
  UserRound,
  Wallet,
  Wifi,
  X,
  Zap,
} from "lucide-react";

type TicketStatus = "Open" | "Resolved" | "In Review";

type Ticket = {
  id: number;
  reference: string;
  subject: string;
  category: string;
  status: TicketStatus;
  date: string;
};

const tickets: Ticket[] = [
  {
    id: 1,
    reference: "SUP-48291",
    subject: "Data bundle not received",
    category: "Data Purchase",
    status: "Resolved",
    date: "Oct 2, 2026",
  },
  {
    id: 2,
    reference: "SUP-73614",
    subject: "DStv subscription pending",
    category: "Cable TV",
    status: "In Review",
    date: "Oct 4, 2026",
  },
];

const recentTransactions = [
  {
    value: "VTU-DAT-91MD2A",
    label: "MTN Data • ₦1,000 • Successful",
  },
  {
    value: "VTU-AIR-71KP4Q",
    label: "Airtel Airtime • ₦500 • Successful",
  },
  {
    value: "VTU-CAB-42PX8M",
    label: "DStv Subscription • ₦4,500 • Pending",
  },
  {
    value: "VTU-ELE-39AB7T",
    label: "BEDC Electricity • ₦5,000 • Successful",
  },
];

const faqs = [
  {
    question: "What should I do if my data is not received?",
    answer:
      "First confirm that the phone number and network were correct. If the transaction remains successful but the bundle has not arrived, submit a transaction complaint with the transaction reference so Customer Service can investigate it.",
  },
  {
    question: "What happens if a transaction fails?",
    answer:
      "A failed transaction should not permanently deduct your money. When the backend is connected, failed or reversed transactions will be reconciled automatically and any applicable refund will return to your wallet.",
  },
  {
    question: "My electricity payment succeeded but I cannot find my token.",
    answer:
      "Open the transaction from your transaction history first. Successful prepaid electricity transactions will display their token there. If the token is unavailable, submit a support ticket using the transaction reference.",
  },
  {
    question: "How long does wallet funding take?",
    answer:
      "Automated wallet funding is intended to reflect after the payment provider confirms the payment. A live wallet should never be credited only from a screenshot or unverified payment claim.",
  },
];

export default function SupportPage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [ticketModal, setTicketModal] = useState(false);

  const [category, setCategory] = useState("Transaction Issue");
  const [issue, setIssue] = useState("Data not received");
  const [transaction, setTransaction] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [faqSearch, setFaqSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const filteredFaqs = useMemo(() => {
    const query = faqSearch.trim().toLowerCase();

    if (!query) return faqs;

    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );
  }, [faqSearch]);

  const canSubmit =
    category.trim().length > 0 &&
    subject.trim().length >= 4 &&
    message.trim().length >= 10;

  function openTicketForm() {
    setSubmitted(false);
    setTicketModal(true);
  }

  function closeTicketForm() {
    setTicketModal(false);
    setSubmitted(false);
  }

  function submitTicket() {
    if (!canSubmit) return;

    setSubmitted(true);

    window.setTimeout(() => {
      setTicketModal(false);
      setSubmitted(false);
      setCategory("Transaction Issue");
      setIssue("Data not received");
      setTransaction("");
      setSubject("");
      setMessage("");
    }, 1200);
  }

  return (
    <main className="min-h-screen bg-[#f6f8fc] text-slate-900">
      {/* DESKTOP SIDEBAR */}
      <aside className="fixed bottom-0 left-0 top-0 z-40 hidden w-[250px] flex-col border-r border-white/[0.06] bg-[#07111f] lg:flex">
        <div className="flex h-[76px] items-center border-b border-white/[0.06] px-6">
          <Logo />
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-5">
          <NavLink
            href="/dashboard"
            icon={<Home size={18} />}
            text="Dashboard"
          />

          <NavTitle text="Services" />

          <div className="space-y-1">
            <NavLink
              href="/data"
              icon={<Wifi size={18} />}
              text="Buy Data"
            />

            <NavLink
              href="/airtime"
              icon={<Smartphone size={18} />}
              text="Buy Airtime"
            />

            <NavLink
              href="/cable"
              icon={<Tv size={18} />}
              text="Cable TV"
            />

            <NavLink
              href="/electricity"
              icon={<Zap size={18} />}
              text="Electricity"
            />
          </div>

          <NavTitle text="Account" />

          <div className="space-y-1">
            <NavLink
              href="/wallet"
              icon={<Wallet size={18} />}
              text="Wallet"
            />

            <NavLink
              href="/transactions"
              icon={<ReceiptText size={18} />}
              text="Transactions"
            />
          </div>

          <NavTitle text="Help" />

          <NavLink
            href="/support"
            icon={<Headphones size={18} />}
            text="Customer Service"
            active
          />
        </nav>

        <div className="border-t border-white/[0.06] p-4">
          <NavLink
            href="/settings"
            icon={<Settings size={18} />}
            text="Settings"
          />

          <Link
            href="/profile"
            className="mt-3 flex items-center gap-3 rounded-2xl bg-white/[0.05] p-3 transition hover:bg-white/[0.08]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              K
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                Kaido
              </p>

              <p className="truncate text-[10px] text-slate-500">
                Personal Account
              </p>
            </div>
          </Link>
        </div>
      </aside>

      {/* MAIN */}
      <section className="min-h-screen lg:ml-[250px]">
        {/* TOPBAR */}
        <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenu(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 lg:hidden"
              aria-label="Open navigation"
            >
              <Menu size={19} />
            </button>

            <div className="lg:hidden">
              <Logo dark />
            </div>

            <div className="hidden lg:block">
              <h1 className="text-sm font-bold">Customer Service</h1>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Support, complaints and assistance
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/wallet"
              className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 sm:block"
            >
              <p className="text-[8px] font-bold tracking-wide text-slate-400">
                WALLET BALANCE
              </p>

              <p className="mt-0.5 text-xs font-bold">₦25,000.00</p>
            </Link>

            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500"
            >
              <Bell size={17} />

              <span className="absolute right-[9px] top-[8px] h-2 w-2 rounded-full border-2 border-white bg-blue-600" />
            </button>

            <Link
              href="/profile"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white"
            >
              <UserRound size={17} />
            </Link>
          </div>
        </header>

        {/* CONTENT */}
        <div className="mx-auto max-w-[1450px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* HERO */}
          <section className="relative overflow-hidden rounded-[30px] bg-[#07111f] px-6 py-8 text-white sm:px-8 lg:px-10 lg:py-10">
            <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-28 left-1/3 h-60 w-60 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-blue-300">
                  <Headphones size={15} />

                  <p className="text-[9px] font-bold uppercase tracking-[0.16em]">
                    Customer Service
                  </p>
                </div>

                <h2 className="mt-4 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                  How can we help you?
                </h2>

                <p className="mt-3 max-w-xl text-[10px] leading-5 text-slate-400">
                  Get help with data, airtime, electricity, cable subscriptions,
                  wallet funding or any transaction on your account.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={openTicketForm}
                    className="flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-[10px] font-bold text-white transition hover:bg-blue-500"
                  >
                    <Plus size={15} />
                    Create Support Ticket
                  </button>

                  <Link
                    href="/transactions"
                    className="flex h-11 items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.05] px-5 text-[10px] font-bold text-slate-200 transition hover:bg-white/[0.08]"
                  >
                    <ReceiptText size={15} />
                    View Transactions
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:min-w-[340px]">
                <HeroStat value="2" label="Support Tickets" />
                <HeroStat value="1" label="Resolved" />
                <HeroStat value="1" label="In Review" />
                <HeroStat value="24/7" label="Ticket Access" />
              </div>
            </div>
          </section>

          {/* CONTACT OPTIONS */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <ContactCard
              icon={<TicketCheck size={19} />}
              title="Support Ticket"
              description="Best for transaction complaints and account issues."
              action="Create ticket"
              onClick={openTicketForm}
            />

            <ContactCard
              icon={<MessageCircle size={19} />}
              title="WhatsApp"
              description="Chat with Customer Service for quick assistance."
              action="Coming soon"
              disabled
            />

            <ContactCard
              icon={<Mail size={19} />}
              title="Email Support"
              description="Send detailed questions to our support team."
              action="Coming soon"
              disabled
            />
          </div>

          <div className="mt-6 grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
            {/* LEFT */}
            <div className="space-y-6">
              {/* TICKETS */}
              <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 p-5 sm:p-6">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-blue-600">
                      My Requests
                    </p>

                    <h3 className="mt-2 text-base font-bold">
                      Support tickets
                    </h3>

                    <p className="mt-1 text-[9px] text-slate-400">
                      Track complaints and support requests.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={openTicketForm}
                    className="flex h-10 items-center gap-2 rounded-xl bg-blue-600 px-4 text-[9px] font-bold text-white"
                  >
                    <Plus size={14} />
                    New Ticket
                  </button>
                </div>

                <div className="divide-y divide-slate-100">
                  {tickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="flex items-center gap-3 p-4 sm:px-6 sm:py-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <TicketCheck size={17} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="truncate text-[10px] font-bold sm:text-xs">
                            {ticket.subject}
                          </p>

                          <TicketStatus status={ticket.status} />
                        </div>

                        <p className="mt-1 text-[8px] text-slate-400">
                          {ticket.reference} • {ticket.category} • {ticket.date}
                        </p>
                      </div>

                      <button
                        type="button"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition hover:text-blue-600"
                      >
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
                <div className="border-b border-slate-100 p-5 sm:p-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-blue-600">
                    Help Centre
                  </p>

                  <h3 className="mt-2 text-base font-bold">
                    Frequently asked questions
                  </h3>

                  <div className="relative mt-5">
                    <Search
                      size={15}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      value={faqSearch}
                      onChange={(event) => setFaqSearch(event.target.value)}
                      placeholder="Search help articles..."
                      className="h-[48px] w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-[10px] outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                <div className="divide-y divide-slate-100">
                  {filteredFaqs.map((faq, index) => {
                    const open = openFaq === index;

                    return (
                      <div key={faq.question}>
                        <button
                          type="button"
                          onClick={() => setOpenFaq(open ? null : index)}
                          className="flex w-full items-center justify-between gap-4 p-5 text-left sm:px-6"
                        >
                          <p className="text-[10px] font-bold text-slate-700">
                            {faq.question}
                          </p>

                          <ChevronDown
                            size={15}
                            className={`shrink-0 text-slate-400 transition ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {open && (
                          <div className="px-5 pb-5 sm:px-6">
                            <p className="max-w-3xl text-[9px] leading-5 text-slate-500">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {filteredFaqs.length === 0 && (
                    <div className="p-8 text-center">
                      <p className="text-[10px] font-bold">
                        No matching help article
                      </p>

                      <p className="mt-1 text-[9px] text-slate-400">
                        Try another search or create a support ticket.
                      </p>
                    </div>
                  )}
                </div>
              </section>
            </div>

            {/* RIGHT */}
            <aside className="space-y-5">
              {/* QUICK REPORT */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                  <ReceiptText size={17} />
                </div>

                <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.14em] text-rose-600">
                  Transaction Problem
                </p>

                <h3 className="mt-2 text-base font-bold">
                  Something went wrong?
                </h3>

                <p className="mt-2 text-[9px] leading-5 text-slate-400">
                  Report a data, airtime, cable, electricity or wallet
                  transaction directly to Customer Service.
                </p>

                <button
                  type="button"
                  onClick={openTicketForm}
                  className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 text-[9px] font-bold text-white transition hover:bg-slate-800"
                >
                  Report Transaction
                  <ChevronRight size={13} />
                </button>
              </section>

              {/* COMMON ISSUES */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Common Issues
                </p>

                <h3 className="mt-2 text-base font-bold">
                  What can we help with?
                </h3>

                <div className="mt-5 space-y-3">
                  <Issue text="Data not received" />
                  <Issue text="Airtime not received" />
                  <Issue text="Electricity token missing" />
                  <Issue text="Cable subscription not activated" />
                  <Issue text="Wallet funding not reflected" />
                  <Issue text="Failed transaction not refunded" />
                </div>
              </section>

              {/* SAFETY */}
              <section className="rounded-[26px] bg-[#07111f] p-5 text-white sm:p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <ShieldCheck size={18} />
                </div>

                <h3 className="mt-5 text-sm font-bold">
                  Protect your account
                </h3>

                <p className="mt-2 text-[9px] leading-5 text-slate-400">
                  Customer Service should never ask for your account password,
                  card PIN or one-time banking password.
                </p>
              </section>
            </aside>
          </div>

          {/* DEVELOPMENT NOTE */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
            <Headphones
              size={15}
              className="mt-0.5 shrink-0 text-blue-600"
            />

            <p className="text-[10px] leading-5 text-slate-500">
              This Customer Service page currently uses demonstration tickets.
              When the backend is connected, customers will be able to submit
              real complaints, attach transaction references, receive support
              replies and track ticket status from their account.
            </p>
          </div>
        </div>
      </section>

      {/* CREATE TICKET MODAL */}
      {ticketModal && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/50 backdrop-blur-sm sm:items-center sm:p-5">
          <button
            type="button"
            onClick={closeTicketForm}
            className="absolute inset-0"
            aria-label="Close ticket form"
          />

          <section className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-[28px] bg-white shadow-2xl sm:max-w-[580px] sm:rounded-[28px]">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white p-5 sm:p-6">
              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Customer Service
                </p>

                <h3 className="mt-2 text-lg font-bold">
                  Create support ticket
                </h3>
              </div>

              <button
                type="button"
                onClick={closeTicketForm}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500"
              >
                <X size={17} />
              </button>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center px-6 py-14 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={26} />
                </div>

                <h4 className="mt-5 text-lg font-bold">
                  Ticket submitted
                </h4>

                <p className="mt-2 max-w-sm text-[10px] leading-5 text-slate-400">
                  Your support request has been created successfully.
                </p>
              </div>
            ) : (
              <div className="p-5 sm:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <SelectField
                    label="Category"
                    value={category}
                    onChange={setCategory}
                    options={[
                      "Transaction Issue",
                      "Wallet & Funding",
                      "Account",
                      "Technical Issue",
                      "Other",
                    ]}
                  />

                  <SelectField
                    label="Issue"
                    value={issue}
                    onChange={setIssue}
                    options={[
                      "Data not received",
                      "Airtime not received",
                      "Electricity token missing",
                      "Cable not activated",
                      "Wallet funding not reflected",
                      "Failed transaction not refunded",
                      "Other",
                    ]}
                  />
                </div>

                <div className="mt-4">
                  <label className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    Related transaction
                  </label>

                  <select
                    value={transaction}
                    onChange={(event) => setTransaction(event.target.value)}
                    className="mt-2 h-[52px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-[10px] font-medium text-slate-600 outline-none focus:border-blue-500 focus:bg-white"
                  >
                    <option value="">No transaction selected</option>

                    {recentTransactions.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-4">
                  <label className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    Subject
                  </label>

                  <input
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    placeholder="Briefly describe the problem"
                    className="mt-2 h-[52px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-[10px] outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div className="mt-4">
                  <label className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    Message
                  </label>

                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Explain what happened and include any useful details..."
                    rows={5}
                    className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-[10px] leading-5 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                  <p className="mt-2 text-right text-[8px] text-slate-400">
                    {message.length} characters
                  </p>
                </div>

                <div className="mt-5 rounded-2xl bg-blue-50 p-4">
                  <div className="flex gap-3">
                    <ShieldCheck
                      size={15}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <p className="text-[9px] leading-4 text-blue-700">
                      Never include your password, bank PIN or OTP in a support
                      request.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={!canSubmit}
                  onClick={submitTicket}
                  className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 text-[10px] font-bold text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
                >
                  <Send size={14} />
                  Submit Ticket
                </button>
              </div>
            )}
          </section>
        </div>
      )}

      {/* MOBILE DRAWER */}
      {mobileMenu && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenu(false)}
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
            aria-label="Close navigation"
          />

          <aside className="relative flex h-full w-[285px] flex-col bg-[#07111f] shadow-2xl">
            <div className="flex h-[76px] items-center justify-between border-b border-white/[0.06] px-5">
              <Logo />

              <button
                type="button"
                onClick={() => setMobileMenu(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-slate-400"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4">
              <NavLink
                href="/dashboard"
                icon={<Home size={18} />}
                text="Dashboard"
                onClick={() => setMobileMenu(false)}
              />

              <NavTitle text="Services" />

              <div className="space-y-1">
                <NavLink
                  href="/data"
                  icon={<Wifi size={18} />}
                  text="Buy Data"
                  onClick={() => setMobileMenu(false)}
                />

                <NavLink
                  href="/airtime"
                  icon={<Smartphone size={18} />}
                  text="Buy Airtime"
                  onClick={() => setMobileMenu(false)}
                />

                <NavLink
                  href="/cable"
                  icon={<Tv size={18} />}
                  text="Cable TV"
                  onClick={() => setMobileMenu(false)}
                />

                <NavLink
                  href="/electricity"
                  icon={<Zap size={18} />}
                  text="Electricity"
                  onClick={() => setMobileMenu(false)}
                />
              </div>

              <NavTitle text="Account" />

              <div className="space-y-1">
                <NavLink
                  href="/wallet"
                  icon={<Wallet size={18} />}
                  text="Wallet"
                  onClick={() => setMobileMenu(false)}
                />

                <NavLink
                  href="/transactions"
                  icon={<ReceiptText size={18} />}
                  text="Transactions"
                  onClick={() => setMobileMenu(false)}
                />
              </div>

              <NavTitle text="Help" />

              <div className="space-y-1">
                <NavLink
                  href="/support"
                  icon={<Headphones size={18} />}
                  text="Customer Service"
                  active
                  onClick={() => setMobileMenu(false)}
                />

                <NavLink
                  href="/settings"
                  icon={<Settings size={18} />}
                  text="Settings"
                  onClick={() => setMobileMenu(false)}
                />
              </div>
            </nav>

            <div className="border-t border-white/[0.06] p-4">
              <Link
                href="/profile"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 rounded-2xl bg-white/[0.05] p-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  K
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">Kaido</p>

                  <p className="text-[10px] text-slate-500">
                    Personal Account
                  </p>
                </div>
              </Link>
            </div>
          </aside>
        </div>
      )}

      {/* MOBILE BOTTOM NAV */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex h-[70px] items-center justify-around border-t border-slate-200 bg-white/95 px-1 backdrop-blur-xl lg:hidden">
        <MobileNav
          href="/dashboard"
          icon={<Home size={19} />}
          text="Home"
        />

        <MobileNav
          href="/wallet"
          icon={<Wallet size={19} />}
          text="Wallet"
        />

        <MobileNav
          href="/transactions"
          icon={<ReceiptText size={19} />}
          text="Transactions"
        />

        <MobileNav
          href="/profile"
          icon={<UserRound size={19} />}
          text="Account"
        />

        <MobileNav
          href="/settings"
          icon={<Settings size={19} />}
          text="Settings"
        />
      </nav>

      <div className="h-[70px] lg:hidden" />
    </main>
  );
}

/* COMPONENTS */

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/dashboard" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-900/20">
        <Signal size={20} />
      </div>

      <div>
        <p
          className={`text-sm font-bold ${
            dark ? "text-slate-900" : "text-white"
          }`}
        >
          VTU Hub
        </p>

        <p
          className={`text-[8px] font-semibold tracking-[0.16em] ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          DIGITAL SERVICES
        </p>
      </div>
    </Link>
  );
}

function NavTitle({ text }: { text: string }) {
  return (
    <p className="mb-2 mt-6 px-4 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-600">
      {text}
    </p>
  );
}

function NavLink({
  href,
  icon,
  text,
  active = false,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
        active
          ? "bg-blue-600 text-white shadow-lg shadow-blue-950/20"
          : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
      }`}
    >
      {icon}
      {text}
    </Link>
  );
}

function MobileNav({
  href,
  icon,
  text,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex min-w-[58px] flex-col items-center justify-center gap-1 text-[9px] font-semibold ${
        active ? "text-blue-600" : "text-slate-400"
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

function HeroStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[18px] border border-white/[0.08] bg-white/[0.05] p-4">
      <p className="text-lg font-bold">{value}</p>

      <p className="mt-1 text-[8px] font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  description,
  action,
  onClick,
  disabled = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <p className="mt-4 text-sm font-bold">{title}</p>

      <p className="mt-2 min-h-[36px] text-[9px] leading-4 text-slate-400">
        {description}
      </p>

      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`mt-4 flex items-center gap-1 text-[9px] font-bold ${
          disabled ? "cursor-default text-slate-400" : "text-blue-600"
        }`}
      >
        {action}

        {!disabled && <ChevronRight size={12} />}
      </button>
    </div>
  );
}

function TicketStatus({ status }: { status: TicketStatus }) {
  const style =
    status === "Resolved"
      ? "bg-emerald-50 text-emerald-600"
      : status === "In Review"
        ? "bg-amber-50 text-amber-600"
        : "bg-blue-50 text-blue-600";

  return (
    <span
      className={`rounded-full px-2 py-1 text-[7px] font-bold ${style}`}
    >
      {status}
    </span>
  );
}

function Issue({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
        <Clock3 size={11} />
      </div>

      <p className="text-[9px] font-medium text-slate-600">{text}</p>
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-[52px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-[10px] font-medium text-slate-600 outline-none focus:border-blue-500 focus:bg-white"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}