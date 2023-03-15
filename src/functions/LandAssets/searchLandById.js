import { ethers } from "ethers";
import AbiFile from "../../constants/Land.json";
import ContractAddress from "../../constants/contract.json";
import IPFS from "../../functions/utility/ReadDatsFromIPFS"

export const searchLandById = async (id) =>
{
  try
  {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const contractAddress = ContractAddress["31337"]["Land"][0];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(await provider.send("eth_requestAccounts", []));
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, AbiFile, signer);
    const land = await contract.getLandDetailsById(id);

    const { cid } = land;
    const data = await IPFS.read_data(cid);
    const json = JSON.parse(data.content);
    console.log(json);

    return {
      ...land,
      ipfs_content: json
    }
   

  } catch (e)
  {
    console.log(e);
  }
};
