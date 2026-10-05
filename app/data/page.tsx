"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bell,
  Check,
  ChevronDown,
  Clock3,
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

type DataPlan = {
  id: number;
  network: Network;
  size: string;
  validity: string;
  price: number;
  popular?: boolean;
};

const plans: DataPlan[] = [
  {
    id: 1,
    network: "MTN",
    size: "500MB",
    validity: "30 Days",
    price: 250,
  },
  {
    id: 2,
    network: "MTN",
    size: "1GB",
    validity: "30 Days",
    price: 500,
    popular: true,
  },
  {
    id: 3,
    network: "MTN",
    size: "2GB",
    validity: "30 Days",
    price: 950,
  },
  {
    id: 4,
    network: "MTN",
    size: "3GB",
    validity: "30 Days",
    price: 1350,
  },
  {
    id: 5,
    network: "MTN",
    size: "5GB",
    validity: "30 Days",
    price: 2100,
  },
  {
    id: 6,
    network: "MTN",
    size: "10GB",
    validity: "30 Days",
    price: 4000,
  },

  {
    id: 7,
    network: "Airtel",
    size: "1GB",
    validity: "30 Days",
    price: 500,
    popular: true,
  },
  {
    id: 8,
    network: "Airtel",
    size: "2GB",
    validity: "30 Days",
    price: 1000,
  },
  {
    id: 9,
    network: "Airtel",
    size: "5GB",
    validity: "30 Days",
    price: 2200,
  },
  {
    id: 10,
    network: "Airtel",
    size: "10GB",
    validity: "30 Days",
    price: 4200,
  },

  {
    id: 11,
    network: "Glo",
    size: "1GB",
    validity: "30 Days",
    price: 450,
    popular: true,
  },
  {
    id: 12,
    network: "Glo",
    size: "2GB",
    validity: "30 Days",
    price: 850,
  },
  {
    id: 13,
    network: "Glo",
    size: "5GB",
    validity: "30 Days",
    price: 2000,
  },
  {
    id: 14,
    network: "Glo",
    size: "10GB",
    validity: "30 Days",
    price: 3900,
  },

  {
    id: 15,
    network: "9mobile",
    size: "1GB",
    validity: "30 Days",
    price: 500,
    popular: true,
  },
  {
    id: 16,
    network: "9mobile",
    size: "2GB",
    validity: "30 Days",
    price: 950,
  },
  {
    id: 17,
    network: "9mobile",
    size: "5GB",
    validity: "30 Days",
    price: 2200,
  },
];

const networks: Network[] = [
  "MTN",
  "Airtel",
  "Glo",
  "9mobile",
];

