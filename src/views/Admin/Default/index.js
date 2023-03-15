import { useEffect, useState } from "react";

// material-ui
import { Accordion, Grid } from "@mui/material";

// project imports
import EarningCard from "../../dashboard/Default/EarningCard";
import PopularCard from "../../dashboard/Default/PopularCard";
import TotalOrderLineChartCard from "../../dashboard/Default/TotalOrderLineChartCard";
import TotalIncomeDarkCard from "../../dashboard/Default/TotalIncomeDarkCard";
import TotalIncomeLightCard from "../../dashboard/Default/TotalIncomeLightCard";
import TotalGrowthBarChart from "../../dashboard/Default/TotalGrowthBarChart";
import AccordionDashboard from "../../Admin/VerifyUserAccordian";
import { gridSpacing } from "store/constant";



// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {

	




	return (
		<Grid container spacing={gridSpacing}>
			<Grid item xs={12}>
				<Grid container spacing={gridSpacing}>
					{/* <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} />
                    </Grid> */}


					{/* 3 card for dashboard */}



					{/* <Grid item lg={4} md={6} sm={6} xs={12}>
						<TotalOrderLineChartCard  />
					</Grid>
					<Grid item lg={4} md={6} sm={6} xs={12}>
						<TotalOrderLineChartCard  />
					</Grid>
					<Grid item lg={4} md={6} sm={6} xs={12}>
						<TotalOrderLineChartCard  />
					</Grid> */}


					{/* dont delete code betweeen this comments  */}


					
					{/* <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid> */}
				</Grid>
			</Grid>
			<Grid item xs={12}>
				{/* <Grid container spacing={gridSpacing}> */}
				<Grid item xs={12} md={12}>
					{/* <TotalGrowthBarChart isLoading={isLoading} /> */}

			
					<AccordionDashboard />
					
				</Grid>
				{/* <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid> */}
				{/* </Grid> */}
			</Grid>
		</Grid>
	);
};

export default Dashboard;
