import React, { useState, useEffect } from "react";
import
{
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
	Box,
	Grid,
	TextField,
	Button,
} from "@mui/material";
import { ethers } from "ethers";
import { searchLandById } from '../../../functions/LandAssets/searchLandById'
import Map from '../../pages/BuyLand/BuyLand.js'

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AlignHorizontalCenter } from "@mui/icons-material";
import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";
// import Map from "../../";
import { useNavigate } from "react-router-dom";
import { RaiseRequest } from '../../../functions/LandAssets/RaiseRequest'

const SearchLand = () =>
{
	const [expanded, setExpanded] = useState(false);
	const [land, setLand] = useState(null);
	const [landID, setLandID] = useState(0);
	const onclick = async () =>
	{
		const _land = await searchLandById(landID);
		setLand(_land);
		console.log(_land);
	};

	const makeLandRequest = async (landID) =>
	{
		console.log(landID);
		const status = await RaiseRequest(landID);

		if (status)
		{
			console.log("success");
		} else
		{
			console.log("failed")
		}
	}

	const handleChange = (panel) => (event, isExpanded) =>
	{
		setExpanded(isExpanded ? panel : false);
	};


	return (
		<div className="h-screen">
			<TextField
				id="outlined-basic"
				labland="Land ID"
				variant="outlined"
				type="number"
				value={landID}
				onChange={(e) => setLandID(e.target.value)}
			/>
			<br />
			<Button onClick={() => onclick()} variant="contained" component="labland" className="mt-4">
				Submit
			</Button>

			{land &&


				<Accordion
					expanded={expanded === `${parseInt(land.id, 10)}`}
					onChange={handleChange(`${parseInt(land.id, 10)}`)}
				>
					<AccordionSummary
						sx={{ "&:hover": { bgcolor: "#EDE7F6" }, borderRadius: "12px" }}
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panland1bh-content"
						id="panland1bh-header"
					>
						<Box sx={{ width: "60%", flexShrink: 0 }}>
							<Typography
								sx={{ fontSize: "18px", color: "black" }}
								className="text-black"
							>
								{land.ipfs_content.land_address}
							</Typography>
						</Box>
						{/* <Box sx={{
width: '20%', flexShrink: 0, alignItems: "center",
justifyContent: "center", display: "flex"
}}>
<Typography>For slandl/Not for slandl</Typography>
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
							<Typography className="text-black">{land.area}</Typography>
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
								{`${101.29 * (parseInt(land.sellingPrice, 10) / Math.pow(10, 18))}`}
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
									{/* <Typography>Total area: {land.Area}</Typography>
									<Typography>Total price: {land.landPrice} </Typography> */}

									<Button
										variant=""
										sx={{ width: "120px", border: 1 }}
										onClick={() => makeLandRequest(parseInt(land.id, 10))}
									>
										Make Request
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




			}
		</div >


	)


}

export default SearchLand;