export default function DataPage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [network, setNetwork] =
    useState<Network>("MTN");
  const [selectedPlanId, setSelectedPlanId] =
    useState(2);
  const [phone, setPhone] = useState("");

  const networkPlans = useMemo(
    () =>
      plans.filter(
        (plan) => plan.network === network
      ),
    [network]
  );

  const selectedPlan =
    plans.find(
      (plan) => plan.id === selectedPlanId
    ) ?? networkPlans[0];

  function selectNetwork(value: Network) {
    setNetwork(value);

    const firstPlan = plans.find(
      (plan) => plan.network === value
    );

    if (firstPlan) {
      setSelectedPlanId(firstPlan.id);
    }
  }

  const validPhone =
    phone.replace(/\D/g, "").length >= 10;

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
              active
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

      {/* MAIN CONTENT */}
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
              <h1 className="text-sm font-bold">
                Buy Data
              </h1>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Purchase mobile data bundles
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

        {/* PAGE */}
        <div className="mx-auto max-w-[1450px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* TITLE */}
          <section className="mb-7">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
                  Data Services
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                  Buy mobile data
                </h2>

                <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-400">
                  Choose your network and data plan,
                  enter the recipient&apos;s phone number
                  and confirm your purchase.
                </p>
              </div>

              <div className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-[9px] font-bold uppercase tracking-wide text-emerald-600 sm:flex">
                <ShieldCheck size={13} />
                Secure Purchase
              </div>
            </div>
          </section>

          <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
            {/* LEFT */}
            <div className="space-y-6">
              {/* NETWORK */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <StepHeading
                  number="01"
                  title="Select network"
                  description="Choose the recipient's mobile network."
                />

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {networks.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        selectNetwork(item)
                      }
                      className={`relative flex min-h-[110px] flex-col items-center justify-center rounded-[20px] border p-4 transition ${
                        network === item
                          ? "border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/10"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {network === item && (
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
                  ))}
                </div>
              </section>

              {/* PLAN */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <StepHeading
                  number="02"
                  title="Choose a data plan"
                  description={`Available ${network} bundles.`}
                />

                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {networkPlans.map((plan) => {
                    const selected =
                      selectedPlan?.id === plan.id;

                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() =>
                          setSelectedPlanId(plan.id)
                        }
                        className={`relative overflow-hidden rounded-[20px] border p-4 text-left transition ${
                          selected
                            ? "border-blue-500 bg-blue-50/50 ring-2 ring-blue-500/10"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                        }`}
                      >
                        {plan.popular && (
                          <span className="absolute right-0 top-0 rounded-bl-xl bg-slate-900 px-2.5 py-1.5 text-[7px] font-bold uppercase tracking-wide text-white">
                            Popular
                          </span>
                        )}

                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-lg font-bold tracking-[-0.03em]">
                              {plan.size}
                            </p>

                            <div className="mt-1 flex items-center gap-1 text-[9px] text-slate-400">
                              <Clock3 size={11} />
                              {plan.validity}
                            </div>
                          </div>

                          {selected && (
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                              <Check size={13} />
                            </div>
                          )}
                        </div>

                        <div className="mt-5 border-t border-slate-100 pt-3">
                          <p className="text-[9px] text-slate-400">
                            Price
                          </p>

                          <p className="mt-0.5 text-sm font-bold text-blue-600">
                            ₦
                            {plan.price.toLocaleString()}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* PHONE */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <StepHeading
                  number="03"
                  title="Recipient details"
                  description="Enter the phone number that should receive the data."
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
                      value={phone}
                      onChange={(event) =>
                        setPhone(
                          event.target.value
                            .replace(/[^\d]/g, "")
                            .slice(0, 11)
                        )
                      }
                      placeholder="0801 234 5678"
                      className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div className="mt-3 flex items-start gap-2 text-[10px] leading-4 text-slate-400">
                    <Info
                      size={13}
                      className="mt-0.5 shrink-0"
                    />

                    <p>
                      Confirm the number carefully
                      before making payment. Data
                      purchases cannot normally be
                      reversed after successful
                      delivery.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* ORDER SUMMARY */}
            <aside className="xl:sticky xl:top-[96px]">
              <section className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 p-5 sm:p-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-blue-600">
                    Order Summary
                  </p>

                  <h3 className="mt-2 text-lg font-bold">
                    Review purchase
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-slate-400">
                    Check the details before
                    continuing.
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
                        Network
                      </p>

                      <p className="mt-0.5 text-xs font-bold">
                        {network}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-4">
                    <SummaryRow
                      label="Data plan"
                      value={
                        selectedPlan?.size ?? "—"
                      }
                    />

                    <SummaryRow
                      label="Validity"
                      value={
                        selectedPlan?.validity ??
                        "—"
                      }
                    />

                    <SummaryRow
                      label="Recipient"
                      value={
                        phone || "Not entered"
                      }
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
                        {(
                          selectedPlan?.price ?? 0
                        ).toLocaleString()}
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
                    disabled={
                      !selectedPlan ||
                      !validPhone
                    }
                    className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 text-xs font-bold text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
                  >
                    Buy Data
                    <ArrowRight size={16} />
                  </button>

                  {!validPhone && (
                    <p className="mt-3 text-center text-[9px] text-slate-400">
                      Enter a valid phone number to
                      continue.
                    </p>
                  )}

                  <div className="mt-5 flex items-start gap-2 rounded-xl bg-blue-50/70 p-3">
                    <ShieldCheck
                      size={14}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <p className="text-[9px] leading-4 text-slate-500">
                      Your wallet will only be
                      charged after the purchase is
                      submitted to the transaction
                      system.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mt-4 rounded-[22px] border border-slate-200 bg-white p-5">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Zap size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-bold">
                      Fast delivery
                    </p>

                    <p className="mt-1 text-[9px] leading-4 text-slate-400">
                      Successful data purchases are
                      designed to be processed
                      automatically after payment
                      confirmation.
                    </p>
                  </div>
                </div>
              </section>
            </aside>
          </div>

          {/* DEVELOPMENT NOTE */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
            <Info
              size={15}
              className="mt-0.5 shrink-0 text-blue-600"
            />

            <p className="text-[10px] leading-5 text-slate-500">
              The data plans and prices displayed
              on this page are demonstration values.
              Live network plans, pricing and
              availability will be loaded from the
              VTU provider when the backend is
              connected.
            </p>
          </div>
        </div>
      </section>

      {/* MOBILE MENU */}
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
                  active
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