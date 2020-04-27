import React from "react";

// npm install react-router-dom --save
import { BrowserRouter, Route} from "react-router-dom";
import Card from "./Card";
import Booking from "./Booking";

import Navbar from "./Navbar"
import Formular from "./Formular"
import "../styles/main.scss";

const Approute = ()=>{

    return (
        <div>
             
            <BrowserRouter>
                 <Navbar/>
                 <div className={"card-wrapper"}>
                    <Route path="/" component= {Card} exact ></Route>
                    <Route path="/" component= {Card} exact ></Route>
                    <Route path="/" component= {Card} exact ></Route>
                 </div>

                 <Route path="/Bookings" component= {Booking} exact></Route>
                 <Route path="/form" exact component= {Formular}></Route>
                 <Formular/>
            
            </BrowserRouter>
            
              
        </div>
    )
}

export default Approute;