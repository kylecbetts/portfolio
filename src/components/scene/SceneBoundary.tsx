"use client";

import { catchError } from "next/error";

function SceneFallback() {
  return null;
}

export const SceneBoundary = catchError(SceneFallback);
