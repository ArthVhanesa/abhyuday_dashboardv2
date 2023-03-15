import { ethers } from "ethers";
import contractfileAddress from "../../constants/contract.json";
import AbiFile from "../../constants/Land.json";
import { create } from "ipfs";

export const UserLand = async () => {
  try {
    const ipfs = await create({
      host: "ipfs.infura.io",
      port: "5001",
      protocol: "https",
    });

    const textDecoder = new TextDecoder();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    console.log(accounts[0]);
    const address = contractfileAddress["polygon"]["Land"][0];

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    const contract = new ethers.Contract(address, AbiFile, signer);

    const UserLandsOnAccount = await contract.myAllLands(accounts[0]);

    console.log(UserLandsOnAccount);

    let datas = "";
    let landresponse = [];

    for (let i = 0; i < UserLandsOnAccount.length; i++) {
      for await (const chunk of ipfs.cat(UserLandsOnAccount[i])) {
        datas += textDecoder.decode(chunk).toString();
      }
      landresponse.push(JSON.parse(datas));
      datas = "";
    }

    return landresponse;
  } catch (e) {
    console.log(e.message);
  }
};
