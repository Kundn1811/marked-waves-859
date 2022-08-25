import { Box, List, ListItem, Image } from "@chakra-ui/react";
import React, { Fragment } from "react";
import FeaturesInfo from "./FeaturesInfo";
import HomepageHeader from "./HomepageHeader";
import ManageTeam from "./ManageTeam";

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
      <Box p="12px 60px" borderBottom="1px solid #e2e7eb">
        <List display="flex" justifyContent="center" alignItems="center">
          {awardList.map((award) => (
            <ListItem key={award.id} p="12px" w="14.28%">
              <Image src={award.image} alt={award.title} />
            </ListItem>
          ))}
        </List>
      </Box>
      <FeaturesInfo />
      <ManageTeam />
    </Fragment>
  );
};

export default Homepage;
