import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish
} from '@mui/icons-material';
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser"> 
            <button className="userAddButton">Create</button>
            </Link>
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
                    <span className="userShowInfoTitle">+49 1234 567 89</span>
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
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input 
                            type="text" 
                            placeholder="annabombo99" 
                            className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input 
                            type="text" 
                            placeholder="Anna Bombo" 
                            className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input 
                            type="text" 
                            placeholder="annabombo@gmail.com" 
                            className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input 
                            type="text" 
                            placeholder="+49 1234 567 89" 
                            className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input 
                            type="text" 
                            placeholder="Sachsen Anhalt | Germany" 
                            className="userUpdateInput" 
                            />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                           <img 
                           className="userUpdateImg" 
                           src="https://images.pexels.com/photos/46317/pexels-photo-46317.jpeg" 
                           alt="" 
                           />
                           <label htmlFor="file">
                               <Publish className="userUpdateIcon"/>
                           </label>
                           <input type="file" id="file" style={{ display:"none" }} /> 
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}