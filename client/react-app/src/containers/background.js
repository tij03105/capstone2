import IMG from '../backgroundI.jpg';
import './background.css';

export default function Background() {
    return (
      <div className="background">
          <img src={IMG} alt=""></img>
      </div>
    );
  }