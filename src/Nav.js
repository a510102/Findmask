import React from 'react'
import Listdats from './Listdata';
import Pages from './Pages';
import { area_data, citys } from './taiwan'
import './nav.css'

function Nav({ cityF, setCityF, setAreaF, areaF, setKeyWord, sliceData, filterDatas, setPageD, pageD, setId }) {
    return (
        <div className="sidebar">
            <nav className="sidebar-navbar" >
                <h1 className="nav-title">Find Mask</h1>
                <div className="nav-selection">
                    <select
                        value={cityF ? cityF : ''}
                        className="selection-county"
                        onChange={e => {
                            setCityF(e.target.value);
                            setAreaF(area_data[e.target.value][0])
                            setPageD(1)
                        }}>
                        <option>--請選擇縣市--</option>
                        {
                            citys.data.map((city, i) => {
                                return <option value={city} key={i} >{city}</option>
                            })
                        }
                    </select>
                    <select
                        className="selection-area"
                        onChange={e => {
                            setAreaF(e.target.value)
                            setPageD(1)
                        }}
                        value={areaF ? areaF : ''}>
                        <option>--請選擇地區--</option>
                        {
                            cityF ?
                                area_data[cityF].map((item, i) => {
                                    return <option key={i} value={item}>{item}</option>
                                }) : ''
                        }
                    </select>
                </div>
                <div className="nav-search">
                    <label htmlFor="search-mask">關鍵字</label>
                    <input
                        type="text"
                        name="search-mask"
                        className="search-mask"
                        onChange={e => {
                            setKeyWord(e.target.value)
                            setPageD(1)
                        }} />

                </div>
            </nav>
            <Listdats datas={sliceData} setId={setId} />
            <Pages
                setId={setId}
                pageD={pageD}
                datasL={filterDatas.length}
                setPageD={setPageD} />
        </div>
    )
}

export default Nav