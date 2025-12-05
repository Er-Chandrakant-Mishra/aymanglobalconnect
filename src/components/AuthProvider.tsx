"use client";

// Simple pass-through provider; no authentication for now.
export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


