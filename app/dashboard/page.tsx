"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Bell,
  ChevronRight,
  CreditCard,
  Eye,
  EyeOff,
  Headphones,
  Home,
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

export default function DashboardPage() {
  const [showBalance, setShowBalance] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="min-h-screen bg-[#f6f8fc] text-slate-900">
      {/* DESKTOP SIDEBAR */}
      <aside className="fixed bottom-0 left-0 top-0 z-40 hidden w-[250px] flex-col border-r border-white/[0.06] bg-[#07111f] lg:flex">
        <div className="flex h-[76px] items-center border-b border-white/[0.06] px-6">
          <Logo />
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-5">
          <div className="space-y-1">
            <NavLink
              href="/dashboard"
              icon={<Home size={18} />}
              text="Dashboard"
              active
            />
          </div>

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

          <div className="space-y-1">
            <NavLink
              href="/support"
              icon={<Headphones size={18} />}
              text="Customer Service"
            />
          </div>
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
        {/* TOP BAR */}
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
              <h1 className="text-sm font-bold text-slate-900">
                Dashboard
              </h1>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Overview of your account
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/wallet"
              className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 transition hover:bg-slate-50 sm:block"
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
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50"
              aria-label="Notifications"
            >
              <Bell size={17} />

              <span className="absolute right-[9px] top-[8px] h-2 w-2 rounded-full border-2 border-white bg-blue-600" />
            </button>

            <Link
              href="/profile"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white transition hover:bg-slate-800"
              aria-label="Account"
            >
              <UserRound size={17} />
            </Link>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="mx-auto max-w-[1450px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* WELCOME */}
          <div className="mb-7">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-slate-500">
                  Welcome back
                </p>

                <h2 className="mt-1 text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                  Kaido 👋
                </h2>

                <p className="mt-2 max-w-xl text-xs leading-5 text-slate-400">
                  Manage your wallet, purchase digital services and
                  monitor your recent account activity.
                </p>
              </div>

              <div className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-[9px] font-bold uppercase tracking-wide text-emerald-600 sm:flex">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Account Active
              </div>
            </div>
          </div>

          {/* WALLET + ACCOUNT */}
          <div className="grid gap-5 xl:grid-cols-[1.4fr_0.6fr]">
            {/* WALLET */}
            <section className="relative overflow-hidden rounded-[28px] bg-[#07111f] p-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] sm:p-7">
              <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-[90px]" />

              <div className="pointer-events-none absolute -bottom-44 left-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Wallet size={15} />
                      Available balance
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <p className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                        {showBalance ? "₦25,000.00" : "••••••••"}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          setShowBalance((current) => !current)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
                        aria-label={
                          showBalance
                            ? "Hide balance"
                            : "Show balance"
                        }
                      >
                        {showBalance ? (
                          <EyeOff size={17} />
                        ) : (
                          <Eye size={17} />
                        )}
                      </button>
                    </div>

                    <p className="mt-2 text-[10px] text-slate-500">
                      Available for purchases and bill payments
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-blue-300">
                    <CreditCard size={21} />
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/wallet"
                    className="flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-4 text-xs font-semibold text-white shadow-lg shadow-blue-950/20 transition hover:bg-blue-500"
                  >
                    <Plus size={16} />
                    Fund Wallet
                  </Link>

                  <Link
                    href="/transactions"
                    className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
                  >
                    <ReceiptText size={15} />
                    Transactions
                  </Link>
                </div>
              </div>
            </section>

            {/* ACCOUNT */}
            <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck size={21} />
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[8px] font-bold uppercase tracking-wider text-emerald-600">
                  Active
                </span>
              </div>

              <h3 className="mt-5 text-base font-bold">
                Account overview
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Your account is active and ready for transactions.
              </p>

              <div className="mt-5 space-y-4 border-t border-slate-100 pt-5">
                <InfoRow label="Account type" value="Personal" />
                <InfoRow label="Account level" value="Standard" />
                <InfoRow label="Currency" value="NGN" />
              </div>

              <Link
                href="/profile"
                className="mt-5 flex h-10 items-center justify-center rounded-xl border border-slate-200 text-[10px] font-bold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                Manage Account
              </Link>
            </section>
          </div>

          {/* QUICK SERVICES */}
          <section className="mt-9">
            <SectionHeading
              title="Quick services"
              description="Purchase your everyday digital services."
            />

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <ServiceCard
                href="/data"
                icon={<Wifi size={21} />}
                title="Buy Data"
                description="Internet bundles"
                iconClass="bg-blue-50 text-blue-600"
              />

              <ServiceCard
                href="/airtime"
                icon={<Smartphone size={21} />}
                title="Airtime"
                description="Mobile recharge"
                iconClass="bg-violet-50 text-violet-600"
              />

              <ServiceCard
                href="/electricity"
                icon={<Zap size={21} />}
                title="Electricity"
                description="Pay power bills"
                iconClass="bg-amber-50 text-amber-600"
              />

              <ServiceCard
                href="/cable"
                icon={<Tv size={21} />}
                title="Cable TV"
                description="TV subscriptions"
                iconClass="bg-rose-50 text-rose-600"
              />
            </div>
          </section>

          {/* ACTIVITY */}
          <div className="mt-9 grid gap-5 xl:grid-cols-[1.4fr_0.6fr]">
            {/* TRANSACTIONS */}
            <section className="overflow-hidden rounded-[26px] border border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
                <div>
                  <h3 className="text-sm font-bold">
                    Recent transactions
                  </h3>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Your latest account activity
                  </p>
                </div>

                <Link
                  href="/transactions"
                  className="flex items-center gap-1 text-[10px] font-bold text-blue-600"
                >
                  View all
                  <ChevronRight size={14} />
                </Link>
              </div>

              <Transaction
                icon={<Plus size={16} />}
                iconClass="bg-emerald-50 text-emerald-600"
                title="Wallet Funding"
                description="Paystack • Today, 10:42 AM"
                amount="+₦10,000"
                amountClass="text-emerald-600"
                status="Successful"
              />

              <Transaction
                icon={<Wifi size={16} />}
                iconClass="bg-blue-50 text-blue-600"
                title="MTN Data"
                description="2GB • 0801 234 5678"
                amount="-₦1,000"
                status="Successful"
              />

              <Transaction
                icon={<Smartphone size={16} />}
                iconClass="bg-violet-50 text-violet-600"
                title="Airtel Airtime"
                description="0902 345 6789"
                amount="-₦500"
                status="Successful"
              />

              <Transaction
                icon={<Tv size={16} />}
                iconClass="bg-rose-50 text-rose-600"
                title="DStv Subscription"
                description="Cable TV"
                amount="-₦4,500"
                status="Pending"
                last
              />
            </section>

            {/* SPENDING */}
            <section className="rounded-[26px] border border-slate-200 bg-white p-6">
              <h3 className="text-sm font-bold">
                Spending overview
              </h3>

              <p className="mt-1 text-[10px] text-slate-400">
                Activity for this month
              </p>

              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <p className="text-[9px] font-bold tracking-wide text-slate-400">
                  TOTAL SPENT
                </p>

                <p className="mt-1 text-2xl font-bold tracking-[-0.03em]">
                  ₦18,450
                </p>
              </div>

              <div className="mt-6 space-y-5">
                <SpendingRow
                  label="Data"
                  value="₦8,200"
                  width="44%"
                />

                <SpendingRow
                  label="Airtime"
                  value="₦4,750"
                  width="26%"
                />

                <SpendingRow
                  label="Bills"
                  value="₦5,500"
                  width="30%"
                />
              </div>
            </section>
          </div>

          {/* CUSTOMER SERVICE */}
          <section className="mt-8 rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Headphones size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    Need assistance?
                  </h3>

                  <p className="mt-1 max-w-xl text-xs leading-5 text-slate-400">
                    Get help with failed transactions, delayed
                    services, wallet funding or your account.
                  </p>
                </div>
              </div>

              <Link
                href="/support"
                className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-xs font-semibold text-white transition hover:bg-slate-800"
              >
                <Headphones size={15} />
                Customer Service
              </Link>
            </div>
          </section>

          <div className="mt-5 flex gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
            <ShieldCheck
              size={16}
              className="mt-0.5 shrink-0 text-blue-600"
            />

            <p className="text-[10px] leading-5 text-slate-500">
              The balances and transactions displayed here are
              demonstration data. Live account information will be
              connected to the backend later.
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
                onClick={() => setMobileMenu(false)}
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
                active
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
          active
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

/* -------------------------------------------------------------------------- */
/* REUSABLE PAGE COMPONENTS                                                   */
/* -------------------------------------------------------------------------- */

function Logo({ dark = false }: { dark?: boolean }) {
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
      className={`flex min-w-[58px] flex-col items-center justify-center gap-1 text-[9px] font-semibold transition ${
        active
          ? "text-blue-600"
          : "text-slate-400 hover:text-slate-600"
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3 className="text-base font-bold">
        {title}
      </h3>

      <p className="mt-1 text-xs text-slate-400">
        {description}
      </p>
    </div>
  );
}

function ServiceCard({
  href,
  icon,
  title,
  description,
  iconClass,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  iconClass: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-[22px] border border-slate-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_35px_rgba(15,23,42,0.06)] sm:p-5"
    >
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${iconClass}`}
      >
        {icon}
      </div>

      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-bold sm:text-sm">
            {title}
          </p>

          <p className="mt-1 text-[9px] leading-4 text-slate-400 sm:text-[10px]">
            {description}
          </p>
        </div>

        <ChevronRight
          size={15}
          className="mt-1 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-blue-500"
        />
      </div>
    </Link>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-slate-400">
        {label}
      </span>

      <span className="text-xs font-semibold text-slate-700">
        {value}
      </span>
    </div>
  );
}

