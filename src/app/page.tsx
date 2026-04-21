"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (email === "demo@example.com" && password === "demo123") {
        router.push("/dashboard");
      } else {
        setError("メールアドレスまたはパスワードが正しくありません");
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f0f23] px-4">
      <div className="w-full max-w-md">
        {/* Logo / Title */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-mv-green text-2xl font-bold text-white">
            MV
          </div>
          <h1 className="text-2xl font-bold text-white">
            Mother Vegetable
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            インストラクターポータル
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            ログイン
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition focus:border-mv-green focus:outline-none focus:ring-2 focus:ring-mv-green/30"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-700">
                パスワード
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="パスワードを入力"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition focus:border-mv-green focus:outline-none focus:ring-2 focus:ring-mv-green/30"
              />
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-mv-green px-4 py-2.5 font-medium text-white transition hover:bg-mv-green-dark disabled:opacity-60"
            >
              {loading ? "ログイン中..." : "ログイン"}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 rounded-lg bg-gray-50 p-4">
            <p className="mb-1 text-xs font-medium text-gray-500 uppercase tracking-wide">
              デモ用アカウント
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Email:</span> demo@example.com
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Password:</span> demo123
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          &copy; 2026 Mother Vegetable. All rights reserved.
        </p>
      </div>
    </div>
  );
}
