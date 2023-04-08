import React from "react";
import ImgItem from "./ImgItem";


const ImgList = ({ imgProps }) => {
  return (
    <div className="imgList">
      {imgProps.map((img, index) => {
        return <ImgItem key={index} imgListProps={img} />;
      })}
    </div>
  );
};

export default ImgList;
