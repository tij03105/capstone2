import {React, Component} from 'react';
import { Marker } from "react-naver-maps";

class MakerList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        var lists = [];
        var data = this.props.data;
        const {clickHandler} = this.props;
        var i = 0;
        while(i<data.length){
            lists.push(<Marker key={data[i].id}
                position={{ lat: data[i].coordx, lng: data[i].coordy }}
                //onClick={this.clickHandler(data[i].coordy, data[i].coordx, data[i].name)} 
            ></Marker>);
            i = i + 1;
        }

        return(
            <div>
                {lists}
            </div>
        );
    }
}

export default MakerList;