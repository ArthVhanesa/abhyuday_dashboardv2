import React from "react";
import { Avatar } from "@mui/material";

const ProfileLayout = () => {
	const styles = {
		profile: {
			backgroundColor: "white",
		},
	};

	return (
		<div>
			<div classNmae='w-screen h-screen  p-8 rounded-sm' style={styles.profile}>
				{/* first card of profile with avatar */}
				<div className='w-full grid grid-cols-2 p-8 gap-4'>
					<div className=' w-full flex flex-row justify-evenly p-6 border-r-2 border-dashed'>
						{/* avatar div */}
						<Avatar
							alt='Remy Sharp'
							src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
							sx={{ height: 100, width: 100 }}
						/>
						<div className='flex flex-col justify-start'>
							<p className='name text-xl font-semibold'>Vaibhav Chauhan</p>
							<p className='team text-md  text-gray-600 font-semibold'>
								sendonvaibhav.chauhan@gmail.com
							</p>
							<p className='role text-md mt-2 text-gray-600 font-semibold'>
								+919913180135
							</p>
						</div>
					</div>
					<div className=' flex flex-col justify-center p-8  '>
						<div className='flex flex-row justify-between mt-2'>
							<p className='text-md font-semibold'>Aadhar NO:</p>
							<p className='text-md text-gray-600 font-semibold'>
								607936766738
							</p>
						</div>
						<div className='flex flex-row justify-between mt-2'>
							<p className='text-md font-semibold'>PAN NO:</p>
							<p className='text-md text-gray-600 font-semibold'>GDRPP3640H</p>
						</div>
						<div className='flex flex-row justify-between mt-2'>
							<p className='text-md font-semibold'>City:</p>
							<p className='text-md text-gray-600 font-semibold'>Bharuch</p>
						</div>
						<div className='flex flex-row justify-between mt-2'>
							<p className='text-md font-semibold'>Address:</p>
							<p className='text-md text-gray-600 font-semibold break-all'>
								A/11, Siddhivinayak Society, Bharuch - 392001
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileLayout;
