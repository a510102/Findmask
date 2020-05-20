import React from 'react'

function Listdata({ datas, setId }) {
    return (
        <ul className="data-list">
            {
                datas.map(data => {
                    const { name, phone, id, address } = data.properties;
                    let className = "data-item";
                    if (data.properties["mask_adult"] === 0 || data.properties["mask_child"] === 0) {
                        className += " danger"
                    } else if (data.properties["mask_adult"] < 101 || data.properties["mask_child"] < 101) {
                        className += " less"
                    }
                    return (
                        <li key={id} className={className} onClick={() => setId(id)}>
                            <h3>{name}</h3>
                            <p><a href={`tel:${phone}`}>{phone}</a></p>
                            <a
                                href={`https://www.google.com.tw/maps/place/${address}`}
                                target="_blank"
                                rel="noopener noreferrer">{address}</a>
                            <p>成人: {data.properties["mask_adult"]} / 小孩: {data.properties["mask_child"]}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Listdata