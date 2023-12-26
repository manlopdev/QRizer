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

export default function AdvancedSettings({
  quietZone,
  setQuietZone,
  errorCorrectionLevel,
  setErrorCorrectionLevel,
}: {
  quietZone: number;
  setQuietZone: (value: number) => void;
  errorCorrectionLevel: string;
  setErrorCorrectionLevel: (value: string) => void;
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>🧪 Advanced settings</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-2 gap-y-10">
            <div>
              <Label htmlFor="trext">Error correction level</Label>
              <ECLevelSelect
                errorCorrectionLevel={errorCorrectionLevel}
                setErrorCorrectionLevel={setErrorCorrectionLevel}
              />
            </div>
            <div>
              <Label htmlFor="qz">Quiet zone</Label>
              <Input
                type="number"
                id="qz"
                defaultValue={quietZone}
                onChange={(e) =>
                  setQuietZone(Math.min(e.target.valueAsNumber, 100))
                }
                min={0}
                max={100}
                step={1}
                value={quietZone}
                placeholder="Enter an integer"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
