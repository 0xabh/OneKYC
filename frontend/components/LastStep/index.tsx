import {
  Center,
  Box,
  TextInput,
  Group,
  Button,
  Text,
  Flex,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";
import {
  useAccount,
  useContractWrite,
  useNetwork,
  usePublicClient,
  useWalletClient,
} from "wagmi";
import { generateProof, mintSBT } from "../../utils/mintSBT";
import { useState } from "react";

// get signer and address from wagmi useAccount
// trigger the mint flow
// delete all local storage data

const LastStep = ({ nextStep, prevStep }: { nextStep: any; prevStep: any }) => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const [transactionHash, setTransactionHash] = useState("");
  // const publicClient = usePublicClient()
  // const { data, isLoading, isSuccess, write} = useContractWrite({
  //   address: address,
  //   abi: soulBoundABI,
  //   functionName: 'safeMint'
  // })
  const form = useForm({
    initialValues: {
      otp: "",
    },
    validate: {
      otp: (value) =>
        value.length == 4 && /^\d+$/.test(value)
          ? null
          : "Please enter a valid OTP",
    },
  });
  const claimKyc = async () => {
    // update as per chain
    const userDetails = localStorage.getItem("userDetails");
    const parseData = JSON.parse(userDetails as string);
    console.log(parseData, "parseData Here");
    const proof = await generateProof(
      parseData.phone,
      parseData.pan,
      parseData.dob.substring(0, 10)
    );
    const mint: any = await mintSBT(
      "0x" + proof.hexProof,
      chain?.name,
      address as string,
      proof.publicInput.toString()
    );
    console.log(chain?.name, mint);
    console.log(proof);
    localStorage.removeItem(`${chain?.name}TxHash`)
    localStorage.setItem(`${chain?.name}TxHash`, mint.hash);
    window.open(chain?.name === "Alfajores" ? `https://alfajores.celoscan.io/tx/${mint.hash}` : `https://sepolia-blockscout.scroll.io/tx/${mint.hash}`)
    setTransactionHash(mint.hash);
  };

  return (
    <Center mih={600}>
      <Flex direction={"column"} align={"center"} gap={"lg"}>
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
          Connect wallet to claim OneKYC verification
        </Text>
        <ConnectButton />
        <Button
          style={{
            background: "white",
            color: "black",
            borderWidth: "1px 5px 5px 1px",
            borderStyle: "solid",
            borderColor: "rgba(16, 17, 17, 1)",
            borderRadius: "0px",
            width: "160px",
            height: "50px",
            fontSize: "24px",
            fontWeight: 400,
          }}
          mt={"md"}
          onClick={() => {
            claimKyc();
            setTimeout(() => {
              nextStep();
            }, 3000)
          }}
        >
          Claim KYC
        </Button>
        {transactionHash !== "" ? (
          <div>Transaction Hash: {transactionHash}</div>
        ) : (
          <></>
        )}
      </Flex>
    </Center>
  );
};

export default LastStep;
