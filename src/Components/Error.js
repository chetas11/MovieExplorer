import React from 'react'
import NotFound from '../Images/notfound.png'
import { useHistory } from "react-router-dom";

function Error() {

    const history = useHistory();

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <img className="img-fluid" src={NotFound} alt="not-found" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6 mt-5">
                    <h1>OOPS! PAGE</h1>
                    <h1>NOT FOUND.</h1>
                    <p>You must have picked the wrong door because I havent been able to lay my eye on the page you've been searching for</p>
                    <button onClick={()=> {history.push("/")}} className="btn btn-dark">BACK TO HOME</button>
                </div>
            </div>
        </div>
    )
}

export default Error
