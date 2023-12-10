import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { celoAlfajores, polygon, polygonMumbai, scrollTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [celoAlfajores, polygon, scrollTestnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID!,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <MantineProvider>
          <Notifications />
          <Component {...pageProps} />
        </MantineProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
