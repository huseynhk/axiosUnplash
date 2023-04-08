import React from "react";

const ImgItem = ({ imgListProps }) => {
  console.log(imgListProps);

  return (
    <div>
      <img className="img" src={imgListProps.urls.small} alt={imgListProps.alt_description} />
    </div>
  );
};

export default ImgItem;
