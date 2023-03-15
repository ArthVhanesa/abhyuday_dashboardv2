import { ethers } from "ethers";
import contractfileAddress from "../../constants/contract.json";
import AbiFile from "../../constants/Land.json";
import IPFS from "../../functions/utility/ReadDatsFromIPFS";

export const getAllLands = async () => {
	try {
		const accounts = await window.ethereum.request({
			method: "eth_requestAccounts",
		});

		const address = contractfileAddress["polygon"]["Land"][0];
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(address, AbiFile, signer);

		const landIndexes = await contract.getAllLandList();
		console.log(landIndexes);

		const lands = landIndexes.map(async (el, idx) => {
			const id = parseInt(el, 10);
			const land = await contract.lands(id);
			return land;
		});
		const all_lands = await Promise.all(lands);
		console.log(all_lands);

		const get_promises = all_lands.map(async (land, idx) => {
			const { cid } = land;
			const data = await IPFS.read_data(cid);
			console.log(data);
			const json = JSON.parse(data.content);
			return {
				...land,
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
