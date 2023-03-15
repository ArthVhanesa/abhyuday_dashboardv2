import { ethers } from "ethers";
import AbiFile from "../../constants/Land.json";
import ContractAddress from "../../constants/contract.json";
import IPFS from "../utility/ReadDatsFromIPFS";

export const AddNewLand = async (price, land_content) => {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts[0]);
    const address = ContractAddress["polygon"]["Land"][0];

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    const contract = new ethers.Contract(address, AbiFile, signer);
    // const len = await contract.getAllLandList();
    // console.log(len);
    // console.log(parseInt(len, 10));

    const landCid = await IPFS.upload_data({
      content: JSON.stringify(land_content),
    });


    // INR
    // INR => MATIC
    // git

    const land_price = price;
    const matic = Math.round(land_price / 101.29);
    const price = ethers.utils.parseEther(`${matic}`);

    if (landCid === "") {
      throw Error("IPFS Land record storing failed, due to some error");
    }
    
    const LandRegister = await contract.addNewLand(
      land_price,
      landCid
    );

    console.log(LandRegister);
    window.alert("Land Successfully registered");
    return LandRegister;
  } catch (e) {
    console.log(e.message);
  }
};
