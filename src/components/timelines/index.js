import React from "react";
import "../../styles/timeline.css";
const TimeLine = ({ timeLine, mainHeading,color,borderColor }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="page-header">
          <h1 id="timeline" style={{color:color}}>{mainHeading}</h1>
        </div>
        <ul className="timeline">
          {timeLine.map((item, index) => {
            return (
              <li
                key={index}
                className={`${item.className && "timeline-inverted"}`}
              >
                <div
                  className="timeline-badge"
                  style={{
                    backgroundColor: item.bgColor,
                    color: item.color,
                    border: item.border && `2px solid ${borderColor}`,
                  }}
                >
                  {item.CircleNo}
                </div>
                <div className="timeline-panel">
                  <div>
                    <h4 className="timeline-title">{item.timeLineHeading}</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      <img
                        src={item.timeLineImage}
                        alt="timeline-image"
                        align="left"
                      />
                      {item.timeLineDes}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default TimeLine;
