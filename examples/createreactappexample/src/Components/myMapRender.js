import React from "react";

//Google Maps API import
import { Status } from "@googlemaps/react-wrapper";

import { InfinitySpin } from "react-loader-spinner";

const myMapRender = (status) => {
    switch (status) {
      case Status.LOADING:
        return (
          <div>
            <h2>Loading Map</h2>
            <InfinitySpin 
              width='200'
              color="#4fa94d"
            />
          </div>
        );
      case Status.FAILURE:
        return (
          <div>
            <h1>Map Load Failed</h1>
          </div>
        );
      case Status.SUCCESS:
        return (
          <h1>Map loaded.</h1>
        ) ;
    }
  }

  export default myMapRender;