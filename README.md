# OneKYC
Zero knowledge protocol built on top of India stack that allows users to prove validity of their CERSAI CKYC data in a privacy preserving way without disclosing their PAN, Aadhar or other KYC data to a web3 dapp or protocol. 

# Rationale

Indian crypto users have to complete their KYC multiple times with different on ramps, exchanges and other dapps and protocols. The current KYC process at these platforms requires the user to manually click pictures of their KYC documents and upload the same. A user spends 5-10 minutes completing this KYC check once at every crypto platform, dapp or protocol he wants to use. There is no possibility for dapps and platforms to share this KYC data while there also exists a risk in sharing and storing a user's unmasked KYC document. 

Built on top of the India stack APIs OneKYC makes it easy and simple for Indian users to verify the validity of their CKYC data once and then share a zero knowledge proof of the same with every dapp, protocol or platform the user wants to connect with. CERSAI issues a unique 14 digit CKYC number for every Indian after they complete their KYC with a FIU (Financial Institution) for the first time. This 14 digit CKYC number is primarily mapped with a user's PAN which also acts as an identifier for the same.

# Userflow

For this hackathon build we have integrated Signzy's APIs and built our own digital CKYC flow. We use Aztec's noir to preserve privacy and succinctness. OneKYC generates a zero knowldege proof after verifying the user's CKYC data through PAN and a telecom level OTP verification. These checks ensure that only the user himself can complete his OneKYC and nobody else.

It takes less than ten seconds for OneKYC to verify the user's KYC data and generate a zero knowledge hash for the same. Once the proof is generated we allow user to connect an existing public key or address and mint a soulbound token. This soulbound token then acts as a proof that the user has completed their OneKYC. 

While generating the circuit via Aztec we deployed the zk_plonk.sol or verifier contract on chain so any other crypto dapp, protocol or platform can check for a user's existing OneKYC status. A user can prove the validity of his CKYC data to any third party without sharing the original KYC data with them. The contracts are verified and public which allows any dapp or protocol to independently verify the zero knowledge proof themselves.
