import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@mui/icons-material';
import "./user.css";

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <button className="userAddButton">Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                <img 
                    src="https://images.pexels.com/photos/46317/pexels-photo-46317.jpeg"
                    alt="" 
                    className="userShowImg" 
                    />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Bombo</span>
                        <span className="userShowUserTitle">Forest Surveyor</span>
                    </div>
                    </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                    <PermIdentity className="userShowIcon"/>
                    <span className="userShowInfoTitle">annabombo99</span>
                    </div>
                    <div className="userShowInfo">
                    <CalendarToday className="userShowIcon"/>
                    <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon"/>
                    <span className="userShowInfoTitle">+49 1234 274 33</span>
                    </div>
                    <div className="userShowInfo">
                    <MailOutline className="userShowIcon"/>
                    <span className="userShowInfoTitle">annabombo@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                    <LocationSearching className="userShowIcon"/>
                    <span className="userShowInfoTitle">Sachsen Anhalt | Germany</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate"></div>
        </div>
    </div>
  );
}
