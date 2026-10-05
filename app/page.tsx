"use client";

import Link from "next/link";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Signal,
} from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050b16] px-5 py-10">
      <AuthBackground />

      <div className="relative z-10 w-full max-w-[450px]">
        {/* Brand */}
        <div className="mb-8 flex flex-col items-center text-center">
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

        {/* Login card */}
        <div className="rounded-[28px] border border-white/[0.09] bg-white/[0.07] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-white sm:text-[1.8rem]">
              Welcome back
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Sign in to access your account and manage your services.
            </p>
          </div>

          <form
            className="space-y-5"
            onSubmit={(event) => event.preventDefault()}
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold text-slate-300"
              >
                Email address
              </label>

              <div className="group relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition group-focus-within:text-blue-400"
                />

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  className="h-[54px] w-full rounded-2xl border border-white/[0.09] bg-white/[0.055] pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/15 focus:border-blue-500/70 focus:bg-white/[0.08] focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold text-slate-300"
                >
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="group relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition group-focus-within:text-blue-400"
                />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="h-[54px] w-full rounded-2xl border border-white/[0.09] bg-white/[0.055] pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/15 focus:border-blue-500/70 focus:bg-white/[0.08] focus:ring-4 focus:ring-blue-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-500 transition hover:bg-white/5 hover:text-slate-300"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex cursor-pointer items-center gap-2.5 text-xs text-slate-400">
              <input
                type="checkbox"
                className="h-4 w-4 rounded accent-blue-600"
              />
              Remember me
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="group flex h-[54px] w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(37,99,235,0.25)] transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_15px_45px_rgba(37,99,235,0.35)] active:translate-y-0"
            >
              Sign in
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Register */}
          <div className="mt-7 border-t border-white/[0.08] pt-6 text-center">
            <p className="text-xs text-slate-400">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-blue-400 transition hover:text-blue-300"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-medium text-slate-600">
          <ShieldCheck size={13} />
          Secure and encrypted connection
        </div>
      </div>
    </main>
  );
}

/* Background */

function AuthBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* blue glow */}
      <div className="absolute left-1/2 top-[-200px] h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.13] blur-[120px]" />

      {/* cyan glow */}
      <div className="absolute -bottom-[250px] -left-[150px] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.08] blur-[140px]" />

      {/* purple glow */}
      <div className="absolute -right-[200px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-indigo-600/[0.08] blur-[140px]" />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.9) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* top fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,11,22,0.25)_50%,rgba(5,11,22,0.75)_100%)]" />
    </div>
  );
}