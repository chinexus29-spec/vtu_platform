"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bell,
  Check,
  CheckCircle2,
  Headphones,
  Home,
  Info,
  Loader2,
  Menu,
  ReceiptText,
  Search,
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

type Provider = "DStv" | "GOtv" | "StarTimes";

type CablePackage = {
  id: number;
  provider: Provider;
  name: string;
  price: number;
  description: string;
  popular?: boolean;
};

const providers: Provider[] = [
  "DStv",
  "GOtv",
  "StarTimes",
];

const packages: CablePackage[] = [
  {
    id: 1,
    provider: "DStv",
    name: "Padi",
    price: 3600,
    description: "Essential entertainment",
  },
  {
    id: 2,
    provider: "DStv",
    name: "Yanga",
    price: 5100,
    description: "Entertainment and lifestyle",
    popular: true,
  },
  {
    id: 3,
    provider: "DStv",
    name: "Confam",
    price: 9300,
    description: "Family entertainment",
  },
  {
    id: 4,
    provider: "DStv",
    name: "Compact",
    price: 15700,
    description: "More sports and entertainment",
  },

  {
    id: 5,
    provider: "GOtv",
    name: "Smallie",
    price: 1900,
    description: "Essential local entertainment",
  },
  {
    id: 6,
    provider: "GOtv",
    name: "Jinja",
    price: 3900,
    description: "Everyday entertainment",
  },
  {
    id: 7,
    provider: "GOtv",
    name: "Jolli",
    price: 5800,
    description: "More channels for the family",
    popular: true,
  },
  {
    id: 8,
    provider: "GOtv",
    name: "Max",
    price: 8500,
    description: "Expanded entertainment",
  },

  {
    id: 9,
    provider: "StarTimes",
    name: "Nova",
    price: 1700,
    description: "Essential TV channels",
  },
  {
    id: 10,
    provider: "StarTimes",
    name: "Basic",
    price: 3300,
    description: "Everyday entertainment",
    popular: true,
  },
  {
    id: 11,
    provider: "StarTimes",
    name: "Classic",
    price: 5000,
    description: "Expanded channel selection",
  },
  {
    id: 12,
    provider: "StarTimes",
    name: "Super",
    price: 7500,
    description: "Premium entertainment",
  },
];

