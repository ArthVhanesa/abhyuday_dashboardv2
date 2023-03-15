import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import
  {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    Box,
    Grid,
    Button,
    CircularProgress
  } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AlignHorizontalCenter } from "@mui/icons-material";
import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";
import Map from "../../../ui-component/Map";
import { useNavigate } from "react-router-dom";

// function calls
import { UserLand } from "functions/UserFunctions/UserLand";
import { GetUserDetails } from "functions/UserFunctions/getUserDetails";
import { logDOM } from "@testing-library/react";
import { GetUserLandDetails } from "../../../functions/LandAssets/GetUserLandDetails";
import { ChangeLandSellStatus } from "../../../functions/LandAssets/ChangeLandSellStatus";
import { getLandDetailsById } from "../../../functions/GovermentOfficer/getLandDetails";

export default function LandAccordions()
{
  const [expanded, setExpanded] = React.useState(false);
  const [land, setLand] = useState(null);
  const [userData, setUserData] = useState({});
  const [isForSell, setIsForSell] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const { id } = useParams();
  const handleChange = (panel) => (event, isExpanded) =>
  {
    setExpanded(isExpanded ? panel : false);
  };

  // useeffect call for land data
  const changeStatus = async (land_id, st) =>
  {
    const status = await ChangeLandSellStatus(land_id, 1);
    console.log(status);
  };

  useEffect(() =>
  {
    const get_data = async () =>
    {
      const _land = await getLandDetailsById(id);
      setLand(_land);
      setIsLoading(false);
      console.log(_land);
    };

    get_data();
  }, []);

  if (isLoading)
  {

    return (
      <MainCard title="Land details">
        <div className="w-full flex justify-center">
          <CircularProgress />
        </div>
      </MainCard>
    );
  }
  return (
    <>
      {land && (
        <div className="w-full h-full rounded-md">
          <div className="w-full grid grid-cols-2 p-8 gap-4 h-full">
            <div className="justify-between flex flex-col p-6 border-r-2 border-dashed">
              <p className="team text-md  text-gray-600">
                <span className="font-semibold">Physical number </span>
                {land.ipfs_content.physical_number}
              </p>
              <p className="team text-md  text-gray-600">
                <span className="font-semibold">Address </span>
                {land.ipfs_content.land_address}
              </p>
              <p className="team text-md  text-gray-600 text-md">
                <span className="font-semibold">Taluka: </span>
                sendonvaibhav.chauhan@gmail.com
              </p>
              <p className="team text-md  text-gray-600">
                <span className="font-semibold">District: </span>
                sendonvaibhav.chauhan@gmail.com
              </p>
              <p className="team text-md  text-gray-600">
                <span className="font-semibold">District: </span>
                sendonvaibhav.chauhan@gmail.com
              </p>
              <p className="team text-md  text-gray-600">
                <span className="font-semibold">District: </span>
                sendonvaibhav.chauhan@gmail.com
              </p>
              <Button
                variant="contained"
                sx={{
                  width: "120px",
                  border: 1,
                  color: "black",
                  bgcolor: "#E3F2FD",
                }}
                onClick={() => changeStatus(land.id)}
              >
                Make Available For Sale
              </Button>
            </div>
            <div className=" flex flex-col justify-center">
              <Map />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
