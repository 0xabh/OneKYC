import { ethers } from "ethers";
import { networkRPC } from "../../../utils/networkRPC";
import soulBoundABI from "../../../utils/soulbound.abi.json"

export default async function handler(req: any, res:any){
    const { chainName, userAddress, zkProof, pbInput} = req.body;
    console.log(networkRPC[chainName].rpc, process.env.WALLET_PVT_KEY);
    
    const provider = new ethers.providers.JsonRpcProvider(networkRPC[chainName].rpc);
    
    const wallet = new ethers.Wallet(process.env.WALLET_PVT_KEY as string, provider);

    const contract = new ethers.Contract(networkRPC[chainName].sbt, soulBoundABI, wallet);
    // const zkProofBytes = ethers.utils.arrayify(zkProof);
    const mint = await contract.safeMint(userAddress, pbInput, zkProof);

    await mint.wait();
    
    res.status(200).json({success: true, tx: mint});
}