import React from "react";
import "../../../styles/FilterItem.css";

const FilterItem = (props) => {
  return (
    <div className="filter-item pointer">
      {props.filter.icon ? props.filter.icon : null}
      <div className="filter-name">{props.filter.title}</div>
    </div>
  );
};

export default FilterItem;
