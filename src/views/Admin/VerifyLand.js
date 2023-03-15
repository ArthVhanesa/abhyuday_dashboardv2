import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { getLandDetailsById } from "../../functions/GovermentOfficer/getLandDetails";
import { verifyLand } from "../../functions/GovermentOfficer/VerifyLand";

const VerifyLand = () =>
{

  const [data, setData] = useState({})

  const verify = async (land_id) =>
  {
    console.log(land_id);
    const status = await verifyLand(land_id);
    // const status = VerifyLand(land_id, 1);
    if (status)
    {
      // success
      console.log(status);
    } else
    {
      console.log("Error");
    }
  };

  const styles = {
    profile: {
      backgroundColor: "white",
    },
  };
  const { id } = useParams();

  useEffect(() =>
  {
    const get_data = async () =>
    {
      const d = await getLandDetailsById(id);
      setData(d);
      console.log(d);
    };
    get_data();
  }, []);

  return (
    <>
      {/* <div className="w-full rounded-md" style={styles.profile}>
        <div className="justify-between flex flex-col p-6 ">
          <p className="team text-xl text-gray-600 font-bold">
            LD college of engineering
          </p>
          <p className="team text-md pt-4 pb-1  text-gray-600">
            <span className="font-semibold">Total area: </span>
            sendonvaibhav.chauhan@gmail.com
          </p>
          <p className="team text-md py-1  text-gray-600">
            <span className="font-semibold">Total price: </span>
            sendonvaibhav.chauhan@gmail.com
          </p>
          <p className="team text-md py-1  text-gray-600 text-md">
            <span className="font-semibold">Taluka: </span>
            sendonvaibhav.chauhan@gmail.com
          </p>
          <p className="team text-md py-1 text-gray-600">
            <span className="font-semibold">District: </span>
            sendonvaibhav.chauhan@gmail.com
          </p>
          <p className="team text-md py-1 text-gray-600">
            <span className="font-semibold">District: </span>
            sendonvaibhav.chauhan@gmail.com
          </p>
          <p className="team text-md py-1 text-gray-600">
            <span className="font-semibold">District: </span>
            sendonvaibhav.chauhan@gmail.com
          </p>
        </div>
      </div> */}

      {/* Owner Details */}
      {data &&
        <div className="w-full rounded-md mt-5" style={styles.profile}>
          <div className="justify-between flex flex-col p-6 ">
            <p className="team text-xl text-gray-600 font-bold">Owner Details</p>
            <p className="team text-md pt-4 pb-1  text-gray-600">
              <span className="font-semibold">Owner Name:user </span>

            </p>
            <p className="team text-md py-1  text-gray-600">
              <span className="font-semibold">Total price: </span>
            5,00,000 INR
            </p>
            <p className="team text-md py-1  text-gray-600 text-md">
              <span className="font-semibold">Taluka: </span>
               Olpad
            </p>
            <p className="team text-md py-1 text-gray-600">
              <span className="font-semibold">District: </span>
           Surat
            </p>
            <p className="team text-md py-1 text-gray-600">
              <span className="font-semibold">State: </span>
              Gujarat
            </p>
          </div>
        </div>
      }
      {/* Documents */}

      <Box textAlign="center" marginY="1.25rem" marginX="40px">
        <Button
          variant="contained"
          color="success"
          sx={{
            width: "120px",
            border: 1,
            color: "black",
            bgcolor: "#28a745",
            marginRight: "50px",
          }}
          onClick={() => verify(parseInt(id))}
        >
          Verify
        </Button>
        <Button
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

export default VerifyLand;
