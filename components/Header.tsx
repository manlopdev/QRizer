import React from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "./ui/button";
import { Github, GithubIcon } from "lucide-react";
import { CodeButton } from "./CodeButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 dark:bg-background bg-white">
      <nav className="flex items-center justify-center   p-7 max-w-4xl mx-auto gap-4">
        <h1 className="text-2xl ">QRizer</h1>
        <div className="flex gap-3 flex-1 items-center justify-end">
          <CodeButton />
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}
