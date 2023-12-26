import { ChevronRight, Code2, Code2Icon, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CodeButton() {
  return (
    <Link href="https://github.com/manlopdev/QRizer" target="_blank">
      <Button variant="outline" size="icon">
        <Code2Icon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </Link>
  );
}
