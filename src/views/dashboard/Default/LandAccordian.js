import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  Grid,
  Button,
  CircularProgress,
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

export default function LandAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const [userLands, setUserLands] = useState([]);
  const [userData, setUserData] = useState({});
  const [isForSell, setIsForSell] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const ViewLand = (id) => {
    navigate(`/dashboard/lands/${id}`);
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // useeffect call for land data
  const changeStatus = async (land_id, st) => {
    const status = await ChangeLandSellStatus(land_id, st ? 1 : 0);
    console.log(status);
  };

  useEffect(() => {
    const get_data = async () => {
      const lands = await GetUserLandDetails();
      setUserLands(lands);
      setIsLoading(false);
    };

    get_data();
  }, []);

  console.log(userLands);
  if (isLoading) {
    console.log("done");
    return (
      <MainCard title="Land details">
        <div className="w-full flex justify-center">
          {/* <PulseLoader color="#1e88e5" /> */}
          <CircularProgress />
        </div>
      </MainCard>
    );
  }
  return (
    <>
      <MainCard title="Land details">
        {userLands.length > 0 &&
          userLands.map((el) => (
            <Accordion
              expanded={expanded === `${el.id}`}
              onChange={handleChange(`${el.id}`)}
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
                    {el.Address}
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
                  <Typography className="text-black">{el.Area}</Typography>
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
                  <Typography className="text-black">
                    {el.landPrice}/-
                  </Typography>
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
                      <Typography>Total area: {el.Area}</Typography>
                      <Typography>Total price: {el.landPrice} </Typography>

                      <Button
                        variant=""
                        sx={{ width: "120px", border: 1 }}
                        onClick={() => {
                          ViewLand(el.id);
                        }}
                      >
                        View land
                      </Button>
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
