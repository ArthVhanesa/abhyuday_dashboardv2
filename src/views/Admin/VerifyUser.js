import React, { useState, useEffect } from "react";

import { Box, Button, CircularProgress } from "@mui/material";
import { getAllUsers } from "../../functions/GovermentOfficer/getAllUsers";
import { GetUserDetails } from "../../functions/UserFunctions/getUserDetails";
import { VerifyUser } from "../../functions/GovermentOfficer/VerifyUser";
import { useParams } from "react-router-dom";
import MainCard from "../../ui-component/cards/MainCard"

const Verify_User = () =>
{


  const { id } = useParams();
  console.log(id);
  const [allUsersData, setAllUsersData] = useState(null);
  const [loading, setLoading] = useState(true);

  const styles = {
    profile: {
      backgroundColor: "white",
    },
  };

  useEffect(() =>
  {
    const get_users = async () =>
    {
      const res = await GetUserDetails(id);
      setLoading(false);
      console.log(res);
      setAllUsersData(res);
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
      {allUsersData && (
        <div className="w-full rounded-md mt-5" style={styles.profile}>
          <div className="justify-between flex flex-col p-6 ">
            <p className="team text-xl text-gray-600 font-bold">User Details</p>
            <p className="team text-md pt-4 pb-1  text-gray-600">
              <span className="font-semibold">Name: </span>
              {allUsersData.ipfs_content.name}
            </p>
            <p className="team text-md py-1  text-gray-600">
              <span className="font-semibold">Email: </span>
              {allUsersData.ipfs_content.email}
            </p>
            <p className="team text-md py-1  text-gray-600 text-md">
              <span className="font-semibold">City:</span>
              {allUsersData.ipfs_content.city}
            </p>
            <p className="team text-md py-1 text-gray-600">
              <span className="font-semibold">Address:</span>
              {allUsersData.ipfs_content.address}
            </p>
            <p className="team text-md py-1 text-gray-600">
              <span className="font-semibold">Aadhar NO: </span>
              {allUsersData.ipfs_content.aadharNumber}
            </p>
            <p className="team text-md py-1 text-gray-600">
              <span className="font-semibold">PAN NO: </span>
              {allUsersData.ipfs_content.panNumber}
            </p>
          </div>
        </div>
      )}

      <Box textAlign="center" marginY="1.25rem" marginX="40px">
        <Button
          onClick={async () =>
          {
            if (allUsersData)
            {
              console.log(await VerifyUser(allUsersData.wallet_address, 0));
            }
          }}
          variant="contained"
          color="success"
          sx={{
            width: "120px",
            border: 1,
            color: "black",
            bgcolor: "#28a745",
            marginRight: "50px",
          }}
        >
          Verify
        </Button>
        <Button
          onClick={async () =>
          {
            if (allUsersData)
            {
              console.log(await VerifyUser(allUsersData.wallet_address, 1));
            }
          }}
          variant="contained"
          color="error"
          sx={{
            width: "120px",
            border: 1,
            color: "black",
            bgcolor: "#E3F2FD",
          }}
        >
          Reject
        </Button>
      </Box>
    </>
  );
};

export default Verify_User;