function Transaction({
  icon,
  iconClass,
  title,
  description,
  amount,
  amountClass = "text-slate-900",
  status,
  last = false,
}: {
  icon: React.ReactNode;
  iconClass: string;
  title: string;
  description: string;
  amount: string;
  amountClass?: string;
  status: "Successful" | "Pending";
  last?: boolean;
}) {
  const statusClass =
    status === "Successful"
      ? "bg-emerald-50 text-emerald-600"
      : "bg-amber-50 text-amber-600";

  return (
    <div
      className={`flex items-center gap-3 px-5 py-4 sm:px-6 ${
        last ? "" : "border-b border-slate-100"
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-bold">
          {title}
        </p>

        <p className="mt-1 truncate text-[9px] text-slate-400">
          {description}
        </p>
      </div>

      <div className="shrink-0 text-right">
        <p className={`text-xs font-bold ${amountClass}`}>
          {amount}
        </p>

        <span
          className={`mt-1 inline-flex rounded-full px-2 py-1 text-[8px] font-bold ${statusClass}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

function SpendingRow({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between gap-3">
        <span className="text-xs text-slate-500">
          {label}
        </span>

        <span className="text-xs font-bold">
          {value}
        </span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600"
          style={{ width }}
        />
      </div>
    </div>
  );
}