import { useState, useCallback } from "react";

export function useCopy(timeout = 1800) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback((text: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), timeout);
  }, [timeout]);
  return { copied, copy };
}

export function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = () => setState(s => !s);
  const setTrue = () => setState(true);
  const setFalse = () => setState(false);
  return { state, toggle, setTrue, setFalse };
}
