import React, { useState, useEffect } from 'react';
import Nav from "../components/Nav/Nav";
import Main from "../components/Main/Main";
import './App.css'


function App() {
  const [datas, setDatas] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [cityF, setCityF] = useState('');
  const [areaF, setAreaF] = useState('');
  const [keyWord, setKeyWord] = useState('');
  const [pageD, setPageD] = useState(1);
  const [id, setId] = useState('');
  useEffect(() => {
    // 連接API取得藥局口罩數量並取預設定點
    const fetchDatas = async () => {
      const Url = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json';
      const response = await fetch(Url);
      const result = await response.json();
      setDatas(result.features);
      const filterdatas = result.features.filter(data =>
        data.properties.county === "臺中市" && data.properties.town === "太平區"
      )
      setCityF("臺中市");
      setAreaF("太平區");
      setFilterData(filterdatas);
    };
    fetchDatas();
  }, [])


  //輸入關鍵字搜尋的功能
  const onhandleKeywordChange = e => {
    e.preventDefault();
    const filterDatas = datas.filter(data => data.properties.address.includes(keyWord));
    setFilterData(filterDatas);
    const county = filterDatas[0].properties.county;
    const town = filterDatas[0].properties.town;
    setCityF(county);
    setAreaF(town);
    setKeyWord('');
    setPageD(1)
  }
  //縣市篩選
  const onhandleCountyChange = e => {
    if (e.target.value) {
      setCityF(e.target.value);
      const filterDatas = datas.filter(data =>
        data.properties.county === e.target.value
      );
      setFilterData(filterDatas);
      setPageD(1);
      setAreaF('');
    } else {
      return ''
    }
  }
  //地區篩選
  const onhandleTownChange = e => {
    setAreaF(e.target.value);
    const filterdatas = datas.filter(data => data.properties.town === e.target.value);
    setFilterData(filterdatas);
    setPageD(1);
  }


  const sliceData = filterData.slice(pageD * 5 - 5, pageD * 5);
  let positionData;
  if (id) {
    positionData = sliceData.find(data => data.properties.id === id)
  } else {
    positionData = sliceData.find((element, i, array) => array.indexOf(element) === 0)
  }
  let position;
  if (positionData) {
    position = [positionData.geometry.coordinates[1], positionData.geometry.coordinates[0]];
  }

  return (
    <div className="App" >
      <header className="App-header">
        <Nav
          onhandleCountyChange={onhandleCountyChange}
          onhandleKeywordChange={onhandleKeywordChange}
          onhandleTownChange={onhandleTownChange}
          setAreaF={setAreaF}
          areaF={areaF}
          cityF={cityF}
          setKeyWord={setKeyWord}
          keyWord={keyWord}
          sliceData={sliceData}
          filterDatas={filterData}
          pageD={pageD}
          setPageD={setPageD}
          setId={setId} />
      </header>
      <Main
        position={position}
        sliceData={sliceData} />
    </div>
  );
}

export default App;
