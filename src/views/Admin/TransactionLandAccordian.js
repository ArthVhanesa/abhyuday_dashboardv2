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
import Map from "../../ui-component/Map";
import { getAllRequests } from "../../functions/GovermentOfficer/getAllRequests.js";
import { VerifyTransction } from "../../functions/GovermentOfficer/VerifyTransction";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const [requests, setRequests] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const approve = async (req_id) => {
    console.log(req_id);
    const status = VerifyTransction(req_id, 1);
    if (status) {
      // success
      console.log(status);
    } else {
      console.log("Error");
    }
  };
  
  const reject = async (req_id) => {
    console.log(req_id);
    const status = VerifyTransction(req_id, 2);
    if (status) {
      // success
      console.log(status);
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    const get_request = async () => {
      const d = await getAllRequests();
      const filtered = d.filter((el) => {
        if (el.requestStatus === 1 && el.govApprovalStatus === 0) {
          return true;
        }
        return false;
      });
      console.log(filtered);
      setRequests(filtered);
    };

    get_request();
  }, []);

  return (
    <>
      <MainCard title="Transaction land">
        {requests &&
          requests.map((item, idx) => (
            <Accordion
              key={idx}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
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
                <Box sx={{ width: "50%", flexShrink: 0 }}>
                  <Typography sx={{ fontSize: "18px", color: "black" }}>
                    {item.ipfs_content.physical_number}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    {/* Buyer ID: {item.buyerId} */}
                    {/* Seller ID: {item.sellerId} */}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "18%",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Typography>
                    Payment done: {item.isPaymentDone ? "YES" : "NO"}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "18%",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Typography>{parseInt(item.landPrice, 10)}</Typography>
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
                      <Typography>
                        Total area: {item.ipfs_content.area}
                      </Typography>
                      <Typography>
                        {/* Total price: {parseInt(item.landPrice, 10)} */}
                      </Typography>

                      <Accordion
                        key={idx}
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
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
                          <Box sx={{ width: "50%", flexShrink: 0 }}>
                            <Typography
                              sx={{ fontSize: "18px", color: "black" }}
                            >
                              {/* {item.ipfs_content.physical_number} */}
                            </Typography>
                            <Typography sx={{ color: "text.secondary" }}>
                              {/* {item.ipfs_content.land_address} */}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              width: "18%",
                              flexShrink: 0,
                              alignItems: "center",
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            {/* <Typography>{item.ipfs_content.area}</Typography> */}
                          </Box>
                          <Box
                            sx={{
                              width: "18%",
                              flexShrink: 0,
                              alignItems: "center",
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            <Button
                              onClick={() =>
                                approve(parseInt(item.requestID, 10))
                              }
                              variant=""
                              sx={{ width: "120px", border: 1 }}
                            >
                              Accept Request
                            </Button>

                            <Button
                              onClick={() =>
                                reject(parseInt(item.requestID, 10))
                              }
                              variant=""
                              sx={{ width: "120px", border: 1 }}
                            >
                              Reject Request
                            </Button>
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
                                <Typography>
                                  Total area: {item.ipfs_content.area}
                                </Typography>
                                <Typography>
                                  Total price: {parseInt(item.landPrice, 10)}
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={6}>
                              <Box
                                sx={{
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "20px",
                                  bgcolor: "white",
                                }}
                              >
                                <Map />
                              </Box>
                            </Grid>
                          </Grid>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "20px",
                        bgcolor: "white",
                      }}
                    >
                      <Map />
                    </Box>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
      </MainCard>
    </>
  );
}
