import React, { useEffect, useState, useContext, useRef } from 'react';
import CompNaverMap from '../src/comp/CompNaverMap.jsx'

function App() {
	//마커 추가 옵션
	const [markerAddOpt, setMarkerAddOpt] = useState({});

	//마커 이벤트 옵션
	const [markerEvtOpt, setMarkerEvtOpt] = useState({});

	//팝업지도 마커 추가 옵션
	const [markerPopupAddOpt, setMarkerPopupAddOpt] = useState({});

	//팝업지도 마커 이벤트 옵션
	const [markerPopupEvtOpt, setMarkerPopupEvtOpt] = useState({});

	//폴리라인 추가 옵션
	const [polylineAddOpt, setPolylineAddOpt] = useState({});

	//폴리라인 이벤트 옵션
	const [polylineEvtOpt, setPolylineEvtOpt] = useState({});

	//팝업지도 폴리라인 추가 옵션
	const [polylinePopuupAddOpt, setPolylinePopuupAddOpt] = useState({});

	//팝업지도 폴리라인 이벤트 옵션
	const [polylinePopuupEvtOpt, setPolylinePopuupEvtOpt] = useState({});

	//팝업 on/off 설정
	const [showPopup, setShowPopup] = useState(false);

	//지도 크기 리턴
	const [mapMinMax, setMapMinMax] = useState([]);

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
			markerAddOpt={markerAddOpt}
			markerEvtOpt={markerEvtOpt}
			polylineAddOpt={polylineAddOpt}
			polylineEvtOpt={polylineEvtOpt}
			setMapMinMax={setMapMinMax}
		/>
      </>
    )
}

export default App
