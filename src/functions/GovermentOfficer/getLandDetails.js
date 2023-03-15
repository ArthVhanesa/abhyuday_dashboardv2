import { ethers } from "ethers";
import { create } from "ipfs";
import AbiFile from "../../constants/Land.json";
import ContractAddress from "../../constants/contract.json";
import IPFS from "../../functions/utility/ReadDatsFromIPFS";

export const getLandDetailsById = async (land_id) => {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const address = ContractAddress["31337"]["Land"][0];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, AbiFile, signer);
    const Details = await contract.getLandDetailsById(land_id);
    console.log(Details);

    const { cid } = Details;
    const data = await IPFS.read_data(cid);
    const json = JSON.parse(data.content);

    return {
      ...Details,
      ipfs_content: json,
    };
  } catch (e) {
    console.log(e.message);
  }
};
