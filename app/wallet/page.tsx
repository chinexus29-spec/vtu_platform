"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Bell,
  Check,
  Copy,
  CreditCard,
  Headphones,
  Home,
  Info,
  Landmark,
  Menu,
  Plus,
  ReceiptText,
  Settings,
  ShieldCheck,
  Signal,
  Smartphone,
  Tv,
  UserRound,
  Wallet,
  Wifi,
  X,
  Zap,
} from "lucide-react";

type FundingMethod = "bank" | "online";

const quickAmounts = [
  1000,
  2000,
  5000,
  10000,
  20000,
  50000,
];

const activities = [
  {
    id: 1,
    title: "Wallet Funding",
    description: "Paystack",
    amount: 10000,
    type: "credit",
    status: "Successful",
    date: "Oct 4, 10:42 AM",
  },
  {
    id: 2,
    title: "MTN Data",
    description: "2GB Data Bundle",
    amount: 1000,
    type: "debit",
    status: "Successful",
    date: "Oct 4, 9:18 AM",
  },
  {
    id: 3,
    title: "Airtel Airtime",
    description: "0801 234 5678",
    amount: 500,
    type: "debit",
    status: "Successful",
    date: "Oct 3, 6:32 PM",
  },
  {
    id: 4,
    title: "Wallet Funding",
    description: "Bank Transfer",
    amount: 20000,
    type: "credit",
    status: "Successful",
    date: "Oct 2, 1:06 PM",
  },
];

