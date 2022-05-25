import { Visibility } from "@mui/icons-material";
import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
        <li className="widgetSmListItem">
            <img 
            src="https://images.pexels.com/photos/4959254/pexels-photo-4959254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" 
            className="widgetSmImg"
             />
            <div className="widgetSmUser">
            <span className="widgetSmUsername">Maryam Lazeezah</span>
            <span className="widgetSmUserTitle">Fictional Driver</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img
             src="https://images.pexels.com/photos/4959254/pexels-photo-4959254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt=""
             className="widgetSmImg"
              />
            <div className="widgetSmUser">
            <span className="widgetSmUsername">Ummulkhulthum Diallo</span>
            <span className="widgetSmUserTitle">Barrister</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img
            src="https://images.pexels.com/photos/4959254/pexels-photo-4959254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
            />
            <div className="widgetSmUser">
            <span className="widgetSmUsername">Alfa Umar</span>
            <span className="widgetSmUserTitle">Evolving IT-Technician</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img 
            src="https://images.pexels.com/photos/4959254/pexels-photo-4959254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" 
            className="widgetSmImg" 
            />
            <div className="widgetSmUser">
            <span className="widgetSmUsername">Shakur Ameen</span>
            <span className="widgetSmUserTitle">IT-Turned Lazy HR Baba</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img 
            src="https://images.pexels.com/photos/4959254/pexels-photo-4959254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" 
            className="widgetSmImg" 
            />
            <div className="widgetSmUser">
            <span className="widgetSmUsername">Yusuf Kaba</span>
            <span className="widgetSmUserTitle">Real Baba Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
            </button>
        </li>
        </ul>
        </div>
  );
}