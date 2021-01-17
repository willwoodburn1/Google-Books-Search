import React from "react";
import "./style.css";

function Title() {
    return (
        <div>
            <div className="card titleCard">
                <div className="card-header">
                    React Application
                </div>
                <div className="card-body">
                    <h4 className="card-title">Google Books Search</h4>
                    <p className="card-text">Query from hundreds of books below</p>
                </div>
                <div class="card-footer text-muted">
                    Created By William Woodburn
                </div>
            </div>



        </div>
    )
}
export default Title;