export default function WalletPage() {
  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [fundingMethod, setFundingMethod] =
    useState<FundingMethod>("bank");

  const [amount, setAmount] =
    useState("5000");

  const [copied, setCopied] =
    useState(false);

  const numericAmount = Number(amount) || 0;

  const validAmount =
    numericAmount >= 100 &&
    numericAmount <= 500000;

  function handleAmount(value: string) {
    setAmount(
      value.replace(/\D/g, "").slice(0, 6)
    );
  }

  async function copyAccountNumber() {
    try {
      await navigator.clipboard.writeText(
        "1234567890"
      );

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setCopied(false);
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
              active
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
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
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
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 lg:hidden"
              aria-label="Open navigation"
            >
              <Menu size={19} />
            </button>

            <div className="lg:hidden">
              <Logo dark />
            </div>

            <div className="hidden lg:block">
              <h1 className="text-sm font-bold">
                Wallet
              </h1>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Manage your balance and funding
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 sm:block">
              <p className="text-[8px] font-bold tracking-wide text-slate-400">
                WALLET BALANCE
              </p>

              <p className="mt-0.5 text-xs font-bold">
                ₦25,000.00
              </p>
            </div>

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
              aria-label="Account"
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
              My Wallet
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
              Wallet & funding
            </h2>

            <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-400">
              Fund your account, manage your balance
              and review recent wallet activity.
            </p>
          </div>

          {/* WALLET OVERVIEW */}
          <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
            {/* BALANCE CARD */}
            <section className="relative overflow-hidden rounded-[28px] bg-[#07111f] p-6 text-white sm:p-7">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="absolute -bottom-24 left-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Wallet
                        size={15}
                        className="text-blue-300"
                      />

                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        Available Balance
                      </p>
                    </div>

                    <p className="mt-4 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
                      ₦25,000
                      <span className="text-lg text-slate-500">
                        .00
                      </span>
                    </p>

                    <p className="mt-2 text-[10px] text-slate-400">
                      Available for VTU purchases and
                      bill payments
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.07] text-blue-300">
                    <Banknote size={20} />
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setFundingMethod("bank")
                    }
                    className="flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-[10px] font-bold text-white transition hover:bg-blue-500"
                  >
                    <Plus size={15} />
                    Fund Wallet
                  </button>

                  <Link
                    href="/transactions"
                    className="flex h-11 items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.05] px-5 text-[10px] font-bold text-slate-200 transition hover:bg-white/[0.08]"
                  >
                    <ReceiptText size={15} />
                    Transactions
                  </Link>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/[0.08] pt-5">
                  <WalletStat
                    label="Currency"
                    value="NGN"
                  />

                  <WalletStat
                    label="Status"
                    value="Active"
                  />

                  <WalletStat
                    label="Account"
                    value="Personal"
                  />
                </div>
              </div>
            </section>

            {/* WALLET STATUS */}
            <section className="rounded-[28px] border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Wallet Status
                  </p>

                  <h3 className="mt-2 text-base font-bold">
                    Account overview
                  </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck size={18} />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <StatusRow
                  label="Wallet"
                  value="Active"
                  positive
                />

                <StatusRow
                  label="Account type"
                  value="Personal"
                />

                <StatusRow
                  label="Currency"
                  value="Nigerian Naira"
                />

                <StatusRow
                  label="Funding"
                  value="Enabled"
                  positive
                />
              </div>

              <div className="mt-6 rounded-2xl bg-emerald-50 p-4">
                <div className="flex gap-3">
                  <Check
                    size={15}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />

                  <p className="text-[9px] leading-4 text-emerald-700">
                    Your wallet is active and ready
                    for service purchases.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* FUND WALLET */}
          <section className="mt-6 rounded-[28px] border border-slate-200 bg-white">
            <div className="border-b border-slate-100 p-5 sm:p-6">
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-blue-600">
                Add Money
              </p>

              <h3 className="mt-2 text-lg font-bold">
                Fund your wallet
              </h3>

              <p className="mt-1 text-[10px] text-slate-400">
                Choose how you want to add money to
                your account.
              </p>
            </div>

            <div className="p-5 sm:p-6">
              {/* METHOD TABS */}
              <div className="grid max-w-2xl grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1.5">
                <button
                  type="button"
                  onClick={() =>
                    setFundingMethod("bank")
                  }
                  className={`flex h-11 items-center justify-center gap-2 rounded-xl text-[10px] font-bold transition ${
                    fundingMethod === "bank"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500"
                  }`}
                >
                  <Landmark size={15} />
                  Bank Transfer
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setFundingMethod("online")
                  }
                  className={`flex h-11 items-center justify-center gap-2 rounded-xl text-[10px] font-bold transition ${
                    fundingMethod === "online"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500"
                  }`}
                >
                  <CreditCard size={15} />
                  Card / Online
                </button>
              </div>

              {/* BANK TRANSFER */}
              {fundingMethod === "bank" && (
                <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
                  <div>
                    <div className="max-w-xl">
                      <p className="text-sm font-bold">
                        Transfer to your virtual account
                      </p>

                      <p className="mt-2 text-[10px] leading-5 text-slate-400">
                        Send money from your banking
                        app to the account below.
                        Confirmed transfers will be
                        used to fund your VTU wallet.
                      </p>
                    </div>

                    <div className="mt-5 max-w-xl overflow-hidden rounded-[22px] border border-slate-200">
                      <div className="bg-slate-50 p-5">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                              <Landmark size={18} />
                            </div>

                            <div>
                              <p className="text-[8px] font-bold uppercase tracking-wide text-slate-400">
                                Bank
                              </p>

                              <p className="mt-1 text-xs font-bold">
                                9 Payment Service Bank
                              </p>
                            </div>
                          </div>

                          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[8px] font-bold text-emerald-700">
                            Active
                          </span>
                        </div>
                      </div>

                      <div className="p-5">
                        <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">
                          Account Number
                        </p>

                        <div className="mt-2 flex items-center justify-between gap-4">
                          <p className="text-2xl font-bold tracking-[0.06em]">
                            1234567890
                          </p>

                          <button
                            type="button"
                            onClick={copyAccountNumber}
                            className="flex h-9 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-[9px] font-bold text-slate-500 transition hover:bg-slate-50"
                          >
                            {copied ? (
                              <Check size={13} />
                            ) : (
                              <Copy size={13} />
                            )}

                            {copied
                              ? "Copied"
                              : "Copy"}
                          </button>
                        </div>

                        <div className="my-4 border-t border-slate-100" />

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <p className="text-[8px] font-bold uppercase text-slate-400">
                              Account Name
                            </p>

                            <p className="mt-1 text-[10px] font-bold">
                              KAIDO / VTU HUB
                            </p>
                          </div>

                          <div>
                            <p className="text-[8px] font-bold uppercase text-slate-400">
                              Account Type
                            </p>

                            <p className="mt-1 text-[10px] font-bold">
                              Virtual Account
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TRANSFER INSTRUCTIONS */}
                  <div className="rounded-[22px] bg-[#f8fafc] p-5">
                    <p className="text-xs font-bold">
                      How it works
                    </p>

                    <div className="mt-5 space-y-5">
                      <Instruction
                        number="1"
                        title="Copy account number"
                        text="Copy your personal virtual account number."
                      />

                      <Instruction
                        number="2"
                        title="Make a bank transfer"
                        text="Transfer from your bank or mobile banking app."
                      />

                      <Instruction
                        number="3"
                        title="Payment is confirmed"
                        text="The payment provider verifies the transfer."
                      />

                      <Instruction
                        number="4"
                        title="Wallet is credited"
                        text="Your balance updates after successful confirmation."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ONLINE FUNDING */}
              {fundingMethod === "online" && (
                <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_.8fr]">
                  <div className="max-w-2xl">
                    <p className="text-sm font-bold">
                      Enter funding amount
                    </p>

                    <p className="mt-2 text-[10px] leading-5 text-slate-400">
                      Choose an amount and continue to
                      the secure payment gateway.
                    </p>

                    <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                      Quick amounts
                    </p>

                    <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
                      {quickAmounts.map(
                        (value) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() =>
                              setAmount(
                                String(value)
                              )
                            }
                            className={`h-11 rounded-xl border text-[10px] font-bold transition ${
                              numericAmount === value
                                ? "border-blue-500 bg-blue-50 text-blue-600 ring-2 ring-blue-500/10"
                                : "border-slate-200 text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            ₦
                            {value.toLocaleString()}
                          </button>
                        )
                      )}
                    </div>

                    <div className="mt-5">
                      <label
                        htmlFor="fundAmount"
                        className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500"
                      >
                        Custom amount
                      </label>

                      <div className="relative mt-2">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                          ₦
                        </span>

                        <input
                          id="fundAmount"
                          type="text"
                          inputMode="numeric"
                          value={amount}
                          onChange={(event) =>
                            handleAmount(
                              event.target.value
                            )
                          }
                          className="h-[52px] w-full rounded-2xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-bold outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                      </div>

                      <div className="mt-2 flex justify-between text-[8px] text-slate-400">
                        <span>Minimum ₦100</span>
                        <span>Maximum ₦500,000</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={!validAmount}
                      className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 text-xs font-bold text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
                    >
                      Continue with ₦
                      {numericAmount.toLocaleString()}

                      <ArrowRight size={15} />
                    </button>
                  </div>

                  {/* GATEWAYS */}
                  <div className="rounded-[22px] border border-slate-200 p-5">
                    <p className="text-xs font-bold">
                      Payment options
                    </p>

                    <p className="mt-1 text-[9px] leading-4 text-slate-400">
                      Available gateways will be
                      connected during backend
                      integration.
                    </p>

                    <div className="mt-5 space-y-3">
                      <PaymentOption
                        name="Paystack"
                        description="Card & online payment"
                      />

                      <PaymentOption
                        name="Payvessel"
                        description="Bank transfer & virtual account"
                      />

                      <PaymentOption
                        name="PaymentPoint"
                        description="Automated payment collection"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* ACTIVITY */}
          <section className="mt-6 rounded-[28px] border border-slate-200 bg-white">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 p-5 sm:p-6">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Wallet Activity
                </p>

                <h3 className="mt-2 text-lg font-bold">
                  Recent transactions
                </h3>
              </div>

              <Link
                href="/transactions"
                className="flex items-center gap-1 text-[9px] font-bold text-blue-600"
              >
                View all
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {activities.map((activity) => (
                <ActivityRow
                  key={activity.id}
                  activity={activity}
                />
              ))}
            </div>
          </section>

          {/* SECURITY NOTICE */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
            <ShieldCheck
              size={15}
              className="mt-0.5 shrink-0 text-blue-600"
            />

            <p className="text-[10px] leading-5 text-slate-500">
              Wallet balances should never be credited
              manually from screenshots or payment
              claims. In the live system, every
              funding transaction will be verified
              directly with the payment provider
              before the wallet balance is updated.
            </p>
          </div>
        </div>
      </section>

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
                onClick={() =>
                  setMobileMenu(false)
                }
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-slate-400"
                aria-label="Close navigation"
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
                  active
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
          active
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
      className={`flex min-w-[58px] flex-col items-center justify-center gap-1 text-[9px] font-semibold transition ${
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

function WalletStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[8px] font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-[10px] font-bold text-slate-200">
        {value}
      </p>
    </div>
  );
}

function StatusRow({
  label,
  value,
  positive = false,
}: {
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-[10px] text-slate-400">
        {label}
      </p>

      <p
        className={`text-[10px] font-bold ${
          positive
            ? "text-emerald-600"
            : "text-slate-700"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function Instruction({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-[9px] font-bold text-white">
        {number}
      </div>

      <div>
        <p className="text-[10px] font-bold">
          {title}
        </p>

        <p className="mt-1 text-[9px] leading-4 text-slate-400">
          {text}
        </p>
      </div>
    </div>
  );
}

function PaymentOption({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
        <CreditCard size={16} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold">
          {name}
        </p>

        <p className="mt-0.5 truncate text-[8px] text-slate-400">
          {description}
        </p>
      </div>

      <span className="rounded-full bg-slate-100 px-2 py-1 text-[7px] font-bold uppercase text-slate-500">
        Soon
      </span>
    </div>
  );
}

function ActivityRow({
  activity,
}: {
  activity: {
    id: number;
    title: string;
    description: string;
    amount: number;
    type: string;
    status: string;
    date: string;
  };
}) {
  const credit =
    activity.type === "credit";

  return (
    <div className="flex items-center gap-3 p-4 sm:px-6">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          credit
            ? "bg-emerald-50 text-emerald-600"
            : "bg-blue-50 text-blue-600"
        }`}
      >
        {credit ? (
          <ArrowDownLeft size={17} />
        ) : (
          <ArrowUpRight size={17} />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[10px] font-bold sm:text-xs">
          {activity.title}
        </p>

        <p className="mt-1 truncate text-[8px] text-slate-400">
          {activity.description} •{" "}
          {activity.date}
        </p>
      </div>

      <div className="shrink-0 text-right">
        <p
          className={`text-[10px] font-bold sm:text-xs ${
            credit
              ? "text-emerald-600"
              : "text-slate-800"
          }`}
        >
          {credit ? "+" : "-"}₦
          {activity.amount.toLocaleString()}
        </p>

        <p className="mt-1 text-[8px] font-medium text-emerald-600">
          {activity.status}
        </p>
      </div>
    </div>
  );
}