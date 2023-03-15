import { create } from "ipfs";
import { ethers } from "ethers";
import AbiFile from "../../constants/Land.json";
import ContractAddress from "../../constants/contract.json";

export const ChangeLandSellStatus = async (landID, status) => {
  try {
    const textDecoder = new TextDecoder();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const contractAddress = ContractAddress["polygon"]["Land"][0];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(await provider.send("eth_requestAccounts", []));
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, AbiFile, signer);

    //the params of the land_id and status (0->false,1->true) must be passed from frontend
    // const GetUserCid = await contract.makeLandAvailableForSell(landID, status); NEEED CHANGE IN CONTRACT
    const tx = await contract.makeLandAvailableForSell(landID, 1);
    console.log(tx);
    return tx;
  } catch (e) {
    console.log(e);
  }
};
