import React, { useEffect, useState, useContext, useRef } from 'react';
import CompNaverMap from '../src/comp/CompNaverMap.jsx'

function App() {
	//지도 중심
	const [mapCenterLonLat, setMapCenterLonLat] = useState([126.986, 37.541]);

	//지도 줌
	const [zoomSize, setZoomSize] = useState(14);

	//지도 크기 리턴
	const [mapMinMax, setMapMinMax] = useState([]);
	
	//마커 추가 옵션
	const [markerAddOpt, setMarkerAddOpt] = useState({});

	//마커 이벤트 옵션
	const [markerEvtOpt, setMarkerEvtOpt] = useState({});

	//폴리라인 추가 옵션
	const [polylineAddOpt, setPolylineAddOpt] = useState({});

	//폴리라인 이벤트 옵션
	const [polylineEvtOpt, setPolylineEvtOpt] = useState({});

    useEffect(() => {
		//마커 추가
		setMarkerAddOpt({

		})
    }, [])

	useEffect(() => {
		console.log("mapMinMax");
		console.log(mapMinMax);
	}, [mapMinMax])

    return (
      <>
        <CompNaverMap
			setMapMinMax={setMapMinMax}
			mapCenterLonLat={mapCenterLonLat}
			zoomSize={zoomSize}
			markerAddOpt={markerAddOpt}
			markerEvtOpt={markerEvtOpt}
			polylineAddOpt={polylineAddOpt}
			polylineEvtOpt={polylineEvtOpt}
		/>
      </>
    )
}

export default App
