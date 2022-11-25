import React from "react";
import { SpinnerCircular } from "spinners-react";
type PropT = {
  isLoading: boolean;
};
export default function Spinner({ isLoading }: PropT) {
  return (
    <SpinnerCircular
      thickness={300}
      color="#ffffff"
      size={20}
      enabled={isLoading}
    />
  );
}
