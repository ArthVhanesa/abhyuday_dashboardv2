import { ethers } from "ethers";
import { create } from "ipfs";
import AbiFile from "../../constants/Land.json";
import ContractAddress from "../../constants/contract.json";
import { UserLand } from "functions/UserFunctions/UserLand";
import IPFS from "../../functions/utility/ReadDatsFromIPFS";

export const GetUserLandDetails = async () => {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts[0]);
    const address = ContractAddress["31337"]["Land"][0];
    // console.log(accounts[0]);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, AbiFile, signer);

    const MyAllLands = await contract.myAllLands(signer.getAddress());
    // const MyAllLands = allLands.map((el) => parseInt(el, 10));
    // console.log(MyAllLands);

    const AllLandDetails = [];

    for (let i = 0; i < MyAllLands.length; i++) {
      let datas = "";
      const Details = await contract.getLandDetailsById(
        parseInt(MyAllLands[i], 10)
      );
      // console.log(Details);

      if (Details.cid.toString().length > 0) {
        const data = await IPFS.read_data(Details.cid);
        console.log(data)
        const json = JSON.parse(data.content);
        // console.log(json);


        AllLandDetails.push({
          id: parseInt(MyAllLands[i], 10),
          landPrice: parseInt(Details.landPrice, 10),
          ownerAddress: Details.ownerAddress,
          isForSell: Details.isForSell,
          isLandVerfied: Details.isLandVerified,
          Area: json.area,
          Address: json.land_address,
          GeoJson: json.geo_json,
          Transctions: json.transactions,
          PID: json.property_id,
          PhysicalNumber: json.physical_number,
        });
      }
    }

    const _ = await Promise.all(AllLandDetails);
    return _;
  } catch (e) {
    console.log(e.message);
  }
};
