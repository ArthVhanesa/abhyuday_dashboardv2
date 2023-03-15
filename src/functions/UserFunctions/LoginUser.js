import { ethers } from "ethers";
import contractfileAddress from "../../constants/contract.json";
import AbiFile from "../../constants/Land.json";

export const LoginUser = async () => {
  if (window.ethereum) {
    console.log("Detected");
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts[0]);
      const address = contractfileAddress["polygon"]["Land"][0];
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(address, AbiFile, signer);
      const checkForUser = await contract.isUserExists();
      console.log(checkForUser);
      if (checkForUser.isExists) {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/register";
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("Not Detected");
  }
};
