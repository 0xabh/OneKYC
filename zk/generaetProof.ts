import { BarretenbergBackend } from '@noir-lang/backend_barretenberg';
import { Noir, WitnessMap } from '@noir-lang/noir_js';
import * as circuit from "./target/zk.json";

//@ts-ignore
const backend = new BarretenbergBackend(circuit);
//@ts-ignore
const noir = new Noir(circuit, backend);

const input = {
    age: 22,
    dob: "01-01-2001",
    pan_card_no: "AXXXXXXXXF",
    pub_age: 22,
    pub_dob: "01-01-2001"
}

function uint8ArrayToHexString(arr: Uint8Array) {
    return '0x' + Array.from(arr, byte => byte.toString(16).padStart(2, '0')).join('');
}

const generateProof = async () => {
    
    const proof = await noir.generateFinalProof(input);
    // console.log(proof.publicInputs);
    console.log("bytes: ", uint8ArrayToHexString(proof.proof));
    console.log("public inputs: ", createBytes32Array(proof.publicInputs));
    const verify = await noir.verifyFinalProof(proof);
    console.log(verify)
}

function createBytes32Array(publicInputsMap:WitnessMap ) {
    // Convert the map to an array of [key, value] pairs
    const entries = Array.from(publicInputsMap.entries());

    // Sort the entries by their keys to maintain order
    // entries.sort((a, b) => a[0] - b[0]);

    // Extract just the values (bytes32 strings)
    const bytes32Array = entries.map(entry => entry[1]);

    return bytes32Array;
}


generateProof();