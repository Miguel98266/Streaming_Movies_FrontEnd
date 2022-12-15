import React from "react";
import "./Rate.css";
export const Rate = ({ review }) => {
  return (
    <div className="ratings">
      {(() => {
        let icon = [];
        for (let i = 0; i <= 4; i++) {
          if (i < review) {
            icon.push(<i className="fa fa-star rating-color"></i>);
          } else {
            icon.push(<i className="fa fa-star"></i>);
          }
        }
        return icon;
      })()}
    </div>
  );
};
