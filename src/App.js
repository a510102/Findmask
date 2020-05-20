import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import Main from "./Main";
import './App.css'


function App() {
  const [datas, setDatas] = useState([]);
  const [cityF, setCityF] = useState('');
  const [areaF, setAreaF] = useState('');
  const [keyWord, setKeyWord] = useState('');
  const [pageD, setPageD] = useState(1);
  const [id, setId] = useState('');
  useEffect(() => {
    fetchDatas();
  }, [])
  // 連接API取得藥局口罩數量
  const fetchDatas = async () => {
    const Url = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json';
    const response = await fetch(Url);
    const result = await response.json();
    setDatas(result.features);
    setCityF('臺中市');
    setAreaF('太平區');
  };
  // 假如有選取的縣市或者地區還是關鍵字，資料會更著改變
  const filterDatas = datas.filter(data => {
    const { county, town, address } = data.properties;
    if (areaF && cityF) {
      return county === cityF && town === areaF
    } else if (cityF) {
      return county === cityF
    } else if (keyWord) {
      return address.includes(keyWord)
    } else {
      return ''
    }
  })

  const sliceData = filterDatas.slice(pageD * 5 - 5, pageD * 5);
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
          setAreaF={setAreaF}
          setCityF={setCityF}
          areaF={areaF}
          cityF={cityF}
          setKeyWord={setKeyWord}
          sliceData={sliceData}
          filterDatas={filterDatas}
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
