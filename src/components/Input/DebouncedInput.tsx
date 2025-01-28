'use client';

import React, { useEffect, useState, useRef } from "react";
import { DebouncedInputProps } from "./types";

export const DebouncedInput: React.FC<DebouncedInputProps> = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) => {
  const [value, setValue] = useState(initialValue);
  const initialValueRef = useRef(initialValue);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      // Only update from external changes after initial mount
      initialValueRef.current = initialValue;
      setValue(initialValue);
    } else {
      isMounted.current = true;
    }
  }, [initialValue]);

  useEffect(() => {
    const isUserChange = value !== initialValueRef.current;
    
    if (!isUserChange) return;

    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, debounce, onChange]);

  return (
    <input 
      {...props} 
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};