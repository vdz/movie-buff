import React from "react";

export interface DebouncedInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
}