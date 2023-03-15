import { ethers } from "ethers";
import contractfileAddress from "../../constants/contract.json";
import AbiFile from "../../constants/Land.json";

import IPFS from "../utility/ReadDatsFromIPFS";

export const UserRegister = async (user) => {
	try {
		const address = contractfileAddress["polygon"]["Land"][0];
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();

		const result = await IPFS.upload_data(JSON.stringify(user));
		console.log(result);
		const contract = new ethers.Contract(address, AbiFile, signer);
		const addUser = await contract.AddUser(result);
		console.log("new user registered!");
		console.log(addUser);
		return addUser;
	} catch (e) {
		console.log(e.message);
	}
};
