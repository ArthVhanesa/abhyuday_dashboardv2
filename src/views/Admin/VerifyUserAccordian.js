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
import { getAllUsers } from "../../functions/GovermentOfficer/getAllUsers";
import { useNavigate, Link } from 'react-router-dom'

export default function ControlledAccordions()
{
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) =>
	{
		setExpanded(isExpanded ? panel : false);
	};

	const [allUsersData, setAllUsersData] = useState([]);
	const [loading, setLoading] = useState(true)
	useEffect(() =>
	{

		const get_users = async () =>
		{
			const res = await getAllUsers();
			console.log(res);
			setAllUsersData(res);
			setLoading(false)
			console.log(allUsersData);
		};
		get_users();

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
			<MainCard title='Verify user'>
				{
					allUsersData && allUsersData.map((item) => (
						<div className="w-full inline-flex align-middle justify-between p-2 border-2 border-blue-600 rounded-lg m-2">
							<p>{item.ipfs_content.name}</p>
							<p>{item.ipfs_content.aadharNumber}</p>
							<Link to={`/admin/users/${item.id}`}>
								<Button variant='contained'
									sx={{
										width: "120px",
										border: 1,
										color: "black",
										bgcolor: "#E3F2FD",
									}}>
									View user
								</Button>
							</Link>
						</div>
					))
				}

			</MainCard>
		</>
	);
}
