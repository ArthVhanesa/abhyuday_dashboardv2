import { create } from "ipfs";
import { ethers } from "ethers";
import AbiFile from "../../constants/Land.json";
import ContractAddress from "../../constants/contract.json";

export const AcceptRequest = async (requestID) => {
  try {
    const ipfs = await create();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const contractAddress = ContractAddress["31337"]["Land"][0];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(await provider.send("eth_requestAccounts", []));
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, AbiFile, signer);

    //params of request_id from frontend
    const AcceptRequest = await contract.acceptRequest(requestID);
    console.log(AcceptRequest);
    return AcceptRequest;
  } catch (e) {
    console.log(e);
  }
};
