import { ethers } from "ethers";
import contractfileAddress from "../../constants/contract.json";
import AbiFile from "../../constants/Land.json";
import IPFS from "../../functions/utility/ReadDatsFromIPFS";

export const GetUserDetails = async (user_id) => {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const address = contractfileAddress["polygon"]["Land"][0];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, AbiFile, signer);
    const user = await contract.getUserByID(user_id);
    const {cid} = user;

    const data = await IPFS.read_data(cid);
    const json = JSON.parse(data);
    return {
      ...user,
      ipfs_content: json
    }    
  
  } catch (e) {
    console.log(e.message);
  }
};
