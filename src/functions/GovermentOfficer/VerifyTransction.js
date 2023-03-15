import { ethers } from "ethers";
import AbiFile from "../../constants/Land.json";
import ContractAddress from "../../constants/contract.json";

export const VerifyTransction = async (req_id, status) => {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const contractAddress = ContractAddress["polygon"]["Land"][0];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(await provider.send("eth_requestAccounts", []));
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, AbiFile, signer);

    // 0 => PENDING, 1 => ACC, 2 => REJECT
    const tx = await contract.changeGovernmentStatus(req_id, status);
    console.log(tx);
    return tx;
  } catch (e) {
    console.log(e);
  }
};
