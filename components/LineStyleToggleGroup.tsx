import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import React from "react";

export default function LineStyleToggleGroup({
  setLineStyle,
}: {
  setLineStyle: (value: string) => void;
}) {
  return (
    <ToggleGroup
      type="single"
      onValueChange={setLineStyle}
      className="grid grid-cols-2"
      defaultValue="Squares"
    >
      <ToggleGroupItem value="Squares">Squares</ToggleGroupItem>
      <ToggleGroupItem value="Dots">Dots</ToggleGroupItem>
    </ToggleGroup>
  );
}
