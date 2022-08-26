import React, { Fragment } from "react";
import AwardList from "./Sections/AwardList";
import EnsureProfit from "./Sections/EnsureProfit";
import FeaturesInfo from "./Sections/FeaturesInfo";
import HomepageHeader from "./Sections/HomepageHeader";
import IntegrationSection from "./Sections/IntegrationSection";
import LastSections from "./Sections/LastSections";
import ManageTeam from "./Sections/ManageTeam";
import MonitorTime from "./Sections/MonitorTime";

const Homepage = () => {
  return (
    <Fragment>
      <HomepageHeader />
      <AwardList />
      <FeaturesInfo />
      <ManageTeam />
      <EnsureProfit />
      <MonitorTime />
      <IntegrationSection />
      <LastSections />
    </Fragment>
  );
};

export default Homepage;
