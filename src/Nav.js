import React, { useState } from 'react'
import Listdats from './Listdata';
import Pages from './Pages';
import { area_data, citys } from './taiwan'
import './nav.css'

function Nav({
    cityF,
    areaF,
    setKeyWord,
    sliceData,
    filterDatas,
    setPageD,
    pageD,
    setId,
    keyWord,
    onhandleKeywordChange,
    onhandleCountyChange,
    onhandleTownChange }) {
    const [isShow, setIsShow] = useState(false);
    let sidebarClass = "sidebar";
    let arrowClass = "arrow";
    if (isShow) {
        sidebarClass += " show"
        arrowClass += " rotate"
    }
    return (
        <div className={sidebarClass} >
            <nav className="sidebar-navbar" >
                <h1 className="nav-title">Find Mask<span className={arrowClass} onClick={() => setIsShow(!isShow)}>></span></h1>
                <div className="nav-selection">
                    <select
                        value={cityF ? cityF : ''}
                        className="selection selection-county"
                        onChange={e => onhandleCountyChange(e)}>
                        <option disabled>--請選擇縣市--</option>
                        {
                            citys.data.map((city, i) => {
                                return <option value={city} key={i} >{city}</option>
                            })
                        }
                    </select>
                    <select
                        className="selection selection-area"
                        onChange={e => onhandleTownChange(e)}
                        value={areaF ? areaF : ''}>
                        <option disabled>--請選擇地區--</option>
                        {
                            cityF ?
                                area_data[cityF].map((item, i) => {
                                    return <option key={i} value={item}>{item}</option>
                                }) : ''
                        }
                    </select>
                </div>
                <form
                    className="nav-search"
                    onSubmit={e => onhandleKeywordChange(e)}>
                    <input
                        type="text"
                        name="search-mask"
                        value={keyWord}
                        className="search-mask"
                        placeholder="搜尋地址，例如臺中市..."
                        onChange={e =>
                            setKeyWord(e.target.value)} />
                </form>
            </nav>
            <Listdats
                datas={sliceData}
                setId={setId} />
            <Pages
                setId={setId}
                pageD={pageD}
                datasL={filterDatas.length}
                setPageD={setPageD} />
        </div >
    )
}

export default Nav