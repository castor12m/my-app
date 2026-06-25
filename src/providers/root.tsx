import React from "react";

import type { PropsWithChildren } from "react";

import ThemeProvider from "./theme";

type TRootProvider = PropsWithChildren;

export default function RootProvider({ children }: TRootProvider) {
  return <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>;
}
