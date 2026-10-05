"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Bell,
  Check,
  Headphones,
  Home,
  Info,
  Menu,
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

type Network = "MTN" | "Airtel" | "Glo" | "9mobile";

const networks: Network[] = [
  "MTN",
  "Airtel",
  "Glo",
  "9mobile",
];

const quickAmounts = [
  100,
  200,
  500,
  1000,
  2000,
  5000,
];

export default function AirtimePage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [network, setNetwork] =
    useState<Network>("MTN");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("500");

  const numericAmount = Number(amount) || 0;

  const cleanPhone = phone.replace(/\D/g, "");

  const validPhone =
    cleanPhone.length === 11 &&
    cleanPhone.startsWith("0");

  const validAmount =
    numericAmount >= 50 &&
    numericAmount <= 50000;

  const canContinue =
    validPhone && validAmount;

  function handlePhoneChange(value: string) {
    setPhone(
      value.replace(/[^\d]/g, "").slice(0, 11)
    );
  }

  function handleAmountChange(value: string) {
    setAmount(
      value.replace(/[^\d]/g, "").slice(0, 5)
    );
  }

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
              active
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
                Buy Airtime
              </h1>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Recharge any supported mobile number
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
          {/* HEADING */}
          <section className="mb-7">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
                  Airtime Services
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                  Recharge airtime
                </h2>

                <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-400">
                  Select a mobile network, enter the
                  recipient&apos;s phone number and choose
                  how much airtime you want to send.
                </p>
              </div>

              <div className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-[9px] font-bold uppercase tracking-wide text-emerald-600 sm:flex">
                <ShieldCheck size={13} />
                Secure Purchase
              </div>
            </div>
          </section>

          <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
            {/* FORM */}
            <div className="space-y-6">
              {/* NETWORK */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <StepHeading
                  number="01"
                  title="Select network"
                  description="Choose the recipient's mobile network."
                />

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {networks.map((item) => {
                    const selected =
                      network === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          setNetwork(item)
                        }
                        className={`relative flex min-h-[110px] flex-col items-center justify-center rounded-[20px] border p-4 transition ${
                          selected
                            ? "border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/10"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        {selected && (
                          <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                            <Check size={12} />
                          </span>
                        )}

                        <NetworkLogo
                          network={item}
                        />

                        <p className="mt-3 text-xs font-bold text-slate-800">
                          {item}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* PHONE NUMBER */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <StepHeading
                  number="02"
                  title="Recipient number"
                  description="Enter the phone number you want to recharge."
                />

                <div className="mt-5 max-w-xl">
                  <label
                    htmlFor="phone"
                    className="text-[10px] font-bold uppercase tracking-wide text-slate-500"
                  >
                    Phone number
                  </label>

                  <div className="relative mt-2">
                    <Smartphone
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      value={phone}
                      onChange={(event) =>
                        handlePhoneChange(
                          event.target.value
                        )
                      }
                      placeholder="08012345678"
                      className="h-[52px] w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  {phone.length > 0 &&
                    !validPhone && (
                      <p className="mt-2 text-[9px] font-medium text-rose-500">
                        Enter a valid 11-digit Nigerian
                        phone number.
                      </p>
                    )}

                  <div className="mt-3 flex items-start gap-2">
                    <Info
                      size={13}
                      className="mt-0.5 shrink-0 text-slate-400"
                    />

                    <p className="text-[10px] leading-4 text-slate-400">
                      Check the number carefully before
                      submitting your purchase.
                    </p>
                  </div>
                </div>
              </section>

              {/* AMOUNT */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <StepHeading
                  number="03"
                  title="Enter amount"
                  description="Choose a quick amount or enter a custom value."
                />

                <div className="mt-5">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Quick amounts
                  </p>

                  <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
                    {quickAmounts.map(
                      (quickAmount) => {
                        const selected =
                          numericAmount ===
                          quickAmount;

                        return (
                          <button
                            key={quickAmount}
                            type="button"
                            onClick={() =>
                              setAmount(
                                String(
                                  quickAmount
                                )
                              )
                            }
                            className={`h-11 rounded-xl border text-xs font-bold transition ${
                              selected
                                ? "border-blue-500 bg-blue-50 text-blue-600 ring-2 ring-blue-500/10"
                                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            ₦
                            {quickAmount.toLocaleString()}
                          </button>
                        );
                      }
                    )}
                  </div>

                  <div className="mt-5 max-w-xl">
                    <label
                      htmlFor="amount"
                      className="text-[10px] font-bold uppercase tracking-wide text-slate-500"
                    >
                      Custom amount
                    </label>

                    <div className="relative mt-2">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                        ₦
                      </span>

                      <input
                        id="amount"
                        type="text"
                        inputMode="numeric"
                        value={amount}
                        onChange={(event) =>
                          handleAmountChange(
                            event.target.value
                          )
                        }
                        placeholder="500"
                        className="h-[52px] w-full rounded-2xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-bold outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <div className="mt-2 flex items-center justify-between gap-3">
                      <p className="text-[9px] text-slate-400">
                        Minimum ₦50
                      </p>

                      <p className="text-[9px] text-slate-400">
                        Maximum ₦50,000
                      </p>
                    </div>

                    {amount.length > 0 &&
                      !validAmount && (
                        <p className="mt-2 text-[9px] font-medium text-rose-500">
                          Enter an amount between ₦50
                          and ₦50,000.
                        </p>
                      )}
                  </div>
                </div>
              </section>
            </div>

            {/* SUMMARY */}
            <aside className="xl:sticky xl:top-[96px]">
              <section className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 p-5 sm:p-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-blue-600">
                    Order Summary
                  </p>

                  <h3 className="mt-2 text-lg font-bold">
                    Review recharge
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-slate-400">
                    Confirm the details before
                    submitting your purchase.
                  </p>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                    <NetworkLogo
                      network={network}
                      small
                    />

                    <div>
                      <p className="text-[9px] text-slate-400">
                        Mobile network
                      </p>

                      <p className="mt-0.5 text-xs font-bold">
                        {network}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-4">
                    <SummaryRow
                      label="Service"
                      value="Airtime Recharge"
                    />

                    <SummaryRow
                      label="Recipient"
                      value={
                        phone ||
                        "Not entered"
                      }
                    />

                    <SummaryRow
                      label="Payment method"
                      value="Wallet"
                    />
                  </div>

                  <div className="my-5 border-t border-dashed border-slate-200" />

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] text-slate-400">
                        Total
                      </p>

                      <p className="mt-1 text-2xl font-bold tracking-[-0.04em]">
                        ₦
                        {numericAmount.toLocaleString()}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[9px] text-slate-400">
                        Wallet
                      </p>

                      <p className="mt-1 text-xs font-bold text-emerald-600">
                        ₦25,000.00
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    disabled={!canContinue}
                    className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 text-xs font-bold text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
                  >
                    Buy Airtime
                    <ArrowRight size={16} />
                  </button>

                  {!canContinue && (
                    <p className="mt-3 text-center text-[9px] text-slate-400">
                      Complete the recipient and
                      amount details to continue.
                    </p>
                  )}

                  <div className="mt-5 flex items-start gap-2 rounded-xl bg-blue-50/70 p-3">
                    <ShieldCheck
                      size={14}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <p className="text-[9px] leading-4 text-slate-500">
                      Your wallet will be charged
                      only when the airtime purchase
                      is submitted for processing.
                    </p>
                  </div>
                </div>
              </section>

              {/* DELIVERY */}
              <section className="mt-4 rounded-[22px] border border-slate-200 bg-white p-5">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Zap size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-bold">
                      Instant recharge
                    </p>

                    <p className="mt-1 text-[9px] leading-4 text-slate-400">
                      Successful airtime orders are
                      designed to be processed
                      automatically after transaction
                      confirmation.
                    </p>
                  </div>
                </div>
              </section>

              {/* HELP */}
              <Link
                href="/support"
                className="mt-4 flex items-center justify-between rounded-[22px] border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:bg-blue-50/30"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Headphones size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-bold">
                      Need help?
                    </p>

                    <p className="mt-0.5 text-[9px] text-slate-400">
                      Contact Customer Service
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={15}
                  className="text-slate-300"
                />
              </Link>
            </aside>
          </div>

          {/* DEVELOPMENT NOTICE */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
            <Info
              size={15}
              className="mt-0.5 shrink-0 text-blue-600"
            />

            <p className="text-[10px] leading-5 text-slate-500">
              This page currently demonstrates the
              airtime purchase interface. Network
              vending, wallet deduction and transaction
              confirmation will be connected to the
              backend and VTU provider later.
            </p>
          </div>
        </div>
      </section>

      {/* MOBILE DRAWER */}
      {mobileMenu && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            onClick={() =>
              setMobileMenu(false)
            }
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
                  active
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
/* PAGE COMPONENTS                                                            */
/* -------------------------------------------------------------------------- */

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
          : "text-slate-400 hover:text-slate-600"
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

function StepHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-[9px] font-bold text-white">
        {number}
      </div>

      <div>
        <h3 className="text-sm font-bold">
          {title}
        </h3>

        <p className="mt-1 text-[10px] leading-4 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}

function NetworkLogo({
  network,
  small = false,
}: {
  network: Network;
  small?: boolean;
}) {
  const style =
    network === "MTN"
      ? "bg-[#ffcb05] text-black"
      : network === "Airtel"
        ? "bg-[#e60000] text-white"
        : network === "Glo"
          ? "bg-[#169b45] text-white"
          : "bg-[#006b54] text-white";

  const text =
    network === "9mobile"
      ? "9"
      : network.charAt(0);

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-black ${style} ${
        small
          ? "h-10 w-10 text-xs"
          : "h-12 w-12 text-sm"
      }`}
    >
      {text}
    </div>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-[10px] text-slate-400">
        {label}
      </span>

      <span className="max-w-[180px] truncate text-right text-[10px] font-bold text-slate-700">
        {value}
      </span>
    </div>
  );
}