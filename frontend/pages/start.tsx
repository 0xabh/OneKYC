import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";
import {
  Box,
  Button,
  Center,
  Container,
  Group,
  Stepper,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import { useState } from "react";
import FirstStep from "../components/FirstStep";
import SecondStep from "../components/Second Step";
import LastStep from "../components/LastStep";
import Completed from "../components/Completed";

const Home: NextPage = () => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const renderStep = () => {
    switch (active) {
      case 0:
        return <FirstStep nextStep={() => nextStep()} prevStep={() => prevStep()} />;
      case 1:
        return <SecondStep nextStep={() => nextStep()} prevStep={() => prevStep()} />;
      case 2:
        return <LastStep nextStep={() => nextStep()} prevStep={() => prevStep()} />;
      case 3:
        return <Completed />;
      default:
        return <FirstStep nextStep={() => nextStep()} prevStep={() => prevStep()} />;
    }
  };

  return (
    <div>
      <Head>
        <title>OneKYC</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Layout>
        <Container
          size={"lg"}
          p={"md"}
          style={{
            border: "5px solid black",
          }}
        >
          {renderStep()}
        </Container>
      </Layout>
    </div>
  );
};

export default Home;
