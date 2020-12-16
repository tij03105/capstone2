import { React, Component } from 'react';
import axios from 'axios';
import './formVideo.css'

class Form extends Component {
   state = {
       file: null,
       filename: "파일 선택",
       video_url: null
   }

   handleFile(e){
       let file = e.target.files[0]
       this.setState({file: file, filename: file.name})
       console.log(file)
   }

   handleUpload(e) {

    let file = this.state.file
    let formdata = new FormData()
    let url = "http://192.168.0.2/predict"
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

    render() {
        return(
            <div id='video-container'>
                <video id='result-video' key={this.state.video_url} autoPlay loop muted>
                    <source id='video' src={this.state.video_url} type="video/mp4"/>
                </video>
                <div id='option-container'>
                    <div className="filebox">
                        <input className="upload-name" value={this.state.filename} disabled="disabled"/>
                        <label htmlFor="ex_filename">업로드</label>
                        <input type="file" id="ex_filename" accept='video/mp4' className="upload-hidden" onChange={(e)=>this.handleFile(e)}/>
                    </div>
                    <button id='detect-button'onClick={(e)=>this.handleUpload(e)}>검출</button>
                </div>
            </div>
        );
    }

}


export default Form;