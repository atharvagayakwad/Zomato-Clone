import React, { useState } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import TabOptions from "../components/common/TabOptions";
import Delivery from "../components/Delivery Section/Delivery";
import Nightlife from "../components/Nightlife Section/Nightlife";
import DiningOut from "../components/Dining Out Section/DiningOut";

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "Nightlife":
      return <Nightlife />;
    default:
      return <Delivery />;
  }
};

const Home = () => {
  const [activeTab, setActiveTab] = useState("Dining Out");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Different screen - here pass a func which will decide which screen is to be showed */}
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

export default Home;
