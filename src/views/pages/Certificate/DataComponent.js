import React from "react";
import image from "./logo.png";
class DataComponent extends React.Component {
  render(){
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      return(
          <div>
          {/* logo */}
          <img src={image} alt="" className="w-auto h-20 mx-auto mt-4" />
          <p className="text-center text-black text-lg">Revenue Department</p>
          <p className="text-center text-black text-md">Government Of India</p>
  
          {/* header */}
          <h1 className="text-center text-4xl text-black header font-semibold mt-10">
            Transfer Certificate of Land
          </h1>
          <p className="text-center text-black text-lg reg-font font-medium mt-2">
            Transfer ID : 0001
          </p>
  
          {/* data */}
          <p className="text-black indent-5 font-serif mt-4 text-base w-11/12 mx-auto">
            It is herby certified that certain land situated in Gujarat
            University, Navarangpura, Ahmedabad bounded and described as follow
          </p>
          <p className="text-black mt-1 text-base w-11/12 mx-auto">
            <span className="font-medium">Survey No:</span>129/a
          </p>
          <p className="text-black text-base w-11/12 mx-auto">
            <span className="font-medium">Survey No:</span>129/a
          </p>
          <p className="text-black font-serif mt-1 text-base w-11/12 mx-auto">
            is register in accordance with the provision of the Property
            Registratation Decree in the name of
          </p>
          <p className="text-black font-medium text-base w-11/12 mx-auto">
            Owner: Heet Mohanlal Senghani
          </p>
          <p className="text-black font-serif text-base w-11/12 mx-auto">
            as owner thereof in fee simple, subject to such of the encumbrances
            mentioned in section 44 of said Decree as may be subsisiting.
          </p>
          <p className="text-black indent-5 mt-4 font-serif text-base w-11/12 mx-auto">
            It is further certified that said land specification as follow :
          </p>
          <p className="text-black mt-1 text-base w-11/12 mx-auto">
            <span className="font-medium">Type: </span>Agriculture
          </p>
          <div className="flex justify-end mr-10 mt-10 mb-10">
            <div className="w-1/5  flex-col">
              <p className=" text-black font-medium text-center ">President</p>
              <p className="text-black text-center">Revenue Department</p>
            </div>
          </div>
          <p className="text-center">
            {hour}:{minute}:{second} {day}/{month}/{year}
          </p>
          </div>
      )
    }
}

export default DataComponent;