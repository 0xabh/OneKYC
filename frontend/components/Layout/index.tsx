import { AppShell, Center } from "@mantine/core";
import { ReactNode } from "react";
import { HeaderSimple } from "../Header";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export function Layout({ children }: Props) {
  return (
    <AppShell header={{ height: 60 }} padding="md" bg={"#FFF5EA"}>
      <AppShell.Header style={{border: "none", marginTop: "0.5rem", background: "#FFF5EA"}}>
        <HeaderSimple />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
