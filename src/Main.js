import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import "./main.css"

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
                    const { name, phone, id, address } = data.properties;
                    const positionM = [coordinates[1], coordinates[0]];
                    return (
                        <Marker
                            position={positionM}
                            key={id}
                            id={id} >
                            <Popup>
                                <h3>{name}</h3>
                                <p>{phone}</p>
                                <p>{address}</p>
                                <p>大人{data.properties["mask_adult"]} 小孩{data.properties["mask_child"]}</p>
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