import React from "react";

export interface LabelInputProps {
  children: React.ReactNode;
  value: string;
  obligatoryValid?: boolean;
  className?: string;
  regExp: any;
  isValid?: boolean;
  setDataValid: (dataValid: boolean) => void;
}
