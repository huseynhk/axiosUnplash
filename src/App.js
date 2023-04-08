import "./App.css";
import SearchForm from "./SearchForm";
import SearchImg from "./SearchImg";
import ImgList from "./ImgList";
import React, { useState } from "react";



function App() {
  const [image, setImage] = useState([]);

  const handleSubmit = async (event) => {
    // console.log(e);
    const res = await SearchImg(event);
    setImage(res) //inputda tapmaq ucun function
  };

  return (
    <div className="App">
      <SearchForm search={handleSubmit} />
      <ImgList imgProps={image} />
    </div>
  );
}

export default App;
