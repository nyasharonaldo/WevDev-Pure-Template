import React from "react";
import {Link} from 'gatsby'
const pricingCard = ({title, amount, currency, period, features, to}) => {
  console.log(currency)
  return (
    <div className="col-md-4">
      <div className="pricing-card pricing-primary">
        <h3>{title}</h3>
        {/* <h6 className="price"> */}
          {/* <span> {amount} </span> */}
           {/* <span>{`${currency}/${period}`}</span> */}
        {/* </h6> */}
      </div>
      <div className="pricing-features">
        <ul className="features">
          {features.map(obj=>{
            return(
              <li>{obj.feature}</li>
            )
          })}
        </ul>
        <Link to={`./${to}`}className="btn btn-primary" title="">
          Request A Quote
        </Link>
      </div>
    </div>
  );
};

export default pricingCard;