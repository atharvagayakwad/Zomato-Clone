import React from "react";
import "../../../styles/ExploreSection.css";
import ExploreCard from "./ExploreCard";

const ExploreSection = (props) => {
  return (
    <div className="max-width explore-section">
      <h2 className="collection-title">{props.collectionName}</h2>
      <div className="explore-grid">
        {props.list.map((restaurant) => {
          return <ExploreCard restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default ExploreSection;
