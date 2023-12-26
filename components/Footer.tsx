import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex justify-center border-t mt-auto p-5">
      <p>
        Made with ❤️ by{" "}
        <Link
          className="underline dark:text-orange-300 text-blue-500"
          href="http://manlop.dev"
          target="_blank"
        >
          manlopdev
        </Link>
      </p>
    </footer>
  );
}
