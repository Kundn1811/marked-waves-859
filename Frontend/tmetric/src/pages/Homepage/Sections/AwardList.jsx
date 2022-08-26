import React from "react";
import { Box, List, ListItem, Image, Link } from "@chakra-ui/react";

const AwardList = () => {
  const awardList = [
    {
      id: 1,
      image: "https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png",
      link: "https://www.saasworthy.com/product/tmetric",
      title: "Highly Rated Time Tracking Software",
    },
    {
      id: 2,
      image: "https://tmetric.com/media/w4mhgaul/time-tracking-software.png",
      link: "https://www.softwareworld.co/time-tracking-software/#TMetric",
      title: "Top Time Tracking Software in 2020",
    },
    {
      id: 3,
      image: "https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png",
      link: "https://crozdesk.com/software/tmetric",
      title: "Crozdesk Happiest Users",
    },
    {
      id: 4,
      image: "https://tmetric.com/media/c2eewysw/g2_2022_main_page.png",
      link: "https://www.g2.com/products/tmetric/reviews",
      title: "G2 High Performer Spring 2022",
    },
    {
      id: 5,
      image: "https://tmetric.com/media/a00doqsb/icon-customer-rating.png",
      link: "https://www.capterra.com/p/148624/TMetric/",
      title: "Capterra",
    },
    {
      id: 6,
      image: "https://tmetric.com/media/0mxfl3xw/icon-customer-choice.png",
      link: "https://www.softwaresuggest.com/tmetric-free-time-tracker",
      title: "Software Suggest",
    },
    {
      id: 7,
      image: "https://tmetric.com/media/jfxavlps/getapp-logotype.svg",
      link: "https://www.getapp.com/project-management-planning-software/a/tmetric/",
      title: "GetApp",
    },
  ];
  return (
    <Box p="15px 60px" borderBottom="1px solid #e2e7eb">
      <List display="flex" justifyContent="center" alignItems="center">
        {awardList.map((award) => (
          <ListItem key={award.id} p="12px" w="14.28%">
            <Link href={award.link}>
              <Image
                src={award.image}
                alt={award.title}
                width="120"
                height="120"
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AwardList;
