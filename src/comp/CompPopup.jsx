import React, { useEffect, useState, useRef } from "react";
import { Popup } from "@progress/kendo-react-popup";
import PopupLayout from "@/tiles/contents/PopupLayout";
import FormArea from "@/tiles/area/FormArea";
import CompNaverMap from "@/comp/CompNaverMap";
import ButtonArea from "@/tiles/area/ButtonArea";

const CompPopup = (props) => {
    const {showPopup, form, mapCenterLonLat, markerPopupAddOpt, markerPopupEvtOpt, polylinePopuupAddOpt, polylinePopuupEvtOpt, setForm, btnConf, setMode} = props;

    const offset={
        left: 150,
        top: 50,
    }

    return (
        <Popup offset={offset} show={showPopup} popupClass={"popup-content"} style={{width:"1500px", height:"500px"}}>
            <PopupLayout>
                <CompNaverMap 
                    mapId={"navermap2"}
                    mapCenterLonLat={mapCenterLonLat}
                    markerAddOpt={markerPopupAddOpt}
                    markerEvtOpt={markerPopupEvtOpt}
                    polylineAddOpt={polylinePopuupAddOpt}
                    polylineEvtOpt={polylinePopuupEvtOpt}
                    setForm={setForm}
                />
            </PopupLayout>
        </Popup>
    );
};

export default CompPopup;