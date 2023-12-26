import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import rgbHex from "rgb-hex";

import React from "react";
import { Button } from "./ui/button";
import Picker from "react-best-gradient-color-picker";

export default function ColorPicker({
  onChange,
  initialRGBColor,
}: {
  onChange: (color: string) => void;
  initialRGBColor?: string;
}) {
  const [color, setColor] = React.useState(initialRGBColor || "rgb(0,0,0)");
  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <Button className="w-full" variant={"secondary"}>
          #{rgbHex(color).toUpperCase()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <Picker
          hideColorTypeBtns
          hideControls
          hideOpacity
          value={color}
          onChange={(color: string) => {
            setColor(color);
            onChange(color);
          }}
          className={undefined}
        />
      </PopoverContent>
    </Popover>
  );
}
