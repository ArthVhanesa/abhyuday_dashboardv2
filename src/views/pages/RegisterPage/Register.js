import React, { useState } from "react";
import { TextField, FormControl, Autocomplete, Button } from "@mui/material";
import { UserRegister } from "../../../functions/UserFunctions/UserRegister";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		name: "",
		email: "",
		aadharNumber: "",
		panNumber: "",
		address: "",
		mobile: "",
		city: "",
	});

	const styles = {
		form: {
			padding: "3rem",

			width: "50%",
			display: "flex",
			justifyContent: "space-between",
		},
	};

	const cities = [
		{ label: "Bharuch" },
		{ label: "Surat" },
		{ label: "Ahmedabad" },
		{ label: "Vadodara" },
		{ label: "Kutchh" },
	];

	const onSubmit = async () => {
		const tx = await UserRegister(user);
		if (tx) {
			navigate("/not_verified");
		}
	};

	return (
		<div className='flex justify-center h-screen'>
			<FormControl margin='normal' style={styles.form}>
				<p className='text-3xl w-full text-center mt-2'>Register</p>
				{/* form code goes here */}
				<TextField
					id='outlined-basic'
					label='Full Name'
					variant='outlined'
					value={user.name}
					onChange={(e) => setUser({ ...user, name: e.target.value })}
				/>
				<TextField
					id='outlined-basic'
					label='Email'
					variant='outlined'
					value={user.email}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
				/>
				<TextField
					id='outlined-basic'
					label='Phone_no'
					variant='outlined'
					type='number'
					value={user.mobile}
					onChange={(e) => setUser({ ...user, mobile: e.target.value })}
				/>
				<TextField
					id='outlined-basic'
					label='Aadhar No'
					variant='outlined'
					type='number'
					value={user.aadharNumber}
					onChange={(e) => setUser({ ...user, aadharNumber: e.target.value })}
				/>
				<TextField
					id='outlined-basic'
					label='Pan No'
					variant='outlined'
					type='text'
					value={user.panNumber}
					onChange={(e) => setUser({ ...user, panNumber: e.target.value })}
				/>
				<TextField
					id='outlined-basic'
					label='Address'
					multiline
					maxRows={4}
					value={user.address}
					onChange={(e) => setUser({ ...user, address: e.target.value })}
				/>
				<select
					onChange={(e) => setUser({ ...user, city: e.target.value })}
					value={user.city}>
					{cities.map((el) => (
						<option>{el.label}</option>
					))}
				</select>
				{/* <Button variant='contained' component='label'>
					Upload
					<input hidden accept='image/*' multiple type='file' />
				</Button> */}

				<Button variant='contained' component='label' onClick={onSubmit}>
					Submit
				</Button>
			</FormControl>
		</div>
	);
};

export default Register;
