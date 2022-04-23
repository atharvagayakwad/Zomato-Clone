import React from "react";
import "../../styles/DeliveryItem.css";

const DeliveryItem = (props) => {
  return (
    <>
      <div className="delivery-item-cover">
        <img
          src={props.item.cover}
          className="delivery-item-img"
          alt={props.item.title}
        />
      </div>
      <div className="delivery-item-title">{props.item.title}</div>
    </>
  );
};

export default DeliveryItem;
