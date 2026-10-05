"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  Check,
  ChevronRight,
  Copy,
  Headphones,
  Home,
  Menu,
  ReceiptText,
  Search,
  Settings,
  Signal,
  Smartphone,
  Tv,
  UserRound,
  Wallet,
  Wifi,
  X,
  Zap,
} from "lucide-react";

type TransactionStatus =
  | "Successful"
  | "Pending"
  | "Failed";

type TransactionType =
  | "Data"
  | "Airtime"
  | "Cable"
  | "Electricity"
  | "Wallet";

type Transaction = {
  id: number;
  reference: string;
  type: TransactionType;
  title: string;
  description: string;
  provider: string;
  recipient: string;
  amount: number;
  direction: "credit" | "debit";
  status: TransactionStatus;
  date: string;
  token?: string;
};

const transactions: Transaction[] = [
  {
    id: 1,
    reference: "VTU-WAL-8F2K19",
    type: "Wallet",
    title: "Wallet Funding",
    description: "Paystack funding",
    provider: "Paystack",
    recipient: "VTU Wallet",
    amount: 10000,
    direction: "credit",
    status: "Successful",
    date: "Oct 4, 2026 • 10:42 AM",
  },
  {
    id: 2,
    reference: "VTU-DAT-91MD2A",
    type: "Data",
    title: "MTN Data",
    description: "2GB Data Bundle",
    provider: "MTN",
    recipient: "0801 234 5678",
    amount: 1000,
    direction: "debit",
    status: "Successful",
    date: "Oct 4, 2026 • 9:18 AM",
  },
  {
    id: 3,
    reference: "VTU-AIR-71KP4Q",
    type: "Airtime",
    title: "Airtel Airtime",
    description: "Airtime Recharge",
    provider: "Airtel",
    recipient: "0801 234 5678",
    amount: 500,
    direction: "debit",
    status: "Successful",
    date: "Oct 3, 2026 • 6:32 PM",
  },
  {
    id: 4,
    reference: "VTU-CAB-42PX8M",
    type: "Cable",
    title: "DStv Subscription",
    description: "DStv Yanga",
    provider: "DStv",
    recipient: "Smartcard 1234567890",
    amount: 4500,
    direction: "debit",
    status: "Pending",
    date: "Oct 3, 2026 • 1:12 PM",
  },
  {
    id: 5,
    reference: "VTU-ELE-39AB7T",
    type: "Electricity",
    title: "BEDC Electricity",
    description: "Prepaid Electricity",
    provider: "BEDC",
    recipient: "Meter 45781230987",
    amount: 5000,
    direction: "debit",
    status: "Successful",
    date: "Oct 2, 2026 • 7:45 PM",
    token: "0000 0000 0000 0000 0000",
  },
  {
    id: 6,
    reference: "VTU-DAT-63GL2C",
    type: "Data",
    title: "Glo Data",
    description: "5GB Data Bundle",
    provider: "Glo",
    recipient: "0805 678 9012",
    amount: 2000,
    direction: "debit",
    status: "Failed",
    date: "Oct 2, 2026 • 3:14 PM",
  },
  {
    id: 7,
    reference: "VTU-WAL-15TR6N",
    type: "Wallet",
    title: "Wallet Funding",
    description: "Bank Transfer",
    provider: "Bank Transfer",
    recipient: "VTU Wallet",
    amount: 20000,
    direction: "credit",
    status: "Successful",
    date: "Oct 1, 2026 • 11:06 AM",
  },
];

const serviceFilters = [
  "All",
  "Data",
  "Airtime",
  "Cable",
  "Electricity",
  "Wallet",
];

const statusFilters = [
  "All",
  "Successful",
  "Pending",
  "Failed",
];

