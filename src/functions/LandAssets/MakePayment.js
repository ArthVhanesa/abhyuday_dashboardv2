import { create } from "ipfs";
import { ethers } from "ethers";
import AbiFile from "../../constants/Land.json";
import ContractAddress from "../../constants/contract.json";

export const MakePayment = async (requestID, governmentFeesRate) => {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const contractAddress = ContractAddress["31337"]["Land"][0];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(await provider.send("eth_requestAccounts", []));
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, AbiFile, signer);

    //params of req_id from frontend
    const tx = await contract.makePayment(requestID, governmentFeesRate);
    console.log(tx);
    return tx;
  } catch (e) {
    console.log(e);
  }
};
