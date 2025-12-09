// ----- SSR localStorage polyfill (to avoid `getItem is not a function` on server) -----
if (typeof globalThis !== "undefined") {
  try {
    const ls = globalThis.localStorage;
    const broken = ls && typeof ls.getItem !== "function";

    // 서버 환경에서 localStorage가 없거나, getItem이 함수가 아니면 메모리 기반으로 대체
    if (!ls || broken) {
      const store = new Map();

      globalThis.localStorage = {
        getItem(key) {
          const k = String(key);
          return store.has(k) ? store.get(k) : null;
        },
        setItem(key, value) {
          const k = String(key);
          const v = String(value);
          store.set(k, v);
        },
        removeItem(key) {
          const k = String(key);
          store.delete(k);
        },
        clear() {
          store.clear();
        },
        key(index) {
          const keys = Array.from(store.keys());
          return index >= 0 && index < keys.length ? keys[index] : null;
        },
        get length() {
          return store.size;
        },
      };
    }
  } catch {
    // 그냥 무시
  }
}
// ----- END polyfill -----

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
    // dev 에서는 이미지 최적화 끄기
    unoptimized: process.env.NODE_ENV === "development",
  },
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
};

module.exports = nextConfig;
