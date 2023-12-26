"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import ECLevelSelect from "./ECLevelSelect";

export default function LogoSettings({
  setLogoImage,
  logoImage,
}: {
  setLogoImage: (value: string) => void;
  logoImage: string;
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>🖼️ Custom logo</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-3">
            <div>
              <Label htmlFor="trexts">Logo image</Label>
              <br />
              <Input
                type="file"
                accept="image/*"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const file = event.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setLogoImage(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
