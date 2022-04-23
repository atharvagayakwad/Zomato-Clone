import React from "react";
import "../../../styles/ExploreCard.css";

const ExploreCard = ({ restaurant }) => {
  const name = restaurant?.info?.name ?? ""; // if restaurant exists then look for info, if info exists then look for name. If nothing exists then return empty string

  const coverImg = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? []; // if there are any bulk offers then only show else return empty array
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);

  const bottomContainers = restaurant?.bottomContainers;

  const goldOffers = restaurant?.gold?.text;
  const proOffers = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

  return (
    <div className="explore-card pointer">
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-img" />
        <span className="delivery-time">{deliveryTime}</span>

        {/* if there's a pro offer then only show it  */}
        {proOffers ? <div className="pro-offer">{proOffers}</div> : null}

        {goldOffers ? (
          <div className="gold-offer absolute-center">{goldOffers}</div>
        ) : null}

        {discount ? <div className="discount">{discount}</div> : null}
      </div>

      <div className="restaurant-row">
        <div className="restaurant-name">{name}</div>
        {rating ? (
          <div className="restaurant-rating  absolute-center">
            {rating} <i className="fi fi-rr-star absolute-center"></i>
          </div>
        ) : null}
      </div>
      <div className="restaurant-row">
        {cuisines.length ? (
          <div className="restaurant-cuisine">
            {cuisines.map((item, i) => {
              return (
                <span className="restaurant-cuisine-tag">
                  {item}
                  {i !== cuisines.length - 1 && ","}
                </span>
              );
            })}
          </div>
        ) : null}
        {approxPrice ? (
          <div className="restaurant-price">{approxPrice}</div>
        ) : null}
      </div>
      {bottomContainers.length > 0 ? (
        <div>
          <div className="card-separator"></div>
          <div className="explore-bottom">
            <img
              src={bottomContainers[0]?.image?.url}
              alt={bottomContainers[0]?.text}
              style={{ height: "18px" }}
            />
            <div className="restaurant-bottom-text">
              {bottomContainers[0]?.text}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ExploreCard;
