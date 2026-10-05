"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
  Signal,
  User,
} from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050b16] px-5 py-10">
      <AuthBackground />

      <div className="relative z-10 w-full max-w-[500px]">
        {/* Brand */}
        <div className="mb-7 flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/10 bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-[0_15px_45px_rgba(37,99,235,0.3)]">
            <Signal size={27} />
          </div>

          <h1 className="text-xl font-bold tracking-tight text-white">
            VTU Hub
          </h1>

          <p className="mt-1 text-[10px] font-semibold tracking-[0.22em] text-slate-500">
            DIGITAL SERVICES
          </p>
        </div>

        {/* Card */}
        <div className="rounded-[28px] border border-white/[0.09] bg-white/[0.07] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to login
          </Link>

          <div className="mb-7">
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-white">
              Create your account
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Create an account to start purchasing digital services.
            </p>
          </div>

          <form
            className="space-y-4"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                id="name"
                label="Full name"
                type="text"
                placeholder="John Doe"
                icon={<User size={17} />}
              />

              <Field
                id="phone"
                label="Phone number"
                type="tel"
                placeholder="08012345678"
                icon={<Phone size={17} />}
              />
            </div>

            <Field
              id="email"
              label="Email address"
              type="email"
              placeholder="name@example.com"
              icon={<Mail size={17} />}
            />

            <PasswordField
              id="password"
              label="Password"
              placeholder="Create password"
              visible={showPassword}
              toggle={() => setShowPassword((value) => !value)}
            />

            <PasswordField
              id="confirm-password"
              label="Confirm password"
              placeholder="Repeat password"
              visible={showConfirmPassword}
              toggle={() =>
                setShowConfirmPassword((value) => !value)
              }
            />

            <label className="flex cursor-pointer items-start gap-3 py-1">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 shrink-0 accent-blue-600"
              />

              <span className="text-[11px] leading-5 text-slate-400">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="font-semibold text-blue-400 hover:text-blue-300"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="font-semibold text-blue-400 hover:text-blue-300"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              className="group flex h-[54px] w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(37,99,235,0.25)] transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_15px_45px_rgba(37,99,235,0.35)]"
            >
              Create account
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          <div className="mt-6 border-t border-white/[0.08] pt-6 text-center">
            <p className="text-xs text-slate-400">
              Already have an account?{" "}
              <Link
                href="/"
                className="font-semibold text-blue-400 hover:text-blue-300"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-medium text-slate-600">
          <ShieldCheck size={13} />
          Your information is securely protected
        </div>
      </div>
    </main>
  );
}

/* Form field */

function Field({
  id,
  label,
  type,
  placeholder,
  icon,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold text-slate-300"
      >
        {label}
      </label>

      <div className="group relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition group-focus-within:text-blue-400">
          {icon}
        </span>

        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="h-[52px] w-full rounded-2xl border border-white/[0.09] bg-white/[0.055] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/15 focus:border-blue-500/70 focus:bg-white/[0.08] focus:ring-4 focus:ring-blue-500/10"
        />
      </div>
    </div>
  );
}

/* Password */

function PasswordField({
  id,
  label,
  placeholder,
  visible,
  toggle,
}: {
  id: string;
  label: string;
  placeholder: string;
  visible: boolean;
  toggle: () => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold text-slate-300"
      >
        {label}
      </label>

      <div className="group relative">
        <LockKeyhole
          size={17}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition group-focus-within:text-blue-400"
        />

        <input
          id={id}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          className="h-[52px] w-full rounded-2xl border border-white/[0.09] bg-white/[0.055] pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/15 focus:border-blue-500/70 focus:bg-white/[0.08] focus:ring-4 focus:ring-blue-500/10"
        />

        <button
          type="button"
          onClick={toggle}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-300"
        >
          {visible ? <EyeOff size={17} /> : <Eye size={17} />}
        </button>
      </div>
    </div>
  );
}

/* Background */

function AuthBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-[-200px] h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.13] blur-[120px]" />

      <div className="absolute -bottom-[250px] -left-[150px] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.08] blur-[140px]" />

      <div className="absolute -right-[200px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-indigo-600/[0.08] blur-[140px]" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.9) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,11,22,0.25)_50%,rgba(5,11,22,0.75)_100%)]" />
    </div>
  );
}