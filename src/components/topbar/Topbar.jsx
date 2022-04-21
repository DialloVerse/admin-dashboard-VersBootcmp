import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings} from "@material-ui/icons";

export default function Topbar () {
    return (
        <div className="topbar"> 
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">My-App-DialloVerse</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                            <NotificationsNone />
                            <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                            <Language />
                            <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                            <Settings />
                    </div>
                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F8a%2FWar_photographer_-_Evan_Forget_-_Photographe_sur_Nantes_-_www.evan-forget.fr.jpg&imgrefurl=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FFichier%3AWar_photographer_-_Evan_Forget_-_Photographe_sur_Nantes_-_www.evan-forget.fr.jpg&tbnid=7yNkF46gBCIAtM&vet=12ahUKEwjq6reboKT3AhUM0OAKHfGgCy0QMygHegUIARDmAQ..i&docid=3NbGYmIRPgxHqM&w=1200&h=1800&q=war%20photographer&ved=2ahUKEwjq6reboKT3AhUM0OAKHfGgCy0QMygHegUIARDmAQ" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}