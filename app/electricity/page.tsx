"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Bell,
  Check,
  CheckCircle2,
  Copy,
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

type MeterType = "Prepaid" | "Postpaid";

type Disco = {
  id: string;
  shortName: string;
  name: string;
  region: string;
};

const discos: Disco[] = [
  {
    id: "ikeja",
    shortName: "IKEDC",
    name: "Ikeja Electric",
    region: "Lagos",
  },
  {
    id: "eko",
    shortName: "EKEDC",
    name: "Eko Electricity",
    region: "Lagos",
  },
  {
    id: "abuja",
    shortName: "AEDC",
    name: "Abuja Electricity",
    region: "Abuja",
  },
  {
    id: "ibadan",
    shortName: "IBEDC",
    name: "Ibadan Electricity",
    region: "South West",
  },
  {
    id: "benin",
    shortName: "BEDC",
    name: "Benin Electricity",
    region: "Edo & Delta",
  },
  {
    id: "enugu",
    shortName: "EEDC",
    name: "Enugu Electricity",
    region: "South East",
  },
  {
    id: "portharcourt",
    shortName: "PHED",
    name: "Port Harcourt Electricity",
    region: "South South",
  },
  {
    id: "kano",
    shortName: "KEDCO",
    name: "Kano Electricity",
    region: "Kano",
  },
];

const quickAmounts = [
  1000,
  2000,
  5000,
  10000,
  20000,
];

