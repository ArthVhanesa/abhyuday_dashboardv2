import { create } from "ipfs";
import { ethers } from "ethers";
import AbiFile from "../../constants/Land.json";
import ContractAddress from "../../constants/contract.json";
export const ChangeLandPrice = async () => {
  try {
    const ipfs = await create();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts[0]);

    const contractAddress = ContractAddress["31337"]["Land"][0];
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    console.log(await provider.send("eth_requestAccounts", []));

    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, AbiFile, signer);

    //params of land_id from frontend
    const RaisedRequest = await contract.ChangeLandPrice(1, 1);
    console.log(RaisedRequest);
  } catch (e) {
    console.log(e);
  }
};