export default function CablePage() {
  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [provider, setProvider] =
    useState<Provider>("DStv");

  const [smartcard, setSmartcard] =
    useState("");

  const [verified, setVerified] =
    useState(false);

  const [verifying, setVerifying] =
    useState(false);

  const [selectedPackageId, setSelectedPackageId] =
    useState(2);

  const providerPackages = useMemo(
    () =>
      packages.filter(
        (item) => item.provider === provider
      ),
    [provider]
  );

  const selectedPackage =
    providerPackages.find(
      (item) => item.id === selectedPackageId
    ) ?? providerPackages[0];

  function changeProvider(value: Provider) {
    setProvider(value);
    setSmartcard("");
    setVerified(false);

    const firstPackage = packages.find(
      (item) => item.provider === value
    );

    if (firstPackage) {
      setSelectedPackageId(firstPackage.id);
    }
  }

  function handleSmartcard(value: string) {
    setSmartcard(
      value.replace(/\D/g, "").slice(0, 14)
    );

    setVerified(false);
  }

  function verifyCustomer() {
    if (smartcard.length < 6) return;

    setVerifying(true);

    window.setTimeout(() => {
      setVerified(true);
      setVerifying(false);
    }, 700);
  }

  const canPay =
    verified &&
    Boolean(selectedPackage) &&
    smartcard.length >= 6;

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
              active
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
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 lg:hidden"
            >
              <Menu size={19} />
            </button>

            <div className="lg:hidden">
              <Logo dark />
            </div>

            <div className="hidden lg:block">
              <h1 className="text-sm font-bold">
                Cable TV
              </h1>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Television subscriptions
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

            <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500">
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
          {/* PAGE HEADING */}
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
              Cable TV
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
              Renew your subscription
            </h2>

            <p className="mt-2 max-w-xl text-xs leading-5 text-slate-400">
              Verify your decoder account, select a
              package and complete your subscription
              from your wallet.
            </p>
          </div>

          <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_370px]">
            <div className="space-y-5">
              {/* PROVIDER */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <StepTitle
                  number="01"
                  title="Choose provider"
                  description="Select your television service provider."
                />

                <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                  {providers.map((item) => {
                    const active =
                      item === provider;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          changeProvider(item)
                        }
                        className={`relative flex min-h-[112px] flex-col items-center justify-center rounded-[20px] border px-2 py-4 transition ${
                          active
                            ? "border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/10"
                            : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        {active && (
                          <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                            <Check size={11} />
                          </span>
                        )}

                        <ProviderMark
                          provider={item}
                        />

                        <p className="mt-3 text-[11px] font-bold sm:text-xs">
                          {item}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* ACCOUNT */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <StepTitle
                  number="02"
                  title="Decoder details"
                  description={`Verify the account linked to your ${provider} decoder.`}
                />

                <div className="mt-5">
                  <label
                    htmlFor="smartcard"
                    className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500"
                  >
                    Smartcard / IUC number
                  </label>

                  <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                    <div className="relative flex-1">
                      <Tv
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="smartcard"
                        type="text"
                        inputMode="numeric"
                        value={smartcard}
                        onChange={(event) =>
                          handleSmartcard(
                            event.target.value
                          )
                        }
                        placeholder="Enter decoder number"
                        className="h-[52px] w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={verifyCustomer}
                      disabled={
                        smartcard.length < 6 ||
                        verifying
                      }
                      className="flex h-[52px] min-w-[125px] items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 text-xs font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
                    >
                      {verifying ? (
                        <>
                          <Loader2
                            size={15}
                            className="animate-spin"
                          />
                          Checking
                        </>
                      ) : (
                        <>
                          <Search size={15} />
                          Verify
                        </>
                      )}
                    </button>
                  </div>

                  {!verified && (
                    <div className="mt-3 flex items-start gap-2">
                      <Info
                        size={13}
                        className="mt-0.5 shrink-0 text-slate-400"
                      />

                      <p className="text-[9px] leading-4 text-slate-400">
                        We&apos;ll verify the account
                        name before you make payment.
                      </p>
                    </div>
                  )}

                  {verified && (
                    <div className="mt-4 rounded-[18px] border border-emerald-100 bg-emerald-50/60 p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                          <CheckCircle2 size={18} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="text-[9px] font-medium text-emerald-600">
                                ACCOUNT VERIFIED
                              </p>

                              <p className="mt-1 text-sm font-bold">
                                John Doe
                              </p>
                            </div>

                            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[8px] font-bold text-emerald-700">
                              Verified
                            </span>
                          </div>

                          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-emerald-100 pt-3">
                            <div>
                              <p className="text-[8px] text-slate-400">
                                PROVIDER
                              </p>

                              <p className="mt-1 text-[10px] font-bold">
                                {provider}
                              </p>
                            </div>

                            <div>
                              <p className="text-[8px] text-slate-400">
                                DECODER NUMBER
                              </p>

                              <p className="mt-1 truncate text-[10px] font-bold">
                                {smartcard}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* PACKAGE */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <StepTitle
                    number="03"
                    title="Select package"
                    description={`Available ${provider} packages.`}
                  />

                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[8px] font-bold text-slate-500">
                    {providerPackages.length} PACKAGES
                  </span>
                </div>

                <div className="mt-5 overflow-hidden rounded-[20px] border border-slate-200">
                  {providerPackages.map(
                    (item, index) => {
                      const active =
                        selectedPackage?.id ===
                        item.id;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            setSelectedPackageId(
                              item.id
                            )
                          }
                          className={`flex w-full items-center gap-3 p-4 text-left transition ${
                            index !==
                            providerPackages.length -
                              1
                              ? "border-b border-slate-100"
                              : ""
                          } ${
                            active
                              ? "bg-blue-50/60"
                              : "bg-white hover:bg-slate-50"
                          }`}
                        >
                          <div
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                              active
                                ? "border-blue-600 bg-blue-600 text-white"
                                : "border-slate-300"
                            }`}
                          >
                            {active && (
                              <Check size={11} />
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-xs font-bold sm:text-sm">
                                {provider}{" "}
                                {item.name}
                              </p>

                              {item.popular && (
                                <span className="rounded-full bg-slate-900 px-2 py-1 text-[7px] font-bold uppercase text-white">
                                  Popular
                                </span>
                              )}
                            </div>

                            <p className="mt-1 text-[9px] text-slate-400">
                              {item.description}
                            </p>
                          </div>

                          <div className="shrink-0 text-right">
                            <p className="text-sm font-bold text-slate-900">
                              ₦
                              {item.price.toLocaleString()}
                            </p>

                            <p className="mt-1 text-[8px] text-slate-400">
                              subscription
                            </p>
                          </div>
                        </button>
                      );
                    }
                  )}
                </div>
              </section>
            </div>

            {/* SUMMARY */}
            <aside className="xl:sticky xl:top-[96px]">
              <section className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm">
                <div className="bg-[#07111f] p-5 text-white sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-blue-300">
                        Subscription Summary
                      </p>

                      <h3 className="mt-2 text-lg font-bold">
                        Confirm purchase
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08] text-blue-300">
                      <Tv size={18} />
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                    <ProviderMark
                      provider={provider}
                      small
                    />

                    <div className="min-w-0">
                      <p className="text-[9px] text-slate-400">
                        Provider
                      </p>

                      <p className="mt-0.5 text-xs font-bold">
                        {provider}
                      </p>
                    </div>

                    {verified && (
                      <CheckCircle2
                        size={18}
                        className="ml-auto text-emerald-500"
                      />
                    )}
                  </div>

                  <div className="mt-5 space-y-4">
                    <SummaryRow
                      label="Customer"
                      value={
                        verified
                          ? "John Doe"
                          : "Not verified"
                      }
                    />

                    <SummaryRow
                      label="Decoder"
                      value={
                        smartcard || "Not entered"
                      }
                    />

                    <SummaryRow
                      label="Package"
                      value={`${provider} ${
                        selectedPackage?.name ?? ""
                      }`}
                    />

                    <SummaryRow
                      label="Payment"
                      value="Wallet"
                    />
                  </div>

                  <div className="my-5 border-t border-dashed border-slate-200" />

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[9px] text-slate-400">
                        Amount to pay
                      </p>

                      <p className="mt-1 text-2xl font-bold tracking-[-0.04em]">
                        ₦
                        {(
                          selectedPackage?.price ??
                          0
                        ).toLocaleString()}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[8px] text-slate-400">
                        WALLET BALANCE
                      </p>

                      <p className="mt-1 text-xs font-bold text-emerald-600">
                        ₦25,000.00
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    disabled={!canPay}
                    className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 text-xs font-bold text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
                  >
                    Pay ₦
                    {(
                      selectedPackage?.price ?? 0
                    ).toLocaleString()}
                    <ArrowRight size={15} />
                  </button>

                  {!verified && (
                    <p className="mt-3 text-center text-[9px] text-slate-400">
                      Verify your decoder account to
                      continue.
                    </p>
                  )}

                  <div className="mt-5 flex gap-2 rounded-xl bg-blue-50 p-3">
                    <ShieldCheck
                      size={14}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <p className="text-[9px] leading-4 text-slate-500">
                      Check the customer name and
                      selected package carefully
                      before payment.
                    </p>
                  </div>
                </div>
              </section>

              {/* HELP */}
              <Link
                href="/support"
                className="mt-4 flex items-center gap-3 rounded-[22px] border border-slate-200 bg-white p-4 transition hover:border-blue-200"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Headphones size={16} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold">
                    Having trouble?
                  </p>

                  <p className="mt-0.5 text-[9px] text-slate-400">
                    Get help with your subscription
                  </p>
                </div>

                <ArrowRight
                  size={14}
                  className="text-slate-300"
                />
              </Link>
            </aside>
          </div>

          {/* DEMO NOTICE */}
          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
            <Info
              size={15}
              className="mt-0.5 shrink-0 text-amber-600"
            />

            <p className="text-[10px] leading-5 text-slate-500">
              Customer verification and package
              prices are demonstration data for the
              interface. Live customer information,
              packages and prices will be retrieved
              from the VTU provider after backend
              integration.
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
                  active
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

function StepTitle({
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

function ProviderMark({
  provider,
  small = false,
}: {
  provider: Provider;
  small?: boolean;
}) {
  const config = {
    DStv: {
      text: "D",
      className:
        "bg-gradient-to-br from-[#0875d1] to-[#004a9f] text-white",
    },
    GOtv: {
      text: "G",
      className:
        "bg-gradient-to-br from-[#55a630] to-[#16803b] text-white",
    },
    StarTimes: {
      text: "S",
      className:
        "bg-gradient-to-br from-[#ff9f1c] to-[#f05a28] text-white",
    },
  };

  const item = config[provider];

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-2xl font-black shadow-sm ${
        item.className
      } ${
        small
          ? "h-10 w-10 text-xs"
          : "h-12 w-12 text-sm"
      }`}
    >
      {item.text}
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

      <span className="max-w-[190px] truncate text-right text-[10px] font-bold text-slate-700">
        {value}
      </span>
    </div>
  );
}