export default function ElectricityPage() {
  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [selectedDisco, setSelectedDisco] =
    useState("benin");

  const [meterType, setMeterType] =
    useState<MeterType>("Prepaid");

  const [meterNumber, setMeterNumber] =
    useState("");

  const [amount, setAmount] =
    useState("5000");

  const [verified, setVerified] =
    useState(false);

  const [verifying, setVerifying] =
    useState(false);

  const [copied, setCopied] =
    useState(false);

  const disco =
    discos.find(
      (item) => item.id === selectedDisco
    ) ?? discos[0];

  const numericAmount = Number(amount) || 0;

  const validAmount =
    numericAmount >= 500 &&
    numericAmount <= 100000;

  function chooseDisco(id: string) {
    setSelectedDisco(id);
    setMeterNumber("");
    setVerified(false);
  }

  function changeMeterType(type: MeterType) {
    setMeterType(type);
    setVerified(false);
  }

  function handleMeterNumber(value: string) {
    setMeterNumber(
      value.replace(/\D/g, "").slice(0, 15)
    );

    setVerified(false);
  }

  function handleAmount(value: string) {
    setAmount(
      value.replace(/\D/g, "").slice(0, 6)
    );
  }

  function verifyMeter() {
    if (meterNumber.length < 6) return;

    setVerifying(true);

    window.setTimeout(() => {
      setVerified(true);
      setVerifying(false);
    }, 700);
  }

  function copyDemoToken() {
    navigator.clipboard?.writeText(
      "0000 0000 0000 0000 0000"
    );

    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  const canPay =
    verified &&
    validAmount &&
    meterNumber.length >= 6;

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
              active
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
              aria-label="Open navigation"
            >
              <Menu size={19} />
            </button>

            <div className="lg:hidden">
              <Logo dark />
            </div>

            <div className="hidden lg:block">
              <h1 className="text-sm font-bold">
                Electricity
              </h1>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Pay electricity bills and buy tokens
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

        {/* PAGE */}
        <div className="mx-auto max-w-[1450px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* HEADING */}
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
              Electricity Bills
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
              Pay your electricity bill
            </h2>

            <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-400">
              Select your electricity provider,
              verify your meter and complete your
              payment securely from your wallet.
            </p>
          </div>

          <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_370px]">
            {/* FORM */}
            <div className="space-y-5">
              {/* DISCO */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <StepTitle
                  number="01"
                  title="Select electricity provider"
                  description="Choose the distribution company serving your meter."
                />

                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {discos.map((item) => {
                    const active =
                      selectedDisco === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          chooseDisco(item.id)
                        }
                        className={`relative min-h-[118px] rounded-[20px] border p-4 text-left transition ${
                          active
                            ? "border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/10"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        {active && (
                          <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                            <Check size={11} />
                          </span>
                        )}

                        <DiscoMark
                          name={item.shortName}
                        />

                        <p className="mt-3 text-xs font-bold">
                          {item.shortName}
                        </p>

                        <p className="mt-1 truncate text-[9px] text-slate-400">
                          {item.region}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* METER TYPE */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <StepTitle
                  number="02"
                  title="Choose meter type"
                  description="Select the billing type connected to your meter."
                />

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <MeterTypeCard
                    title="Prepaid"
                    description="Purchase electricity and receive a token for your meter."
                    selected={
                      meterType === "Prepaid"
                    }
                    onClick={() =>
                      changeMeterType("Prepaid")
                    }
                  />

                  <MeterTypeCard
                    title="Postpaid"
                    description="Pay an outstanding electricity bill linked to your account."
                    selected={
                      meterType === "Postpaid"
                    }
                    onClick={() =>
                      changeMeterType("Postpaid")
                    }
                  />
                </div>
              </section>

              {/* METER VERIFICATION */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <StepTitle
                  number="03"
                  title="Verify meter"
                  description={`Enter your ${disco.shortName} ${meterType.toLowerCase()} meter number.`}
                />

                <div className="mt-5">
                  <label
                    htmlFor="meter"
                    className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500"
                  >
                    Meter number
                  </label>

                  <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                    <div className="relative flex-1">
                      <Zap
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="meter"
                        type="text"
                        inputMode="numeric"
                        value={meterNumber}
                        onChange={(event) =>
                          handleMeterNumber(
                            event.target.value
                          )
                        }
                        placeholder="Enter meter number"
                        className="h-[52px] w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={verifyMeter}
                      disabled={
                        meterNumber.length < 6 ||
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
                        Verify the meter before
                        payment to confirm that your
                        details are correct.
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
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <div>
                              <p className="text-[8px] font-bold uppercase tracking-wide text-emerald-600">
                                Meter verified
                              </p>

                              <p className="mt-1 text-sm font-bold">
                                John Doe
                              </p>

                              <p className="mt-1 text-[9px] text-slate-400">
                                12 Example Street,
                                Nigeria
                              </p>
                            </div>

                            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[8px] font-bold text-emerald-700">
                              Verified
                            </span>
                          </div>

                          <div className="mt-4 grid grid-cols-2 gap-4 border-t border-emerald-100 pt-3 sm:grid-cols-3">
                            <VerifiedItem
                              label="Provider"
                              value={
                                disco.shortName
                              }
                            />

                            <VerifiedItem
                              label="Meter"
                              value={meterNumber}
                            />

                            <VerifiedItem
                              label="Type"
                              value={meterType}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* AMOUNT */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <StepTitle
                  number="04"
                  title="Enter amount"
                  description={
                    meterType === "Prepaid"
                      ? "Enter the amount of electricity you want to purchase."
                      : "Enter the amount you want to pay toward your electricity bill."
                  }
                />

                <div className="mt-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    Quick amounts
                  </p>

                  <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
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
                          className={`h-11 rounded-xl border text-xs font-bold transition ${
                            numericAmount === value
                              ? "border-blue-500 bg-blue-50 text-blue-600 ring-2 ring-blue-500/10"
                              : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          ₦
                          {value.toLocaleString()}
                        </button>
                      )
                    )}
                  </div>

                  <div className="mt-5 max-w-xl">
                    <label
                      htmlFor="amount"
                      className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500"
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
                          handleAmount(
                            event.target.value
                          )
                        }
                        placeholder="5000"
                        className="h-[52px] w-full rounded-2xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-bold outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <div className="mt-2 flex justify-between text-[8px] text-slate-400">
                      <span>Minimum ₦500</span>
                      <span>Maximum ₦100,000</span>
                    </div>

                    {amount &&
                      !validAmount && (
                        <p className="mt-2 text-[9px] font-medium text-rose-500">
                          Enter an amount between
                          ₦500 and ₦100,000.
                        </p>
                      )}
                  </div>
                </div>
              </section>
            </div>

            {/* SUMMARY */}
            <aside className="xl:sticky xl:top-[96px]">
              <section className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm">
                <div className="relative overflow-hidden bg-[#07111f] p-5 text-white sm:p-6">
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl" />

                  <div className="relative flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-blue-300">
                        Payment Summary
                      </p>

                      <h3 className="mt-2 text-lg font-bold">
                        Electricity
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08] text-amber-300">
                      <Zap size={19} />
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                    <DiscoMark
                      name={disco.shortName}
                    />

                    <div className="min-w-0">
                      <p className="text-[9px] text-slate-400">
                        Provider
                      </p>

                      <p className="mt-0.5 truncate text-xs font-bold">
                        {disco.name}
                      </p>
                    </div>

                    {verified && (
                      <CheckCircle2
                        size={18}
                        className="ml-auto shrink-0 text-emerald-500"
                      />
                    )}
                  </div>

                  <div className="mt-5 space-y-4">
                    <SummaryRow
                      label="Meter type"
                      value={meterType}
                    />

                    <SummaryRow
                      label="Meter number"
                      value={
                        meterNumber ||
                        "Not entered"
                      }
                    />

                    <SummaryRow
                      label="Customer"
                      value={
                        verified
                          ? "John Doe"
                          : "Not verified"
                      }
                    />

                    <SummaryRow
                      label="Payment"
                      value="Wallet"
                    />
                  </div>

                  <div className="my-5 border-t border-dashed border-slate-200" />

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[9px] text-slate-400">
                        Amount to pay
                      </p>

                      <p className="mt-1 text-2xl font-bold tracking-[-0.04em]">
                        ₦
                        {numericAmount.toLocaleString()}
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
                    {meterType === "Prepaid"
                      ? "Buy Electricity"
                      : "Pay Bill"}

                    <ArrowRight size={15} />
                  </button>

                  {!verified && (
                    <p className="mt-3 text-center text-[9px] text-slate-400">
                      Verify your meter to continue.
                    </p>
                  )}

                  <div className="mt-5 flex gap-2 rounded-xl bg-blue-50 p-3">
                    <ShieldCheck
                      size={14}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <p className="text-[9px] leading-4 text-slate-500">
                      Confirm the customer name,
                      meter number and amount before
                      completing payment.
                    </p>
                  </div>
                </div>
              </section>

              {/* PREPAID TOKEN INFO */}
              {meterType === "Prepaid" && (
                <section className="mt-4 rounded-[22px] border border-slate-200 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                      <Zap size={17} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold">
                        Prepaid token
                      </p>

                      <p className="mt-1 text-[9px] leading-4 text-slate-400">
                        After a successful prepaid
                        purchase, your electricity
                        token will appear in the
                        transaction receipt.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-wide text-slate-400">
                          Demo Token
                        </p>

                        <p className="mt-1 font-mono text-[11px] font-bold tracking-wide text-slate-600">
                          0000 0000 0000 0000 0000
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={copyDemoToken}
                        className="flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 text-[9px] font-bold text-slate-500"
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

                    <p className="mt-2 text-[8px] font-medium text-amber-600">
                      Preview only — this is not a
                      real electricity token.
                    </p>
                  </div>
                </section>
              )}

              <Link
                href="/support"
                className="mt-4 flex items-center gap-3 rounded-[22px] border border-slate-200 bg-white p-4 transition hover:border-blue-200"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Headphones size={16} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold">
                    Payment issue?
                  </p>

                  <p className="mt-0.5 text-[9px] text-slate-400">
                    Contact Customer Service
                  </p>
                </div>

                <ArrowRight
                  size={14}
                  className="text-slate-300"
                />
              </Link>
            </aside>
          </div>

          {/* DEMO */}
          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
            <Info
              size={15}
              className="mt-0.5 shrink-0 text-amber-600"
            />

            <p className="text-[10px] leading-5 text-slate-500">
              Meter verification and customer
              information are currently demonstration
              data. The live system will verify meter
              details, process payments and retrieve
              prepaid tokens through the connected
              VTU provider.
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
                  active
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

function DiscoMark({
  name,
}: {
  name: string;
}) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-[9px] font-black text-white shadow-sm">
      {name.slice(0, 3)}
    </div>
  );
}

function MeterTypeCard({
  title,
  description,
  selected,
  onClick,
}: {
  title: MeterType;
  description: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative rounded-[20px] border p-5 text-left transition ${
        selected
          ? "border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/10"
          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
          <Zap size={18} />
        </div>

        <div
          className={`flex h-5 w-5 items-center justify-center rounded-full border ${
            selected
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-slate-300"
          }`}
        >
          {selected && <Check size={11} />}
        </div>
      </div>

      <p className="mt-4 text-sm font-bold">
        {title}
      </p>

      <p className="mt-1 text-[9px] leading-4 text-slate-400">
        {description}
      </p>
    </button>
  );
}

function VerifiedItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0">
      <p className="text-[8px] font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-1 truncate text-[10px] font-bold text-slate-700">
        {value}
      </p>
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