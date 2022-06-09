import React from "react";
import { ErrorInfo } from "../types";
import "../index.css";

interface Props {
  error: ErrorInfo;
}

const ErrorBoundary: React.FC<Props> = ({ error }) => {
  return (
    <div className={"error-box"}>
      <p>{error.error}</p>
      <p>{error.errorInfo}</p>
    </div>
  );
};

export { ErrorBoundary };
