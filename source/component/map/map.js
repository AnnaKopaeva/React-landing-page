import React from 'react'
import './map.sass'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import MarkerImg from './marker.png'

export class MapContainer extends React.Component {
    render() {
        return (
            <Map google={this.props.google}
                 zoom={14}
                 className="map-wrapper"
                 scrollwheel={false}>
                <Marker
                    name='Current location'
                    className="marker"
                    icon={{
                        url: MarkerImg,
                    }}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAZp_xAIXNQFuF9k5uG1MM4zumlDIAQLf0')
})(MapContainer)


