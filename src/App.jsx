import React, { useEffect, useState, useContext, useRef } from 'react';
import CompNaverMap from '../src/comp/CompNaverMap.jsx'

function App() {
	//지도 중심
	const [mapCenterLonLat, setMapCenterLonLat] = useState([]);

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
			key: "nodeId",                    // 마커 key 컬럼 지정 => PK의 역할
			coord: {lon: "lon", lat: "lat"}, // 마커 좌표(위도, 경도) 컬럼 지정
			data: [
                {
                    "nodeId" : "test",
                    "lon"    : 126.734086,
                    "lat"    : 37.715133
                },
                {
                    "nodeId" : "test1",
                    "lon"    : 126.71,
                    "lat"    : 37.73
                },
            ]
		})

		// //마커 select 이벤트
		// setMarkerEvtOpt({
		// 	type : "select", 
        // 	key  : ["test"]
		// })

		// //마커 insert 이벤트
		// setMarkerEvtOpt({
		// 	type : "insert"
		// })

		// //마커 update 이벤트
		// setMarkerEvtOpt({
		// 	type : "update"
		// })

		// //마커 click 이벤트
		// setMarkerEvtOpt({
		// 	type : "click"
		// })

		//폴리라인 추가
		setPolylineAddOpt({
			key  : "linkId",                 // 폴리라인 key 컬럼 지정 => PK의 역할
			data: [							 // 폴리라인 데이터 / linkVtx는 [경도, 위도] 형태여야함
                {
                    "linkId": "1830000301",
                    "linkVtx": [
                        [
                            127.4507049,
                            36.20007193
                        ],
                        [
                            127.4503577,
                            36.20029
                        ],
                        [
                            127.4493091,
                            36.20086143
                        ],
                        [
                            127.4489228,
                            36.20101687
                        ],
                        [
                            127.4487666,
                            36.20112509
                        ]
                    ]
                }
            ],
		})

		// //폴리라인 select 이벤트
		// setPolylineEvtOpt({
		// 	type : "select", 
        // 	key  : ["1830000301"]
		// })

		//폴리라인 click 이벤트
		setPolylineEvtOpt({
			type : "click", 
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
