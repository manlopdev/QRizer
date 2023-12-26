import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import AdvancedSettings from "./AdvancedSettings";
import ColorPicker from "./ColorPicker";
import { QRCode } from "react-qrcode-logo";
import LineStyleToggleGroup from "./LineStyleToggleGroup";
import fileDownload from "js-file-download";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import LogoSettings from "./LogoSettings";

export default function MainCard({ className }: { className?: string }) {
  const [websiteURL, setWebsiteURL] = React.useState("");
  const [foregroundColor, setForegroundColor] = React.useState("#000000");
  const [backgroundColor, setBackgroundColor] = React.useState("#ffffff");
  const [errorCorrectionLevel, setErrorCorrectionLevel] =
    React.useState("Medium");
  const [quietZone, setQuietZone] = React.useState(10);
  const [lineStyle, setLineStyle] = React.useState("Squares");
  const [imageSize, setImageSize] = React.useState(200);
  const [logoImage, setLogoImage] = React.useState<string>("");

  const qrCodeRef = React.useRef(null);

  const downloadCode = () => {
    const canvas: any = document.getElementById("qrCodeImage");
    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `QRizer.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className="px-7">
      <div className="text-4xl  text-center mx-auto w-full max-w-4xl mb-5">
        Generate your own QR code{" "}
        <span className=" font-medium dark:text-orange-300 text-blue-500">
          in 0.0 seconds
        </span>
        .
      </div>
      <Card className={cn("w-full max-w-4xl mx-auto mb-10", className)}>
        <CardHeader className="text-lg">Customize your code</CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="trext">Website URL / Any text</Label>
              <Input
                type="text"
                id="trext"
                placeholder="Enter any text here"
                value={websiteURL}
                onChange={(e) => setWebsiteURL(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="trexts">Foreground color</Label>
              <br />
              <ColorPicker
                onChange={setForegroundColor}
                initialRGBColor={"rbg(0,0,0)"}
              />
            </div>
            <div>
              <Label htmlFor="trexts">Background color</Label>
              <br />
              <ColorPicker
                onChange={setBackgroundColor}
                initialRGBColor={"rbg(255,255,255)"}
              />
            </div>
            <div>
              <Label htmlFor="trexts">Line style</Label>
              <br />
              <LineStyleToggleGroup setLineStyle={setLineStyle} />
            </div>
            <LogoSettings setLogoImage={setLogoImage} logoImage={logoImage} />
            <AdvancedSettings
              quietZone={quietZone}
              setQuietZone={setQuietZone}
              errorCorrectionLevel={errorCorrectionLevel}
              setErrorCorrectionLevel={setErrorCorrectionLevel}
            />
          </div>
          <div className="mx-auto flex flex-col justify-center">
            <div className="rounded-lg w-fit h-fit overflow-hidden">
              <QRCode
                value={websiteURL}
                size={200}
                fgColor={foregroundColor}
                bgColor={backgroundColor}
                quietZone={quietZone}
                ecLevel={errorCorrectionLevel[0] as "M" | "L" | "Q" | "H"}
                qrStyle={lineStyle.toLowerCase() as "dots" | "squares"}
                logoImage={logoImage}
                logoPadding={3}
                removeQrCodeBehindLogo={true}
              />
            </div>
            <Label className="mt-5 mb-2" htmlFor="trexts">
              Image size: {imageSize}x{imageSize}px
            </Label>
            <Slider
              defaultValue={[imageSize]}
              min={10}
              max={3000}
              step={10}
              onValueChange={(num: number[]) => setImageSize(num[0])}
            />
            <Button onClick={downloadCode} className=" mt-4">
              Download
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="hidden">
        <QRCode
          id={"qrCodeImage"}
          ref={qrCodeRef}
          value={websiteURL}
          size={imageSize}
          fgColor={foregroundColor}
          bgColor={backgroundColor}
          quietZone={quietZone}
          ecLevel={errorCorrectionLevel[0] as "M" | "L" | "Q" | "H"}
          qrStyle={lineStyle.toLowerCase() as "dots" | "squares"}
          logoImage={logoImage}
        />
      </div>
    </div>
  );
}
