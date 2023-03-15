import { ethers } from "ethers";
import AbiFile from "../../constants/Land.json";
import ContractAddress from "../../constants/contract.json";

export const verifyLand = async (land_id) =>
{
  try
  {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const contractAddress = ContractAddress["polygon"]["Land"][0];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, AbiFile, signer);
    //land id from frontend as a params
    const tx = await contract.verifyLand(land_id);
    console.log(tx);
    window.alert('The land status is changed!')
    return tx;
  } catch (e)
  {
    console.log(e);
  }
};
