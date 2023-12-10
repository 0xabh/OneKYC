import {
  Center,
  Box,
  TextInput,
  Group,
  Button,
  Container,
  Flex,
  Text,
} from "@mantine/core";
import makeBlockie from "ethereum-blockies-base64";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import Image from "next/image";

const Completed = () => {
  const { address } = useAccount();
  const transactionHash = localStorage.getItem("transactionHash")

  return (
    <Center mih={600} style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
    }}>
      <Flex direction={"column"} align={"center"} gap={"lg"}>
        <Image
          alt={`${address}`}
          height={180}
          width={180}
          src={makeBlockie(address ?? ethers.constants.AddressZero)}
          style={{
            border: "5px solid black",
          }}
        />
        <Text
          style={{
            color: "black",
            fontFamily: "sans-serif",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </Text>
      </Flex>
      <Flex w={700} mb={100} direction={"column"} align={"flex-start"} gap={"lg"}>
        <Text
          style={{
            color: "black",
            fontFamily: "sans-serif",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          KYC Verified
        </Text>
        <Text
          component="a"
          href="/bank"
          style={{
            color: "black",
            fontFamily: "sans-serif",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            textDecoration: "underline",
            textUnderlineOffset: "5px",
          }}
        >
          Click here for verifying bank details &rarr;
        </Text>
        <Text
          component="a"
          href="/dashboard"
          style={{
            color: "black",
            fontFamily: "sans-serif",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            textDecoration: "underline",
            textUnderlineOffset: "5px",
          }}
        >
          Click here to go to dashboard &rarr;
        </Text>
      </Flex>
    </Center>
  );
};

export default Completed;
