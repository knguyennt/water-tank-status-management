
"use client";
import * as React from 'react';
import { HashRouter } from "react-router-dom";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <HashRouter>
          <body>{children}</body>
        </HashRouter>
      </html>
  );
}