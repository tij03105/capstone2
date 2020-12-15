import {React, Component } from "react";
import { Marker, NaverMap, RenderAfterNavermapsLoaded } from "react-naver-maps";

class NaverAPIMap extends Component {
    constructor(props){
        super(props);
        this.state ={
            cctvData: [
                {id:1, name: "[경부선] 북대구", coordx: 128.5812215, coordy: 35.90886802, cctvurl: "http://cctvsec.ktict.co.kr/2037/aCxBlh6HGH/nxezgFLgAht1/Wa8BxjG2hqxOYS+i7Q/mfgcbhU1/aX8g4xXFcXeb"},
                {id:2, name: "[경부선] 금호분기점", coordx: 128.522714, coordy: 35.89321, cctvurl: "http://cctvsec.ktict.co.kr/2036/oPPTDYTXUt+016kDavBwN2LiBYr/Cl9+QdTlNfczXUn6KDtMlZiO8rDVOd4Nw5Ae"},
                {id:3, name: "[경부선] 칠곡휴게소", coordx: 128.42472, coordy: 36.0238113, cctvurl: "http://cctvsec.ktict.co.kr/2035/qpS21ClSfrwhxvwp0v998dNcO/JDeMBsdneJfBO/z+WpwxCTFCY6Wk/fesVGAc0G"},
                {id:4, name: "[경부선] 남구미", coordx: 128.370386, coordy: 36.07024932, cctvurl: "http://cctvsec.ktict.co.kr/2034/7AfP5UZNV5hE5K4EswnBH0qPh6/dhzUjRzTqpwsRz0DeY0zzXm7wtl+0zI+qVZ88"},
                {id:5, name: "[경부선] 구미", coordx: 128.3548531, coordy: 36.12277057, cctvurl: "http://cctvsec.ktict.co.kr/2033/0m1BM6Zdt0YZuiZAc4kbICQ5nLk0wZy+2xZu46MIEAuxE2buRIw+Mojug2YQO2qn"}
            ]
        };
    }
  
    render() {
        return (
            <RenderAfterNavermapsLoaded
            ncpClientId="7g3l2sjhr6"// 자신의 네이버 계정에서 발급받은 Client ID
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}
            >
                <NaverMap 
                    mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                    style={{
                    width: '100%',
                    height: '650px',
                    }}
                    defaultCenter={{ lat: 35.90886802, lng: 128.5812215 }}
                    defaultZoom={15}
                >
                    <Marker
                        position={{ lat: 35.89321, lng: 128.522714 }}
                        onClick={this.props.clickHandler("35.89321", "128.522714", "[경부선] 금호분기점")}
                    />
                    <Marker
                        position={{ lat: 36.0238113, lng: 128.42472 }}
                        onClick={this.props.clickHandler("36.0238113", "128.42472", "[경부선] 칠곡휴게소")}
                    />
                    <Marker
                        position={{ lat: 36.07024932, lng: 128.370386 }}
                        onClick={this.props.clickHandler("36.07024932", "128.370386", "[경부선] 남구미")}
                    />
                    <Marker
                        position={{ lat: 36.12277057, lng: 128.3548531 }}
                        onClick={this.props.clickHandler("36.12277057", "128.3548531", "[경부선] 구미")}
                    />
                    <Marker
                        position={{ lat: 35.90886802, lng: 128.5812215 }}
                        onClick={this.props.clickHandler("35.90886802", "128.5812215", "[경부선] 북대구")}
                    />
                    
                    
                </NaverMap>
            </RenderAfterNavermapsLoaded>
        );
    }
}

export default NaverAPIMap;