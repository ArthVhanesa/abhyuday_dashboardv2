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
import { UserReceivedLandRequests } from "../../../functions/LandAssets/UserRecievedLandRequest";
import { AcceptRequest } from "../../../functions/LandAssets/AcceptRequests";
import { RejectRequest } from "../../../functions/LandAssets/RejectRequest";

export default function LandAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const [userLands, setUserLands] = useState([]);
  const [userData, setUserData] = useState({});
  const [isForSell, setIsForSell] = useState();
  const navigate = useNavigate();
  const [requests, setRequests] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accept_request = async (reqID) => {
    console.log(reqID);
    const status = await AcceptRequest(reqID);
    if (status) {
      // success
      console.log(status);
    } else {
      console.log("Error");
    }
  };

  const reject_request = async (reqID) => {
    const status = await RejectRequest(reqID);
    if (status) {
      // success
      console.log(status);
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    const get_data = async () => {
      const requests = await UserReceivedLandRequests();
      setRequests(requests);
    };

    get_data();
  }, []);

  return (
    <>
      <MainCard title="Land details">
        {requests &&
          requests.map((item, idx) => (
            <Accordion
              key={idx}
              expanded={expanded === `${parseInt(item.requestID, 10)}`}
              onChange={() => handleChange(`${parseInt(item.requestID, 10)}`)}
            >
              <AccordionSummary
                sx={{
                  "&:hover": { bgcolor: "#EDE7F6" },
                  borderRadius: "12px",
                }}
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

                  <Button
                    onClick={() => accept_request(parseInt(item.requestID, 10))}
                    variant=""
                    sx={{ width: "120px", border: 1 }}
                  >
                    Accept Request
                  </Button>

                  <Button
                    onClick={() => reject_request(parseInt(item.requestID, 10))}
                    variant=""
                    sx={{ width: "120px", border: 1 }}
                  >
                    Reject Request
                  </Button>
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

                      {/* <Button
                        onClick={() => accept_request(item.req_id)}
                        variant=""
                        sx={{ width: "120px", border: 1 }}
                      >
                        Accept Request
                      </Button>

                      <Button
                        onClick={() => reject_request(item.req_id)}
                        variant=""
                        sx={{ width: "120px", border: 1 }}
                      >
                        Reject Request
                      </Button> */}
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
      x
    </>
  );
}
