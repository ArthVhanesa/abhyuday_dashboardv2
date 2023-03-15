import { create } from "ipfs";
import { ethers } from "ethers";
import AbiFile from "../../constants/Land.json";
import ContractAddress from "../../constants/contract.json";
import IPFS from "../../functions/utility/ReadDatsFromIPFS";

export const getAllRequests = async () => {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const contractAddress = ContractAddress["polygon"]["Land"][0];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(await provider.send("eth_requestAccounts", [0]));
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, AbiFile, signer);

    //the params of the land_id and status (0->false,1->true) must be passed from frontend
    const LAST_REQ_ID = 5; // get from contract

    const result = [];
    for (let i = 1; i <= LAST_REQ_ID; ++i) {
      const data = await contract.LandRequestMapping(i);
      if(data.cid === '') break;
      result.push({ id: i, ...data });
    }

    const get_request_data = await Promise.all(result);
    console.log(get_request_data);

    const sentRequests = get_request_data.map(async (el, index) => {
      const { cid } = el;
      const data = await IPFS.read_data(cid);
      const json = JSON.parse(data);
      return {
        ...el,
        ipfs_content: json,
      };
    });

    const _ = await Promise.all(sentRequests);
    console.log(_);
    return _;
  } catch (e) {
    console.log(e);
  }
};
