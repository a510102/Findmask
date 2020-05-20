import React from 'react'

function Listdata({ datas, setId }) {
    return (
        <ul className="data-list">
            {
                datas.map(data => {
                    const { name, phone, id, address } = data.properties;
                    return (
                        <li key={id} className="data-item" onClick={() => setId(id)}>
                            <h3>{name}</h3>
                            <p>{phone}</p>
                            <p>{address}</p>
                            <p>大人{data.properties["mask_adult"]} 小孩{data.properties["mask_child"]}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Listdata