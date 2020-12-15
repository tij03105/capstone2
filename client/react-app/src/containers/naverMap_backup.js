import Axios from "axios";
import {React, Component } from "react";
import { Marker, NaverMap, RenderAfterNavermapsLoaded } from "react-naver-maps";
import XML from '../NCCTVInfo.xml';

class NaverAPIMap extends Component {
    constructor(props){
        super(props);
    }
  
    componentDidMount() {
        var xml2js = require('xml2js');
        var parser = new xml2js.Parser();
        var xmlDoc;
        Axios.get(XML, {
            "Content-Type":"application/xml; charset=utf-8"
        })
        .then((response) => {
            xmlDoc = response.data;
            parser.parseString(xmlDoc, 
            function(err,result){
                var iter = result['response']['datacount'][0];
                for(var i=0;i<iter;i++){
                    var element = result['response']['data'][i];

                    this.setState({
                        cctvData: ({name: element['cctvname'][0], coordx: element['coordx'][0], coordy: element['coordy'][0], cctvurl: element['cctvurl'][0]})
                    })
                }
            })
        });
    }

    render() {
        //const {
        //    name, coordx, coordy, cctvurl
        //} = this.state;
        
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
                    defaultCenter={{ lat: 35.889864, lng: 128.611120 }}
                    defaultZoom={15}
                >
                    <Marker
                        position={{ lat: 35.889864, lng: 128.611120 }}
                        onClick={() => {
                        alert('여기는 네이버입니다.')
                        }}
                    />
                </NaverMap>
            </RenderAfterNavermapsLoaded>
        );
    }
}

export default NaverAPIMap;