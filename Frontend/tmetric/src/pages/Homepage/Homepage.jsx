import { Button, Box, Heading, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import AwardList from "./Sections/AwardList";
import EnsureProfit from "./Sections/EnsureProfit";
import FeaturesInfo from "./Sections/FeaturesInfo";
import HomepageHeader from "./Sections/HomepageHeader";
import IntegrationSection from "./Sections/IntegrationSection";
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
      <Box bg="#41338f" color="#fff" textAlign="center" p="64px 0 48px">
        <Heading fontWeight="bold" fontSize="3rem" m="0 auto 2rem">
          Make time work for you!
        </Heading>
        <Button
          color="black"
          bg="#fff"
          minW="200px"
          mb="2rem"
          borderRadius="6px"
        >
          Start Free Trial
        </Button>
        <Text>
          Powered by <Text as="b">devart</Text> A software vendor with 20 years
          of experience.
        </Text>
      </Box>
    </Fragment>
  );
};

export default Homepage;
