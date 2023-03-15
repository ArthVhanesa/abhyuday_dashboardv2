import React, { useEffect, useState } from "react";
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
import Map from "../../ui-component/Map";
import { useNavigate, useParams } from "react-router-dom";
import { getAllLands } from "../../functions/GovermentOfficer/getAllLandsList";

export default function ControlledAccordions()
{
  const [expanded, setExpanded] = React.useState(false);
  const [allLands, setAllLands] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (panel) => (event, isExpanded) =>
  {
    setExpanded(isExpanded ? panel : false);
  };

  const navigate = useNavigate();

  function handleClick(id)
  {
    navigate(`/admin/lands/${id}`);
  }

  useEffect(() =>
  {
    const get_lands = async () =>
    {
      const lands = await getAllLands();
      setAllLands(lands);
      setLoading(false);
    };

    get_lands();
  }, []);


  if (loading)
    return (
      <MainCard title="Land details" >
        <div className="w-full flex justify-center">
          <CircularProgress />
        </div>
      </MainCard>
    )

  return (
    <>
      <MainCard title="Verify land">
        {allLands &&
          allLands.map((item, idx) =>
          {
            return (
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
                      {item.ipfs_content.land_address}
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
                    <Typography>{item.ipfs_content.area}</Typography>
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
                          Total price: {parseInt(item.landPrice, 10)}
                        </Typography>

                        <Button
                          onClick={() =>
                            handleClick(parseInt(item.id, 10))
                          }
                          variant="contained"
                          sx={{
                            width: "120px",
                            border: 1,
                            color: "black",
                            bgcolor: "#E3F2FD",
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
                        }}
                      >
                        <Map />
                      </Box>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            );
          })}
      </MainCard>
    </>
  );
}
