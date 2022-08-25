import { Box, List, ListItem, Image } from "@chakra-ui/react";
import React, { Fragment } from "react";
import EnsureProfit from "./Sections/EnsureProfit";
import FeaturesInfo from "./Sections/FeaturesInfo";
import HomepageHeader from "./Sections/HomepageHeader";
import ManageTeam from "./Sections/ManageTeam";

const Homepage = () => {
  const awardList = [
    {
      id: 1,
      image: "https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png",
      title: "Highly Rated Time Tracking Software",
    },
    {
      id: 2,
      image: "https://tmetric.com/media/w4mhgaul/time-tracking-software.png",
      title: "Top Time Tracking Software in 2020",
    },
    {
      id: 3,
      image: "https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png",
      title: "Crozdesk Happiest Users",
    },
    {
      id: 4,
      image: "https://tmetric.com/media/c2eewysw/g2_2022_main_page.png",
      title: "G2 High Performer Spring 2022",
    },
    {
      id: 5,
      image: "https://tmetric.com/media/a00doqsb/icon-customer-rating.png",
      title: "Capterra",
    },
    {
      id: 6,
      image: "https://tmetric.com/media/0mxfl3xw/icon-customer-choice.png",
      title: "Software Suggest",
    },
    {
      id: 7,
      image: "https://tmetric.com/media/jfxavlps/getapp-logotype.svg",
      title: "GetApp",
    },
  ];
  return (
    <Fragment>
      <HomepageHeader />
      <Box p="15px 60px" borderBottom="1px solid #e2e7eb">
        <List display="flex" justifyContent="center" alignItems="center">
          {awardList.map((award) => (
            <ListItem key={award.id} p="12px" w="14.28%">
              <Image
                src={award.image}
                alt={award.title}
                width="120"
                height="120"
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <FeaturesInfo />
      <ManageTeam />
      <EnsureProfit />
    </Fragment>
  );
};

export default Homepage;
