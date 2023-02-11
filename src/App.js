import React, { useCallback, useEffect, useState } from "react";
import Card from "./component/card/Card";
import { cardData } from "./cardData";
import CustomSlider from "./component/customSlider/Slider";

function App() {
  const renderDynamicCard = () => {
    return cardData.map((data, i) => {
      return (
        <div style={{ marginLeft: "12px" }}>
          <Card data={data} showReview key={i} />
        </div>
      );
    });
  };

  return (
    <div className="App">
      <CustomSlider id="card-slider">{renderDynamicCard()}</CustomSlider>
    </div>
  );
}

export default App;
