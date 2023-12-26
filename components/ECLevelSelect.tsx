import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

export default function ECLevelSelect({
  errorCorrectionLevel,
  setErrorCorrectionLevel,
}: {
  errorCorrectionLevel: string;
  setErrorCorrectionLevel: (value: string) => void;
}) {
  return (
    <Select
      defaultValue={errorCorrectionLevel}
      onValueChange={setErrorCorrectionLevel}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Medium" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Low">Low</SelectItem>
        <SelectItem value="Medium">Medium</SelectItem>
        <SelectItem value="Quartile">Quartile</SelectItem>
        <SelectItem value="High">High</SelectItem>
      </SelectContent>
    </Select>
  );
}