export default function TransactionsPage() {
  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [search, setSearch] = useState("");

  const [service, setService] =
    useState("All");

  const [status, setStatus] =
    useState("All");

  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const [copied, setCopied] =
    useState("");

  const filteredTransactions = useMemo(() => {
    const query = search
      .trim()
      .toLowerCase();

    return transactions.filter(
      (transaction) => {
        const matchesService =
          service === "All" ||
          transaction.type === service;

        const matchesStatus =
          status === "All" ||
          transaction.status === status;

        const matchesSearch =
          !query ||
          transaction.title
            .toLowerCase()
            .includes(query) ||
          transaction.description
            .toLowerCase()
            .includes(query) ||
          transaction.reference
            .toLowerCase()
            .includes(query) ||
          transaction.provider
            .toLowerCase()
            .includes(query) ||
          transaction.recipient
            .toLowerCase()
            .includes(query);

        return (
          matchesService &&
          matchesStatus &&
          matchesSearch
        );
      }
    );
  }, [search, service, status]);

  async function copyText(
    text: string,
    key: string
  ) {
    try {
      await navigator.clipboard.writeText(
        text
      );

      setCopied(key);

      window.setTimeout(() => {
        setCopied("");
      }, 1500);
    } catch {
      setCopied("");
    }
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
              icon={
                <ReceiptText size={18} />
              }
              text="Transactions"
              active
            />
          </div>

          <NavTitle text="Help" />

          <NavLink
            href="/support"
            icon={<Headphones size={18} />}
            text="Customer Service"
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
              onClick={() =>
                setMobileMenu(true)
              }
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 lg:hidden"
              aria-label="Open navigation"
            >
              <Menu size={19} />
            </button>

            <div className="lg:hidden">
              <Logo dark />
            </div>

            <div className="hidden lg:block">
              <h1 className="text-sm font-bold">
                Transactions
              </h1>

              <p className="mt-0.5 text-[10px] text-slate-400">
                View your transaction history
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

              <p className="mt-0.5 text-xs font-bold">
                ₦25,000.00
              </p>
            </Link>

            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500"
              aria-label="Notifications"
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
          {/* HEADING */}
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
              Activity
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
              Transaction history
            </h2>

            <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-400">
              Track wallet funding, airtime, data,
              cable and electricity transactions
              from one place.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <StatCard
              title="Total Transactions"
              value="47"
              description="All transactions"
              icon={
                <ReceiptText size={18} />
              }
            />

            <StatCard
              title="Wallet Funding"
              value="₦30,000"
              description="Total funded"
              icon={
                <ArrowDownLeft size={18} />
              }
              positive
            />

            <StatCard
              title="Total Spent"
              value="₦18,450"
              description="Service purchases"
              icon={
                <ArrowUpRight size={18} />
              }
            />

            <StatCard
              title="Success Rate"
              value="96.4%"
              description="Completed successfully"
              icon={<Check size={18} />}
              positive
            />
          </div>

          {/* TRANSACTION PANEL */}
          <section className="mt-6 overflow-hidden rounded-[28px] border border-slate-200 bg-white">
            {/* FILTERS */}
            <div className="border-b border-slate-100 p-4 sm:p-6">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div>
                  <h3 className="text-base font-bold">
                    All transactions
                  </h3>

                  <p className="mt-1 text-[9px] text-slate-400">
                    Search and filter your account
                    activity.
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="relative sm:w-[260px]">
                    <Search
                      size={15}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      value={search}
                      onChange={(event) =>
                        setSearch(
                          event.target.value
                        )
                      }
                      placeholder="Search transactions..."
                      className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-[10px] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <select
                    value={service}
                    onChange={(event) =>
                      setService(
                        event.target.value
                      )
                    }
                    className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-[10px] font-semibold text-slate-600 outline-none focus:border-blue-500"
                  >
                    {serviceFilters.map(
                      (item) => (
                        <option
                          key={item}
                          value={item}
                        >
                          {item === "All"
                            ? "All services"
                            : item}
                        </option>
                      )
                    )}
                  </select>

                  <select
                    value={status}
                    onChange={(event) =>
                      setStatus(
                        event.target.value
                      )
                    }
                    className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-[10px] font-semibold text-slate-600 outline-none focus:border-blue-500"
                  >
                    {statusFilters.map(
                      (item) => (
                        <option
                          key={item}
                          value={item}
                        >
                          {item === "All"
                            ? "All statuses"
                            : item}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/70">
                    <TableHead>
                      Transaction
                    </TableHead>

                    <TableHead>
                      Reference
                    </TableHead>

                    <TableHead>
                      Date
                    </TableHead>

                    <TableHead>
                      Amount
                    </TableHead>

                    <TableHead>
                      Status
                    </TableHead>

                    <TableHead />
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredTransactions.map(
                    (transaction) => (
                      <tr
                        key={transaction.id}
                        className="transition hover:bg-slate-50/70"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <TransactionIcon
                              transaction={
                                transaction
                              }
                            />

                            <div>
                              <p className="text-[10px] font-bold text-slate-800">
                                {
                                  transaction.title
                                }
                              </p>

                              <p className="mt-1 text-[8px] text-slate-400">
                                {
                                  transaction.description
                                }
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <p className="font-mono text-[9px] font-semibold text-slate-500">
                            {
                              transaction.reference
                            }
                          </p>
                        </td>

                        <td className="px-6 py-4">
                          <p className="text-[9px] text-slate-500">
                            {transaction.date}
                          </p>
                        </td>

                        <td className="px-6 py-4">
                          <p
                            className={`text-[10px] font-bold ${
                              transaction.direction ===
                              "credit"
                                ? "text-emerald-600"
                                : "text-slate-800"
                            }`}
                          >
                            {transaction.direction ===
                            "credit"
                              ? "+"
                              : "-"}
                            ₦
                            {transaction.amount.toLocaleString()}
                          </p>
                        </td>

                        <td className="px-6 py-4">
                          <StatusBadge
                            status={
                              transaction.status
                            }
                          />
                        </td>

                        <td className="px-6 py-4 text-right">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedTransaction(
                                transaction
                              )
                            }
                            className="inline-flex h-9 items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 text-[9px] font-bold text-slate-500 transition hover:border-blue-200 hover:text-blue-600"
                          >
                            Details
                            <ChevronRight
                              size={12}
                            />
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            {/* MOBILE LIST */}
            <div className="divide-y divide-slate-100 md:hidden">
              {filteredTransactions.map(
                (transaction) => (
                  <button
                    key={transaction.id}
                    type="button"
                    onClick={() =>
                      setSelectedTransaction(
                        transaction
                      )
                    }
                    className="flex w-full items-center gap-3 p-4 text-left transition hover:bg-slate-50"
                  >
                    <TransactionIcon
                      transaction={transaction}
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-[10px] font-bold">
                          {transaction.title}
                        </p>

                        <StatusBadge
                          status={
                            transaction.status
                          }
                          compact
                        />
                      </div>

                      <p className="mt-1 truncate text-[8px] text-slate-400">
                        {transaction.description}
                      </p>

                      <p className="mt-1 truncate text-[8px] text-slate-400">
                        {transaction.date}
                      </p>
                    </div>

                    <div className="shrink-0 text-right">
                      <p
                        className={`text-[10px] font-bold ${
                          transaction.direction ===
                          "credit"
                            ? "text-emerald-600"
                            : "text-slate-800"
                        }`}
                      >
                        {transaction.direction ===
                        "credit"
                          ? "+"
                          : "-"}
                        ₦
                        {transaction.amount.toLocaleString()}
                      </p>

                      <ChevronRight
                        size={14}
                        className="ml-auto mt-2 text-slate-300"
                      />
                    </div>
                  </button>
                )
              )}
            </div>

            {/* EMPTY */}
            {filteredTransactions.length ===
              0 && (
              <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                  <Search size={20} />
                </div>

                <p className="mt-4 text-sm font-bold">
                  No transactions found
                </p>

                <p className="mt-2 max-w-sm text-[10px] leading-5 text-slate-400">
                  Try changing your search or
                  transaction filters.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setService("All");
                    setStatus("All");
                  }}
                  className="mt-4 text-[9px] font-bold text-blue-600"
                >
                  Clear filters
                </button>
              </div>
            )}
          </section>

          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
            <ReceiptText
              size={15}
              className="mt-0.5 shrink-0 text-blue-600"
            />

            <p className="text-[10px] leading-5 text-slate-500">
              The transactions shown here are demo
              records for the interface. Live
              transaction history, references,
              statuses and receipts will come from
              the backend after integration.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSACTION DETAILS MODAL */}
      {selectedTransaction && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/50 p-0 backdrop-blur-sm sm:items-center sm:p-5">
          <button
            type="button"
            onClick={() =>
              setSelectedTransaction(null)
            }
            className="absolute inset-0"
            aria-label="Close details"
          />

          <div className="relative z-10 max-h-[90vh] w-full overflow-y-auto rounded-t-[28px] bg-white shadow-2xl sm:max-w-[500px] sm:rounded-[28px]">
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6">
              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Transaction Details
                </p>

                <h3 className="mt-2 text-lg font-bold">
                  {selectedTransaction.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedTransaction(null)
                }
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500"
              >
                <X size={17} />
              </button>
            </div>

            <div className="p-5 sm:p-6">
              {/* AMOUNT */}
              <div className="rounded-[22px] bg-[#07111f] p-5 text-center text-white">
                <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Transaction Amount
                </p>

                <p className="mt-2 text-3xl font-bold tracking-[-0.04em]">
                  {selectedTransaction.direction ===
                  "credit"
                    ? "+"
                    : "-"}
                  ₦
                  {selectedTransaction.amount.toLocaleString()}
                </p>

                <div className="mt-3 flex justify-center">
                  <StatusBadge
                    status={
                      selectedTransaction.status
                    }
                  />
                </div>
              </div>

              {/* DETAILS */}
              <div className="mt-6 space-y-4">
                <DetailRow
                  label="Service"
                  value={
                    selectedTransaction.type
                  }
                />

                <DetailRow
                  label="Provider"
                  value={
                    selectedTransaction.provider
                  }
                />

                <DetailRow
                  label="Description"
                  value={
                    selectedTransaction.description
                  }
                />

                <DetailRow
                  label="Recipient"
                  value={
                    selectedTransaction.recipient
                  }
                />

                <DetailRow
                  label="Date"
                  value={
                    selectedTransaction.date
                  }
                />

                <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-[9px] text-slate-400">
                      Reference
                    </p>

                    <p className="mt-1 font-mono text-[9px] font-bold text-slate-700">
                      {
                        selectedTransaction.reference
                      }
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      copyText(
                        selectedTransaction.reference,
                        "reference"
                      )
                    }
                    className="flex h-9 items-center gap-2 rounded-xl border border-slate-200 px-3 text-[9px] font-bold text-slate-500"
                  >
                    {copied ===
                    "reference" ? (
                      <Check size={13} />
                    ) : (
                      <Copy size={13} />
                    )}

                    {copied ===
                    "reference"
                      ? "Copied"
                      : "Copy"}
                  </button>
                </div>
              </div>

              {/* ELECTRICITY TOKEN */}
              {selectedTransaction.type ===
                "Electricity" &&
                selectedTransaction.status ===
                  "Successful" &&
                selectedTransaction.token && (
                  <div className="mt-6 rounded-[20px] border border-amber-100 bg-amber-50/70 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-wide text-amber-600">
                          Electricity Token
                        </p>

                        <p className="mt-2 font-mono text-[11px] font-bold tracking-wide text-slate-700">
                          {
                            selectedTransaction.token
                          }
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          copyText(
                            selectedTransaction.token!,
                            "token"
                          )
                        }
                        className="flex h-9 items-center gap-2 rounded-xl border border-amber-200 bg-white px-3 text-[9px] font-bold text-slate-600"
                      >
                        {copied === "token" ? (
                          <Check size={13} />
                        ) : (
                          <Copy size={13} />
                        )}

                        {copied === "token"
                          ? "Copied"
                          : "Copy"}
                      </button>
                    </div>

                    <p className="mt-3 text-[8px] font-medium text-amber-600">
                      Demo token only — not a real
                      electricity token.
                    </p>
                  </div>
                )}

              {/* SUPPORT */}
              <Link
                href="/support"
                className="mt-6 flex h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 text-[10px] font-bold text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
              >
                <Headphones size={15} />
                Report an issue
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE DRAWER */}
      {mobileMenu && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            onClick={() =>
              setMobileMenu(false)
            }
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
          />

          <aside className="relative flex h-full w-[285px] flex-col bg-[#07111f] shadow-2xl">
            <div className="flex h-[76px] items-center justify-between border-b border-white/[0.06] px-5">
              <Logo />

              <button
                type="button"
                onClick={() =>
                  setMobileMenu(false)
                }
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
                onClick={() =>
                  setMobileMenu(false)
                }
              />

              <NavTitle text="Services" />

              <div className="space-y-1">
                <NavLink
                  href="/data"
                  icon={<Wifi size={18} />}
                  text="Buy Data"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                />

                <NavLink
                  href="/airtime"
                  icon={
                    <Smartphone size={18} />
                  }
                  text="Buy Airtime"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                />

                <NavLink
                  href="/cable"
                  icon={<Tv size={18} />}
                  text="Cable TV"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                />

                <NavLink
                  href="/electricity"
                  icon={<Zap size={18} />}
                  text="Electricity"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                />
              </div>

              <NavTitle text="Account" />

              <div className="space-y-1">
                <NavLink
                  href="/wallet"
                  icon={<Wallet size={18} />}
                  text="Wallet"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                />

                <NavLink
                  href="/transactions"
                  icon={
                    <ReceiptText size={18} />
                  }
                  text="Transactions"
                  active
                  onClick={() =>
                    setMobileMenu(false)
                  }
                />
              </div>

              <NavTitle text="Help" />

              <div className="space-y-1">
                <NavLink
                  href="/support"
                  icon={
                    <Headphones size={18} />
                  }
                  text="Customer Service"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                />

                <NavLink
                  href="/settings"
                  icon={<Settings size={18} />}
                  text="Settings"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                />
              </div>
            </nav>

            <div className="border-t border-white/[0.06] p-4">
              <Link
                href="/profile"
                onClick={() =>
                  setMobileMenu(false)
                }
                className="flex items-center gap-3 rounded-2xl bg-white/[0.05] p-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  K
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Kaido
                  </p>

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
          active
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

function Logo({
  dark = false,
}: {
  dark?: boolean;
}) {
  return (
    <Link
      href="/dashboard"
      className="flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-900/20">
        <Signal size={20} />
      </div>

      <div>
        <p
          className={`text-sm font-bold ${
            dark
              ? "text-slate-900"
              : "text-white"
          }`}
        >
          VTU Hub
        </p>

        <p
          className={`text-[8px] font-semibold tracking-[0.16em] ${
            dark
              ? "text-slate-400"
              : "text-slate-500"
          }`}
        >
          DIGITAL SERVICES
        </p>
      </div>
    </Link>
  );
}

function NavTitle({
  text,
}: {
  text: string;
}) {
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
        active
          ? "text-blue-600"
          : "text-slate-400"
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

function StatCard({
  title,
  value,
  description,
  icon,
  positive = false,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  positive?: boolean;
}) {
  return (
    <div className="rounded-[22px] border border-slate-200 bg-white p-4 sm:p-5">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-xl ${
          positive
            ? "bg-emerald-50 text-emerald-600"
            : "bg-blue-50 text-blue-600"
        }`}
      >
        {icon}
      </div>

      <p className="mt-4 text-[9px] font-semibold text-slate-400">
        {title}
      </p>

      <p className="mt-1 text-lg font-bold tracking-[-0.03em] sm:text-xl">
        {value}
      </p>

      <p className="mt-1 text-[8px] text-slate-400">
        {description}
      </p>
    </div>
  );
}

function TableHead({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <th className="px-6 py-3 text-left text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">
      {children}
    </th>
  );
}

function TransactionIcon({
  transaction,
}: {
  transaction: Transaction;
}) {
  const credit =
    transaction.direction === "credit";

  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
        credit
          ? "bg-emerald-50 text-emerald-600"
          : transaction.type ===
              "Electricity"
            ? "bg-amber-50 text-amber-600"
            : "bg-blue-50 text-blue-600"
      }`}
    >
      {credit ? (
        <ArrowDownLeft size={17} />
      ) : transaction.type ===
        "Electricity" ? (
        <Zap size={17} />
      ) : transaction.type ===
        "Cable" ? (
        <Tv size={17} />
      ) : transaction.type ===
        "Airtime" ? (
        <Smartphone size={17} />
      ) : transaction.type === "Data" ? (
        <Wifi size={17} />
      ) : (
        <ArrowUpRight size={17} />
      )}
    </div>
  );
}

function StatusBadge({
  status,
  compact = false,
}: {
  status: TransactionStatus;
  compact?: boolean;
}) {
  const style =
    status === "Successful"
      ? "bg-emerald-50 text-emerald-600"
      : status === "Pending"
        ? "bg-amber-50 text-amber-600"
        : "bg-rose-50 text-rose-600";

  return (
    <span
      className={`inline-flex items-center rounded-full font-bold ${style} ${
        compact
          ? "px-2 py-1 text-[6px]"
          : "px-2.5 py-1.5 text-[8px]"
      }`}
    >
      {status}
    </span>
  );
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <p className="text-[9px] text-slate-400">
        {label}
      </p>

      <p className="max-w-[65%] text-right text-[9px] font-bold text-slate-700">
        {value}
      </p>
    </div>
  );
}