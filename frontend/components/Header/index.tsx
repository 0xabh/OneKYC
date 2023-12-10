import { useState } from "react";
import { Container, Group, Burger, Title, Flex } from "@mantine/core";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function HeaderSimple() {
  const router = useRouter();

  return (
    <>
      <Container size="xl">
        <Flex justify={"space-between"}>
          <Title
            onClick={() => router.push("/")}
            style={{
              marginTop: "0.5rem",
              fontSize: "2rem",
              lineHeight: "2rem",
              color: "black",
              fontFamily: "sans-serif",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            OneKYC
          </Title>
          {router.pathname === "/dashboard" && (
            <div style={{
              marginTop: "6px"
            }}>
              <ConnectButton />
            </div>
          )}
        </Flex>
      </Container>
    </>
  );
}
