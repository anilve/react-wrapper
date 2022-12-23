import React from "react";
import "../App.css";

const google = window.google = window.google ? window.google : {}

class MyMapViewer extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        new window.google.maps.Map(this.myRef.current, {
            center: this.props.center,
            zoom: this.props.zoom,
            mapTypeId: 'terrain'
        });
    }

    render() {
        return (
            <div ref={this.myRef} id="map" className="MapViewStyle" >
            </div>
        );
    }
}

export default MyMapViewer;
