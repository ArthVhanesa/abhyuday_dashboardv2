import { ethers } from "ethers";
import AbiFile from "../../constants/Land.json";
import ContractAddress from "../../constants/contract.json";

export const VerifyUser = async (user_address, status) => {
	try {
		const accounts = await window.ethereum.request({
			method: "eth_requestAccounts",
		});
		const contractAddress = ContractAddress["polygon"]["Land"][0];
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		console.log(await provider.send("eth_requestAccounts", []));
		const signer = provider.getSigner();
		const contract = new ethers.Contract(contractAddress, AbiFile, signer);

		const tx = await contract.verifyUser(user_address, status);
		return tx;
	} catch (e) {
		console.log(e);
	}
};
