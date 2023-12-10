
interface INetworkRPC {
    [key: string]: { rpc: string, zk_plonk: string, sbt: string };
}


export const networkRPC : INetworkRPC  = {
    Polygon: { rpc: "https://polygon-mainnet.g.alchemy.com/v2/9UDUFcbGhSzUlaO6mtIAihVmt6HgeeTL", zk_plonk: "0x76100b6f46d984379ed3fd85ce258a567eccf977", sbt: "0x5f8ba275bd34b21d2818c2383095fc231ca630ac" } ,
    "Scroll Testnet": { rpc: "https://sepolia-rpc.scroll.io", zk_plonk: "0x192CBa2216EdaB78938F7B204aCC254FdecC06B0", sbt: "0x33267cce5482B67F4B65c7cD339F2C72FC37e999" } ,
    Alfajores: { rpc: "https://alfajores-forno.celo-testnet.org", zk_plonk: "0x33267cce5482B67F4B65c7cD339F2C72FC37e999", sbt: "0x192cba2216edab78938f7b204acc254fdecc06b0" } ,
   
}