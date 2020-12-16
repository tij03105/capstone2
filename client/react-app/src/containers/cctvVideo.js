import { React, Component } from 'react';
import axios from 'axios';
import NaverMap from './naverMap';
import './cctvVideo.css'

class Form extends Component {
    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this)
    }

   state = {
       filename: "파일 선택",
       video_url: null,
       latitude: 0,
       longitude: 0,
   }

   handleUpload(file) {
    let formdata = new FormData()
    let url = "http://3.137.149.162/predict"
    let axiosConfig = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };
    formdata.append('file', file)

    axios.post(url, formdata, axiosConfig)
    .then((res)=>{
        this.setState({video_url: url})
    }).catch((error)=>{
        console.log(error)
    })
   }

   EmergenceCall(e){
       let serverUrl = "http://3.14.246.24"
       let formdata = new FormData()
       formdata.append('latitude', this.state.latitude)
       formdata.append('longitude', this.state.longitude)

       axios.post(serverUrl,formdata)
       .then((res)=>{
           console.log(res)
       })
   }

   handler(e){
       var x = e.overlay.position.x, y = e.overlay.position.y;
       this.setState({latitude: y, longitude: x})
       var xml2js = require('xml2js');
       var parser = new xml2js.Parser();
       var xmlDoc;
       var url = "http://openapi.its.go.kr:8081/api/NCCTVInfo?key=1606726037883&ReqType=2&MinX="+(x-0.01)+"&MaxX="+(x+0.01)+"&MinY="+(y-0.01)+"&MaxY="+(y+0.01)+"&type=ex&cctvtype=2"
        axios.get(url, {
            "Content-Type":"application/xml; charset=utf-8"
        })
        .then((response) => {
            xmlDoc = response.data;
            parser.parseString(xmlDoc, 
            function(err,result){
                var iter = result['response']['datacount'][0];
                for(var i=0;i<iter;i++){
                    var res_x = result['response']['data'][i]['coordx']
                    var res_y = result['response']['data'][i]['coordy']
                    if(res_x == x && res_y == y){
                        this.setState({video_url: result['response']['data'][i]['cctvurl'][0]});
                        axios.get(result['response']['data'][i]['cctvurl'][0], {
                            "Content-Type":"multipart/form-data"
                        })
                        .then((res) => {
                            //console.log(res);
                            //console.log(res.data);
                            //var blob = new Blob([res.data], {type: 'video/mp4'});
                            var file = new File([res.data], "video.mp4", {type: "video/mp4"});
                            //var reader = new FileReader();
                            //var file = new File(blob, "video.mp4");
                            //console.log(file);
                            //reader.readAsBinaryString(blob);
                            //console.log(reader);
                            //this.handleUpload(file);
                        })
                    }
                }
            }.bind(this))
        });
   }

    render() {
        return(
            <div>
                <div id='cctv-container'>
                    <video id='result-video' key={this.state.video_url} autoPlay loop muted>
                        <source id='video' src={this.state.video_url} type="video/mp4"/>
                    </video>
                </div>
                <div id='container'>
                    <div id='map'>
                        <NaverMap clickHandler={(e)=>this.handler}></NaverMap>
                    </div>
                    <div id='call-container'>
                        <div id='location-container'>
                            <input id='latitude' value={this.state.latitude} onChange/>
                            <input id='longitude' value={this.state.longitude} onChange/>
                        </div>
                        <button id='call-button' onClick={(e)=>this.EmergenceCall(e)}>신고</button>
                    </div>
                </div>
            </div>
        );
    }

}


export default Form;