import React from "react";
import "../../../styles/Filters.css";
import FilterItem from "./FilterItem";

const Filters = (props) => {
  return (
    <div className="filters">
      {/* if the filterlist exists ie  not empty then only map through it otherwise return null */}
      {props.filterList
        ? props.filterList.map((filter) => {
            return <FilterItem filter={filter} key={filter.id} />;
          })
        : null}
    </div>
  );
};

export default Filters;
