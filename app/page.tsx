"use client";
import Page from "./pages/pipe";
import { Test02 } from "./pages/dashboard";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Test() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/dashboard" element={<Test02 />} />
      </Routes>
    </>
  );
}
