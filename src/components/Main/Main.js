import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet';
import havemask from '../../icon/havemask.svg';
import nomask from '../../icon/nomask.svg';
import "./main.css"

const haveMask = new Icon({
    iconUrl: havemask,
    iconSize: [50, 50]
});

const noMask = new Icon({
    iconUrl: nomask,
    iconSize: [50, 50]
});

function Main({ sliceData, position }) {
    return (
        <Map center={position} zoom={16} id="map">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {
                sliceData.map(data => {
                    const { coordinates } = data.geometry;
                    const { name, id } = data.properties;
                    const positionM = [coordinates[1], coordinates[0]];
                    return (
                        <Marker
                            position={positionM}
                            key={id}
                            id={id}
                            icon={
                                data.properties["mask_adult"] === 0 || data.properties["mask_child"] === 0 ?
                                    noMask : haveMask
                            }
                        >
                            <Popup>
                                <h2>{name}</h2>
                                <h3>成人: {data.properties["mask_adult"]}/ 小孩: {data.properties["mask_child"]}</h3>
                            </Popup>
                                )
                            }
                        </Marker>
                    )
                })
            }
        </Map >
    )
}

export default Main 