import { Copy, Check } from "lucide-react";
import { IconButton } from "./IconButton";
import { useCopy } from "@/hooks/useCopy";

interface CopyButtonProps {
  text: string;
  label?: string;
  size?: "sm" | "md" | "lg";
}

export function CopyButton({ text, label = "Copy", size = "md" }: CopyButtonProps) {
  const { copied, copy } = useCopy();
  return (
    <IconButton
      variant="outline"
      size={size}
      onClick={() => copy(text)}
      aria-label={copied ? "Copied!" : label}
      className={copied ? "text-emerald-600 border-emerald-300 bg-emerald-50" : ""}
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </IconButton>
  );
}
