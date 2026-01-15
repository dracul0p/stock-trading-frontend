import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container ">
      <div className="row p-5 ">
        <div className="col-5 p-5 mt-5 text-muted">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-1 p-5 mt-5 text-muted"></div>

        <div className="col-6 p-5 ">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
