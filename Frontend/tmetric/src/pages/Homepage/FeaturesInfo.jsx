import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";

const FeaturesInfo = () => {
  const featureTypes = [
    {
      id: 1,
      name: "Time Tracking",
      icon: "https://tmetric.com/media/2p4n4oyc/icon-timer-blue.svg",
      img: "https://tmetric.com/media/e5enfaae/img-advantages.png",
    },
    {
      id: 2,
      name: "Project Management",
      icon: "https://tmetric.com/media/1niddz51/icon-project-blue.svg",
      img: "https://tmetric.com/media/d2dhexfq/img-advantages-project-management.png",
    },
    {
      id: 3,
      name: "Team Management",
      icon: "https://tmetric.com/media/2gxihhdu/icon-team-blue.svg",
      img: "https://tmetric.com/media/b3abexjt/img-advantages-team-management.png",
    },
    {
      id: 4,
      name: "Billing & Invoicing",
      icon: "https://tmetric.com/media/s4koycnp/icon-invoice-blue.svg",
      img: "https://tmetric.com/media/nmmhl5l3/img-advantages-invoice.png",
    },
    {
      id: 5,
      name: "Reporting",
      icon: "https://tmetric.com/media/yoblhiut/icon-reports-blue.svg",
      img: "https://tmetric.com/media/bpli5hts/img-advantages-reporting.png",
    },
    {
      id: 6,
      name: "Time Off",
      icon: "https://tmetric.com/media/cajpa4uy/icon-time-off-blue.svg",
      img: "	https://tmetric.com/media/kuqjgrfl/img-advantages-time-off.png",
    },
  ];
  return (
    <Box p="60px">
      <Heading
        as="h2"
        fontWeight="bold"
        fontSize="3rem"
        m="0 auto 2rem"
        textAlign="center"
        maxW="800px"
        noOfLines={2}
      >
        What makes TMetric your best business companion
      </Heading>
      <Tabs variant="unstyled" orientation="vertical">
        <TabPanels maxW="66.66667%" p="0 20px">
          {featureTypes.map((item) => (
            <TabPanel key={item.id}>
              <Image
                src={item.img}
                boxShadow={"-40px 60px 80px rgb(7 13 20 / 8%);"}
              />
            </TabPanel>
          ))}
        </TabPanels>
        <TabList aria-orientation="vertical" p="0 20px">
          {featureTypes.map((item) => (
            <Tab
              key={item.id}
              _selected={{ color: "#3070f0", bg: "#e7edfc" }}
              _hover={{ boxShadow: "-12px 16px 32px rgb(0 54 163 / 12%)" }}
              p="15px 23px"
              mb="1rem"
              border="1px solid #e2e7eb"
              w="100%"
              borderRadius="12px"
              display="flex"
              justifyContent="flex-start"
            >
              <Image src={item.icon} />
              <Text fontSize="1.25rem" fontWeight="600" ml="17px">
                {item.name}
              </Text>
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  );
};

export default FeaturesInfo;
