import { ethers } from "ethers";
import contractfileAddress from "../../constants/contract.json";
import AbiFile from "../../constants/Land.json";
import IPFS from "../../functions/utility/ReadDatsFromIPFS";

export const getAllUsers = async () => {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    console.log(accounts[0]);
    const address = contractfileAddress["polygon"]["Land"][0];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, AbiFile, signer);

    const allUsersIndexes = await contract.ReturnAllUserList();
    console.log(allUsersIndexes);

    const users = allUsersIndexes.map(async (el, idx) => {
      const id = parseInt(el, 10);
      const user = await contract.getUserByID(id);
      return user;
    });
    const all_users_data = await Promise.all(users);

    const get_promises = all_users_data.map(async (user, idx) => {
      const { cid } = user;
      const data = await IPFS.read_data(cid);
      const json = JSON.parse(data);
      return {
        ...user,
        ipfs_content: json,
      };
    });

    const results = await Promise.all(get_promises);
    console.log(results);

    return results;
  } catch (e) {
    console.log(e.message);
  }
};
