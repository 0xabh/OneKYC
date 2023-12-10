import {ethers}  from 'ethers';

import soulBoundABI from "../utils/soulbound.abi.json"
import { BarretenbergBackend } from '@noir-lang/backend_barretenberg';
import { Noir, WitnessMap } from '@noir-lang/noir_js';
import circuit from "./zkCircuit.json";
import { networkRPC } from './networkRPC';

export const generateProof = async (phone_no: string, pan_card: string, dob: string) => {
    //@ts-ignore
    const backend = new BarretenbergBackend(circuit);
    //@ts-ignore
    const noir = new Noir(circuit, backend);

    const input = {
        pub_phone_no: phone_no, pub_pan_card_no: pan_card, phone_no: phone_no, pan_card_no: pan_card, dob: dob
    }
    console.log(input, "input")

    const proof = await noir.generateFinalProof(input);

    const verify = await noir.verifyFinalProof(proof);

    const hexProof = uint8ArrayToHex(proof.proof);

    const publicInput = mapToBytes32(proof.publicInputs);

    return {
        proof,
        verify,
        hexProof,
        publicInput
    }

}

const mapToBytes32 = (publicInp: any) => {
    const arr = [];
    for( let [key, val] of publicInp){
        let bytes32Value = ethers.utils.hexZeroPad(val, 32);
        arr.push(bytes32Value)
    }
    return arr;
}

export const toBytes32 = (phone: string, pan_card: string) => {
    // Convert the string to bytes
    let phoneBytes = ethers.utils.toUtf8Bytes(phone);
    let panBytes = ethers.utils.toUtf8Bytes(pan_card);
    // Pad the bytes to fit into bytes32
    return [ethers.utils.hexZeroPad(phoneBytes, 32), ethers.utils.hexZeroPad(panBytes, 32)];
}

const uint8ArrayToHex = (uint8array: Uint8Array) => {
    return Array.from(uint8array).map(b => b.toString(16).padStart(2, '0')).join('');
}


export const mintSBT = async (zkProof: string, chainName: any, userAddress: string, pbInput: string) => {
   
    const mint = await fetch("/api/mint", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
                zkProof,
                chainName,
                userAddress,
                pbInput
        })
    })
    const res = await mint.json();
    return res.tx;

    // const contract = new ethers.Contract(networkRPC[chainName].sbt, soulBoundABI, wallet);
    // // const zkProofBytes = ethers.utils.arrayify(zkProof);
    // const mint = await contract.safeMint(userAddress, "hi", zkProof);

    // await mint.wait();

    // return mint;


}