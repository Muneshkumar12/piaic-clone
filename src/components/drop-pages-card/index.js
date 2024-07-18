import React from "react";
import "../../styles/drop-pages-card.css";
const DropPagesCard = ({ cardData, cardHeading, mainHeading ,cardDes,color}) => {
  return (
    <div className="container-fluid drop-pages-main">
      <div className="container">
        {mainHeading && (
          <div className="row drop-page-heading">
            <h1 style={{color:color}}>Program Structure</h1>
            <p style={{color:color}}>
             {cardDes}
            </p>
          </div>
        )}
        <div className="row drop-page-card">
          <h1 style={{ color: "#2b645f", textAlign: "start" }}>
            {cardHeading}
          </h1>
          {cardData.map((item, index) => {
            return (
              <div
                className="col-12 col-md-3"
                key={index}
                style={{
                  backgroundColor: item.bgColor,
                  cursor: `${item.link && "pointer"}`,
                }}
                id={`${item.img && "no-shadow"}`}
                onClick={item.link && (() => alert(item.link))}
              >
                {item.img ? (
                  <img src={item.img} alt="gif" />
                ) : (
                  <>
                    <h1 style={{ color: item.color }}>{item.title}</h1>
                    <p style={{ color: item.color }}>{item.para}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DropPagesCard;
