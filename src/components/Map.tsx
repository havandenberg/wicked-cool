import * as React from "react";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";

const someLatLng = {
  lat: 55.751244,
  lng: 37.618423
};
export const googleMapURL = 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyClrgwfeUDNbNHdyRJfoFPJ' +
    'nOVFEySHvik';

const MapComponent = ({onMarkerClick, isMarkerShown} : {
    onMarkerClick: () => void,
    isMarkerShown: boolean
  }) => {
    const MyGoogleMap = withScriptjs(withGoogleMap(() => <GoogleMap
      defaultCenter={someLatLng}
      defaultZoom={16}
      onClick={onMarkerClick}
      options={{
      disableDefaultUI: true
    }}>
      {isMarkerShown && <Marker position={{
        lat: 43.57,
        lng: -71.44
      }}/>}
    </GoogleMap>));
    const loadingElement = <div/>;
    const containerElement = <div style={{
      height: '300px'
    }}/>;
    const mapElement = <div style={{
      height: '300px'
    }}/>;
    return (<MyGoogleMap
      loadingElement={loadingElement}
      containerElement={containerElement}
      googleMapURL={googleMapURL}
      mapElement={mapElement}/>);
  }

  interface State {
    isMarkerShown : boolean
  }

  class Map extends React.PureComponent < {},
  State > {
    state = {
      isMarkerShown: false
    }

    componentDidMount() {
      this.delayedShowMarker()
    }

    delayedShowMarker = () => {
      setTimeout(() => {
        this.setState({isMarkerShown: true})
      }, 3000)
    }

    handleMarkerClick = () => {
      this.setState({isMarkerShown: false})
      this.delayedShowMarker()
    }

    render() {
      return (<MapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}/>)
    }
  }

export default Map;
