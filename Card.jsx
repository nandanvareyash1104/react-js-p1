import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <>
              <div className="col-md-4 mx-auto">
                <div class="card" >
                  <img src={props.imgsrc} class="card-img-top" alt="props.imgsrc" />
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">{props.title}</h5>
                    <p class="card-text">
                      {props.text}
                    </p>
                    <NavLink to="/contact" class="btn btn-primary">
                      Get Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            
          
    </>
  );
};
export default Card;
