import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  Grid,
  Button,
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
import { UserSentLandRequests } from "../../../functions/LandAssets/UserSentLandRequests";
import { MakePayment } from "functions/LandAssets/MakePayment";

export default function LandAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const [userLands, setUserLands] = useState([]);
  const [userData, setUserData] = useState({});
  const [isForSell, setIsForSell] = useState();
  const [requests, setRequests] = useState(null);
  const navigate = useNavigate();

  // useeffect call for land data
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const make_payment = async (reqID) => {
    const govFees = 10; // fetch from IPFS
    const tx = await MakePayment(reqID, govFees);
    if (tx) {
      // success
      console.log(tx);
    } else {
      // fails
      console.log("ERROR");
    }
  };

  useEffect(() => {
    const get_requests = async () => {
      const requests = await UserSentLandRequests();
      setRequests(requests);
      console.log(requests);
    };

    get_requests();
  }, []);

  return (
    <>
      <MainCard title="Land details">
        {requests &&
          requests.map((item, idx) => (
            <Accordion
              key={idx}
              expanded={expanded === `${item.id}`}
              onChange={handleChange(`${item.id}`)}
            >
              <AccordionSummary
                sx={{ "&:hover": { bgcolor: "#EDE7F6" }, borderRadius: "12px" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box sx={{ width: "60%", flexShrink: 0 }}>
                  <Typography
                    sx={{ fontSize: "18px", color: "black" }}
                    className="text-black"
                  >
                    {item.ipfs_content.address}
                  </Typography>
                </Box>
                {/* <Box sx={{
              width: '20%', flexShrink: 0, alignItems: "center",
              justifyContent: "center", display: "flex"
            }}>
              <Typography>For sell/Not for sell</Typography>
            </Box> */}
                <Box
                  sx={{
                    width: "20%",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Typography className="text-black">
                    {item.ipfs_content.area}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "20%",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Typography className="text-black"></Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ borderRadius: "20px" }}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "left",
                        width: "100%",
                        height: "250px",
                        borderRadius: "20px",
                        bgcolor: "white",
                        padding: "20px",
                      }}
                    >
                      <Typography>Total area: </Typography>
                      <Typography>Total price: </Typography>
                      {item.govApprovalStatus === 1 &&
                      item.requestStatus === 1 ? (
                        <Button
                          onClick={() => make_payment(item.id)}
                          variant=""
                          sx={{ width: "120px", border: 1 }}
                        >
                          Make Payment
                        </Button>
                      ) : (
                        ""
                      )}
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "20px",
                        bgcolor: "white",
                        border: 1,
                      }}
                    ></Box>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}

        {/* <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Personal data
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </MainCard> 
    </>
  );
}
