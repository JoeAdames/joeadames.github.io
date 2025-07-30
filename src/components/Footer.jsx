import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} J A. All rights reserved.
    </footer>
  );
}
