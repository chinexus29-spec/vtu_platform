"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Bell,
  ChevronRight,
  Eye,
  EyeOff,
  Headphones,
  Home,
  LockKeyhole,
  LogOut,
  Mail,
  Menu,
  Moon,
  ReceiptText,
  Settings,
  ShieldCheck,
  Signal,
  Smartphone,
  Sun,
  Tv,
  UserRound,
  Wallet,
  Wifi,
  X,
  Zap,
} from "lucide-react";

export default function SettingsPage() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [transactionAlerts, setTransactionAlerts] = useState(true);
  const [walletAlerts, setWalletAlerts] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [promotions, setPromotions] = useState(false);
  const [loginAlerts, setLoginAlerts] = useState(true);

  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [passwordModal, setPasswordModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const passwordValid =
    currentPassword.length >= 1 &&
    newPassword.length >= 8 &&
    confirmPassword === newPassword;

  function closePasswordModal() {
    setPasswordModal(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setShowCurrent(false);
    setShowNew(false);
    setShowConfirm(false);
  }

  function savePassword() {
    if (!passwordValid) return;
    closePasswordModal();
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
            active
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
              <h1 className="text-sm font-bold">Settings</h1>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Manage your account preferences
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
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white"
              aria-label="Account"
            >
              <UserRound size={17} />
            </Link>
          </div>
        </header>

        {/* CONTENT */}
        <div className="mx-auto max-w-[1450px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
              Preferences
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
              Account settings
            </h2>

            <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-400">
              Manage security, notifications and preferences for your VTU
              account.
            </p>
          </div>

          <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
            {/* LEFT */}
            <div className="space-y-6">
              {/* SECURITY */}
              <SettingsSection
                icon={<LockKeyhole size={18} />}
                title="Security"
                description="Manage your password and account protection."
              >
                <SettingsAction
                  icon={<LockKeyhole size={16} />}
                  title="Password"
                  description="Change your account password"
                  onClick={() => setPasswordModal(true)}
                />

                <SettingsAction
                  icon={<ShieldCheck size={16} />}
                  title="Login security"
                  description="Receive alerts when your account is accessed"
                  right={
                    <Toggle
                      enabled={loginAlerts}
                      onChange={setLoginAlerts}
                    />
                  }
                />
              </SettingsSection>

              {/* NOTIFICATIONS */}
              <SettingsSection
                icon={<Bell size={18} />}
                title="Notifications"
                description="Choose which account notifications you receive."
              >
                <SettingsAction
                  icon={<ReceiptText size={16} />}
                  title="Transaction alerts"
                  description="Get notified after purchases and bill payments"
                  right={
                    <Toggle
                      enabled={transactionAlerts}
                      onChange={setTransactionAlerts}
                    />
                  }
                />

                <SettingsAction
                  icon={<Wallet size={16} />}
                  title="Wallet alerts"
                  description="Receive wallet funding and balance notifications"
                  right={
                    <Toggle
                      enabled={walletAlerts}
                      onChange={setWalletAlerts}
                    />
                  }
                />

                <SettingsAction
                  icon={<Mail size={16} />}
                  title="Email notifications"
                  description="Receive important account updates by email"
                  right={
                    <Toggle
                      enabled={emailAlerts}
                      onChange={setEmailAlerts}
                    />
                  }
                />

                <SettingsAction
                  icon={<Signal size={16} />}
                  title="Offers & promotions"
                  description="Receive product announcements and promotional offers"
                  right={
                    <Toggle
                      enabled={promotions}
                      onChange={setPromotions}
                    />
                  }
                />
              </SettingsSection>

              {/* APPEARANCE */}
              <SettingsSection
                icon={<Sun size={18} />}
                title="Appearance"
                description="Choose how your account interface should look."
              >
                <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-6">
                  <button
                    type="button"
                    onClick={() => setTheme("light")}
                    className={`rounded-[20px] border p-4 text-left transition ${
                      theme === "light"
                        ? "border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/10"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          theme === "light"
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Sun size={17} />
                      </div>

                      <RadioSelected selected={theme === "light"} />
                    </div>

                    <p className="mt-4 text-[11px] font-bold">Light</p>

                    <p className="mt-1 text-[9px] leading-4 text-slate-400">
                      Use the standard bright interface.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTheme("dark")}
                    className={`rounded-[20px] border p-4 text-left transition ${
                      theme === "dark"
                        ? "border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/10"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          theme === "dark"
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Moon size={17} />
                      </div>

                      <RadioSelected selected={theme === "dark"} />
                    </div>

                    <p className="mt-4 text-[11px] font-bold">Dark</p>

                    <p className="mt-1 text-[9px] leading-4 text-slate-400">
                      Dark interface preference for your account.
                    </p>
                  </button>
                </div>

                <div className="mx-5 mb-5 rounded-2xl bg-amber-50 p-4 sm:mx-6 sm:mb-6">
                  <p className="text-[9px] leading-4 text-amber-700">
                    Theme selection is currently a UI preference. We will make
                    it change the entire interface when we connect global theme
                    support.
                  </p>
                </div>
              </SettingsSection>
            </div>

            {/* RIGHT */}
            <aside className="space-y-5">
              {/* ACCOUNT */}
              <section className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Account
                </p>

                <h3 className="mt-2 text-base font-bold">Account management</h3>

                <div className="mt-5 space-y-2">
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-slate-50"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <UserRound size={15} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold">Profile details</p>

                      <p className="mt-1 text-[8px] text-slate-400">
                        Update your personal information
                      </p>
                    </div>

                    <ChevronRight size={14} className="text-slate-300" />
                  </Link>

                  <Link
                    href="/transactions"
                    className="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-slate-50"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <ReceiptText size={15} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold">
                        Transaction history
                      </p>

                      <p className="mt-1 text-[8px] text-slate-400">
                        Review your account activity
                      </p>
                    </div>

                    <ChevronRight size={14} className="text-slate-300" />
                  </Link>

                  <Link
                    href="/support"
                    className="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-slate-50"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Headphones size={15} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold">Customer Service</p>

                      <p className="mt-1 text-[8px] text-slate-400">
                        Get help with your account
                      </p>
                    </div>

                    <ChevronRight size={14} className="text-slate-300" />
                  </Link>
                </div>
              </section>

              {/* SECURITY STATUS */}
              <section className="rounded-[26px] bg-[#07111f] p-5 text-white sm:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                  <ShieldCheck size={20} />
                </div>

                <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.14em] text-emerald-300">
                  Security Status
                </p>

                <h3 className="mt-2 text-lg font-bold">Account protected</h3>

                <p className="mt-2 text-[9px] leading-5 text-slate-400">
                  Login alerts and important transaction notifications help you
                  monitor activity on your account.
                </p>

                <div className="mt-5 space-y-3 border-t border-white/[0.08] pt-5">
                  <SecurityStatus label="Password" value="Configured" />
                  <SecurityStatus label="Email" value="Verified" />
                  <SecurityStatus
                    label="Login alerts"
                    value={loginAlerts ? "Enabled" : "Disabled"}
                  />
                </div>
              </section>

              {/* LOGOUT */}
              <section className="rounded-[26px] border border-rose-100 bg-white p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                    <LogOut size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-bold">Sign out</p>

                    <p className="mt-1 text-[9px] leading-4 text-slate-400">
                      End your current session on this device.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setLogoutModal(true)}
                  className="mt-5 h-11 w-full rounded-xl border border-rose-200 text-[10px] font-bold text-rose-600 transition hover:bg-rose-50"
                >
                  Log Out
                </button>
              </section>
            </aside>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
            <ShieldCheck
              size={15}
              className="mt-0.5 shrink-0 text-blue-600"
            />

            <p className="text-[10px] leading-5 text-slate-500">
              These settings currently demonstrate the customer interface.
              Password updates, persistent preferences, sessions and
              notification delivery will be connected to the backend later.
            </p>
          </div>
        </div>
      </section>

      {/* PASSWORD MODAL */}
      {passwordModal && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/50 backdrop-blur-sm sm:items-center sm:p-5">
          <button
            type="button"
            onClick={closePasswordModal}
            className="absolute inset-0"
            aria-label="Close password modal"
          />

          <section className="relative z-10 w-full rounded-t-[28px] bg-white shadow-2xl sm:max-w-[500px] sm:rounded-[28px]">
            <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6">
              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Security
                </p>

                <h3 className="mt-2 text-lg font-bold">Change password</h3>
              </div>

              <button
                type="button"
                onClick={closePasswordModal}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500"
              >
                <X size={17} />
              </button>
            </div>

            <div className="p-5 sm:p-6">
              <div className="space-y-4">
                <PasswordInput
                  label="Current password"
                  value={currentPassword}
                  onChange={setCurrentPassword}
                  visible={showCurrent}
                  onToggle={() => setShowCurrent(!showCurrent)}
                />

                <PasswordInput
                  label="New password"
                  value={newPassword}
                  onChange={setNewPassword}
                  visible={showNew}
                  onToggle={() => setShowNew(!showNew)}
                />

                <PasswordInput
                  label="Confirm new password"
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                  visible={showConfirm}
                  onToggle={() => setShowConfirm(!showConfirm)}
                />
              </div>

              <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                <p className="text-[9px] leading-4 text-slate-500">
                  Use at least 8 characters. Avoid using the same password you
                  use for your email or banking accounts.
                </p>
              </div>

              {confirmPassword &&
                newPassword !== confirmPassword && (
                  <p className="mt-3 text-[9px] font-medium text-rose-600">
                    The new passwords do not match.
                  </p>
                )}

              <button
                type="button"
                disabled={!passwordValid}
                onClick={savePassword}
                className="mt-5 h-12 w-full rounded-2xl bg-blue-600 text-[10px] font-bold text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
              >
                Update Password
              </button>
            </div>
          </section>
        </div>
      )}

      {/* LOGOUT MODAL */}
      {logoutModal && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/50 backdrop-blur-sm sm:items-center sm:p-5">
          <button
            type="button"
            onClick={() => setLogoutModal(false)}
            className="absolute inset-0"
            aria-label="Close logout modal"
          />

          <section className="relative z-10 w-full rounded-t-[28px] bg-white p-6 text-center shadow-2xl sm:max-w-[420px] sm:rounded-[28px]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
              <LogOut size={20} />
            </div>

            <h3 className="mt-5 text-lg font-bold">Log out of your account?</h3>

            <p className="mx-auto mt-2 max-w-sm text-[10px] leading-5 text-slate-400">
              You will need to sign in again to access your wallet and account.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setLogoutModal(false)}
                className="h-11 rounded-xl border border-slate-200 text-[10px] font-bold text-slate-600"
              >
                Cancel
              </button>

              <Link
                href="/"
                className="flex h-11 items-center justify-center rounded-xl bg-rose-600 text-[10px] font-bold text-white"
              >
                Log Out
              </Link>
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
                  active
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
          active
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

function SettingsSection({
  icon,
  title,
  description,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
      <div className="flex items-center gap-3 border-b border-slate-100 p-5 sm:p-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          {icon}
        </div>

        <div>
          <h3 className="text-sm font-bold">{title}</h3>

          <p className="mt-1 text-[9px] text-slate-400">{description}</p>
        </div>
      </div>

      <div className="divide-y divide-slate-100">{children}</div>
    </section>
  );
}

function SettingsAction({
  icon,
  title,
  description,
  right,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  right?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div className="flex items-center gap-3 p-5 sm:px-6">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold">{title}</p>

        <p className="mt-1 text-[8px] leading-4 text-slate-400">
          {description}
        </p>
      </div>

      {right ? (
        right
      ) : (
        <button
          type="button"
          onClick={onClick}
          className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100"
        >
          <ChevronRight size={15} />
        </button>
      )}
    </div>
  );
}

function Toggle({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
        enabled ? "bg-blue-600" : "bg-slate-200"
      }`}
      aria-pressed={enabled}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
          enabled ? "left-6" : "left-1"
        }`}
      />
    </button>
  );
}

function RadioSelected({ selected }: { selected: boolean }) {
  return (
    <span
      className={`flex h-5 w-5 items-center justify-center rounded-full border ${
        selected ? "border-blue-600" : "border-slate-300"
      }`}
    >
      {selected && <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />}
    </span>
  );
}

function SecurityStatus({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-[9px] text-slate-500">{label}</p>

      <p className="text-[9px] font-bold text-slate-200">{value}</p>
    </div>
  );
}

function PasswordInput({
  label,
  value,
  onChange,
  visible,
  onToggle,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  visible: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <label className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </label>

      <div className="relative mt-2">
        <LockKeyhole
          size={15}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type={visible ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-[52px] w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-12 text-[11px] outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
        />

        <button
          type="button"
          onClick={onToggle}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  );
}