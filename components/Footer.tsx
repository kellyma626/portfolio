"use client";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-3xl px-6 pb-7.75 text-xs leading-4 text-muted">
      © <span suppressHydrationWarning>{new Date().getFullYear()}</span> kelly ma ✿
    </footer>
  );
}