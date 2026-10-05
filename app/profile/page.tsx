"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Bell,
  Check,
  ChevronRight,
  Edit3,
  Headphones,
  Home,
  LockKeyhole,
  Mail,
  Menu,
  Phone,
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

export default function ProfilePage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState("Kaido");
  const [email, setEmail] = useState("kaido@example.com");
  const [phone, setPhone] = useState("0801 234 5678");

  const [draftName, setDraftName] = useState(name);
  const [draftEmail, setDraftEmail] = useState(email);
  const [draftPhone, setDraftPhone] = useState(phone);

  function startEditing() {
    setDraftName(name);
    setDraftEmail(email);
    setDraftPhone(phone);
    setEditing(true);
  }

  function cancelEditing() {
    setEditing(false);
  }

  function saveProfile() {
    if (!draftName.trim() || !draftEmail.trim() || !draftPhone.trim()) return;

    setName(draftName.trim());
    setEmail(draftEmail.trim());
    setPhone(draftPhone.trim());
    setEditing(false);
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
            className="mt-3 flex items-center gap-3 rounded-2xl bg-blue-600 p-3 shadow-lg shadow-blue-950/20"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-white">
              K
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {name}
              </p>

              <p className="truncate text-[10px] text-blue-100">
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
              <h1 className="text-sm font-bold">Account</h1>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Manage your profile and account
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

              <p className="mt-0.5 text-xs font-bold">₦25,000.00</p>
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
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white"
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
              My Account
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
              Account profile
            </h2>

            <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-400">
              Manage your personal information, account status and security
              settings.
            </p>
          </div>

          {/* PROFILE HERO */}
          <section className="relative overflow-hidden rounded-[28px] bg-[#07111f] p-6 text-white sm:p-8">
            <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-gradient-to-br from-blue-500 to-blue-700 text-xl font-bold shadow-xl shadow-blue-950/30 sm:h-20 sm:w-20 sm:text-2xl">
                  {name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold sm:text-2xl">{name}</h3>

                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[8px] font-bold text-emerald-300">
                      <Check size={10} />
                      ACTIVE
                    </span>
                  </div>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Personal Account
                  </p>

                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[9px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Mail size={12} />
                      {email}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Phone size={12} />
                      {phone}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={startEditing}
                className="flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 text-[10px] font-bold text-slate-900 transition hover:bg-slate-100"
              >
                <Edit3 size={14} />
                Edit Profile
              </button>
            </div>

            <div className="relative mt-7 grid grid-cols-2 gap-3 border-t border-white/[0.08] pt-5 sm:grid-cols-4">
              <HeroStat label="Account Type" value="Personal" />
              <HeroStat label="Currency" value="NGN" />
              <HeroStat label="Wallet" value="Active" />
              <HeroStat label="Account Level" value="Standard" />
            </div>
          </section>

          {/* BODY GRID */}
          <div className="mt-6 grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
            <div className="space-y-6">
              {/* PERSONAL DETAILS */}
              <section className="rounded-[28px] border border-slate-200 bg-white">
                <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-blue-600">
                      Profile
                    </p>

                    <h3 className="mt-2 text-base font-bold">
                      Personal information
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={startEditing}
                    className="flex h-9 items-center gap-2 rounded-xl border border-slate-200 px-3 text-[9px] font-bold text-slate-500 transition hover:border-blue-200 hover:text-blue-600"
                  >
                    <Edit3 size={13} />
                    Edit
                  </button>
                </div>

                <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
                  <InformationBox
                    icon={<UserRound size={16} />}
                    label="Full Name"
                    value={name}
                  />

                  <InformationBox
                    icon={<Mail size={16} />}
                    label="Email Address"
                    value={email}
                  />

                  <InformationBox
                    icon={<Phone size={16} />}
                    label="Phone Number"
                    value={phone}
                  />

                  <InformationBox
                    icon={<Wallet size={16} />}
                    label="Account Type"
                    value="Personal Account"
                  />
                </div>
              </section>

              {/* ACCOUNT STATUS */}
              <section className="rounded-[28px] border border-slate-200 bg-white p-5 sm:p-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-blue-600">
                    Account Status
                  </p>

                  <h3 className="mt-2 text-base font-bold">
                    Account overview
                  </h3>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <StatusCard
                    title="Account"
                    value="Active"
                    description="Your account can make transactions."
                    positive
                  />

                  <StatusCard
                    title="Wallet"
                    value="Enabled"
                    description="Wallet funding and payments are available."
                    positive
                  />

                  <StatusCard
                    title="Email"
                    value="Verified"
                    description="Your email address is confirmed."
                    positive
                  />

                  <StatusCard
                    title="Account Level"
                    value="Standard"
                    description="Current customer account level."
                  />
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN */}
            <aside className="space-y-5">
              {/* VERIFICATION */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-blue-600">
                      Verification
                    </p>

                    <h3 className="mt-2 text-base font-bold">
                      Account verification
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <ShieldCheck size={18} />
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-emerald-50/70 p-4">
                  <div className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <Check size={13} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold text-emerald-800">
                        Basic verification complete
                      </p>

                      <p className="mt-1 text-[9px] leading-4 text-emerald-700/70">
                        Your basic contact details have been verified.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <VerificationRow
                    label="Email address"
                    status="Verified"
                    complete
                  />

                  <VerificationRow
                    label="Phone number"
                    status="Verified"
                    complete
                  />

                  <VerificationRow
                    label="Identity verification"
                    status="Not required yet"
                  />
                </div>
              </section>

              {/* SECURITY */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <LockKeyhole size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-bold">Security</p>

                    <p className="mt-1 text-[9px] text-slate-400">
                      Protect your VTU account.
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <AccountLink
                    href="/settings"
                    title="Password & security"
                    description="Manage password and security options"
                  />

                  <AccountLink
                    href="/settings"
                    title="Notifications"
                    description="Control account alerts"
                  />

                  <AccountLink
                    href="/transactions"
                    title="Transaction history"
                    description="Review account activity"
                  />
                </div>
              </section>

              {/* SUPPORT */}
              <Link
                href="/support"
                className="flex items-center gap-3 rounded-[24px] bg-[#07111f] p-5 text-white transition hover:bg-[#0b192b]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600">
                  <Headphones size={17} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold">Need account help?</p>

                  <p className="mt-1 text-[9px] text-slate-400">
                    Contact Customer Service
                  </p>
                </div>

                <ChevronRight size={16} className="text-slate-500" />
              </Link>
            </aside>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
            <ShieldCheck
              size={15}
              className="mt-0.5 shrink-0 text-blue-600"
            />

            <p className="text-[10px] leading-5 text-slate-500">
              Profile information on this page is currently demonstration data.
              When authentication and the database are connected, account
              details will be loaded securely for the signed-in customer.
            </p>
          </div>
        </div>
      </section>

      {/* EDIT PROFILE MODAL */}
      {editing && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/50 backdrop-blur-sm sm:items-center sm:p-5">
          <button
            type="button"
            onClick={cancelEditing}
            className="absolute inset-0"
            aria-label="Close edit profile"
          />

          <section className="relative z-10 w-full rounded-t-[28px] bg-white shadow-2xl sm:max-w-[500px] sm:rounded-[28px]">
            <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6">
              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Account
                </p>

                <h3 className="mt-2 text-lg font-bold">Edit profile</h3>
              </div>

              <button
                type="button"
                onClick={cancelEditing}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500"
              >
                <X size={17} />
              </button>
            </div>

            <div className="p-5 sm:p-6">
              <div className="space-y-4">
                <ProfileInput
                  label="Full name"
                  value={draftName}
                  onChange={setDraftName}
                  icon={<UserRound size={16} />}
                />

                <ProfileInput
                  label="Email address"
                  value={draftEmail}
                  onChange={setDraftEmail}
                  icon={<Mail size={16} />}
                  type="email"
                />

                <ProfileInput
                  label="Phone number"
                  value={draftPhone}
                  onChange={setDraftPhone}
                  icon={<Phone size={16} />}
                  type="tel"
                />
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={cancelEditing}
                  className="h-12 flex-1 rounded-2xl border border-slate-200 text-[10px] font-bold text-slate-600"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={saveProfile}
                  className="h-12 flex-1 rounded-2xl bg-blue-600 text-[10px] font-bold text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-500"
                >
                  Save Changes
                </button>
              </div>
            </div>
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
                className="flex items-center gap-3 rounded-2xl bg-blue-600 p-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-white">
                  K
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">{name}</p>

                  <p className="text-[10px] text-blue-100">
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
          active
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

      <p className="mt-1 text-[10px] font-bold text-slate-200">{value}</p>
    </div>
  );
}

function InformationBox({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[18px] border border-slate-100 bg-slate-50/70 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[8px] font-bold uppercase tracking-wide text-slate-400">
          {label}
        </p>

        <p className="mt-1 truncate text-[10px] font-bold text-slate-700">
          {value}
        </p>
      </div>
    </div>
  );
}

function StatusCard({
  title,
  value,
  description,
  positive = false,
}: {
  title: string;
  value: string;
  description: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-[20px] border border-slate-200 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[9px] font-semibold text-slate-400">{title}</p>

        {positive && (
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <Check size={11} />
          </div>
        )}
      </div>

      <p
        className={`mt-2 text-sm font-bold ${
          positive ? "text-emerald-600" : "text-slate-800"
        }`}
      >
        {value}
      </p>

      <p className="mt-1 text-[8px] leading-4 text-slate-400">
        {description}
      </p>
    </div>
  );
}

function VerificationRow({
  label,
  status,
  complete = false,
}: {
  label: string;
  status: string;
  complete?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-[9px] text-slate-500">{label}</p>

      <div className="flex items-center gap-1.5">
        {complete && (
          <Check size={11} className="text-emerald-600" />
        )}

        <p
          className={`text-[8px] font-bold ${
            complete ? "text-emerald-600" : "text-slate-400"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}

function AccountLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-slate-50"
    >
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold">{title}</p>

        <p className="mt-1 truncate text-[8px] text-slate-400">
          {description}
        </p>
      </div>

      <ChevronRight size={14} className="text-slate-300" />
    </Link>
  );
}

function ProfileInput({
  label,
  value,
  onChange,
  icon,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon: React.ReactNode;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </label>

      <div className="relative mt-2">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>

        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-[52px] w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-[11px] font-medium outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
        />
      </div>
    </div>
  );
}