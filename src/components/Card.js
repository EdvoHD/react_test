import React from "react";


const Card = (props) => {
    

    return (

        <div className={"card"}>
            <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"} className={"card-img-top"} alt={" of a cat"} />
            <div className={"card-body"}>
                <h5 className={"card-title"}>Card title</h5>
                <p className={"card-text"}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className={"btn btn-primary"}>Book now</button>
            </div>
        </div>



    )
}

export default Card;

