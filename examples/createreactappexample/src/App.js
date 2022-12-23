import React from "react";
import myMapRender from "./Components/myMapRender";
import MyMapViewer from "./Components/myMapViewer";

//Google Maps API import
import { Wrapper } from "@googlemaps/react-wrapper";

function App() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  return (
    <Wrapper apiKey={"API-KEY"} render={myMapRender}>
        <MyMapViewer center={center} zoom={zoom} />
    </Wrapper>
  );
}

export default App;
