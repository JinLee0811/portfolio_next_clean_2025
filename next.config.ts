import type { NextConfig } from "next";

// Avoid `localStorage.getItem is not a function` during SSR / config evaluation when Node's storage is incomplete
if (typeof globalThis !== "undefined") {
  try {
    const ls = globalThis.localStorage as Storage | undefined;
    const broken = Boolean(ls && typeof ls.getItem !== "function");

    if (!ls || broken) {
      const store = new Map<string, string>();

      const memoryStorage = {
        getItem(key: string) {
          const k = String(key);
          return store.has(k) ? store.get(k)! : null;
        },
        setItem(key: string, value: string) {
          store.set(String(key), String(value));
        },
        removeItem(key: string) {
          store.delete(String(key));
        },
        clear() {
          store.clear();
        },
        key(index: number) {
          const keys = Array.from(store.keys());
          return index >= 0 && index < keys.length ? keys[index] : null;
        },
        get length() {
          return store.size;
        },
      } as Storage;

      (globalThis as unknown as { localStorage: Storage }).localStorage = memoryStorage;
    }
  } catch {
    // ignore
  }
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    unoptimized: process.env.NODE_ENV === "development",
  },
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
};

export default nextConfig;
