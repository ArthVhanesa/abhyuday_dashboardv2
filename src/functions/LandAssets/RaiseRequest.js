import { create } from "ipfs";
import { ethers } from "ethers";
import AbiFile from "../../constants/Land.json";
import ContractAddress from "../../constants/contract.json";

export const RaiseRequest = async (landID) => {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const contractAddress = ContractAddress["31337"]["Land"][0];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, AbiFile, signer);
    const addr = signer.getAddress();

    const userCid = await contract.getUserByAddress(addr);
    const req = await contract.requestForBuyLand(landID, userCid);
    const reqID = await req.wait();
    console.log(req);
    console.log(reqID);

    return reqID;
  } catch (e) {
    console.log(e);
  }
};
