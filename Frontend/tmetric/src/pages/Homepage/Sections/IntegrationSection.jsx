import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  HStack,
  Wrap,
  WrapItem,
  Center,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const IntegrationSection = () => {
  const integrationList = [
    {
      id: 1,
      image: "https://tmetric.com/media/cshbmvwf/logo-integration-gsuite.svg",
    },
    {
      id: 2,
      image: "https://tmetric.com/media/fnbggshs/logo-integration-msoffice.svg",
    },
    {
      id: 3,
      image: "https://tmetric.com/media/plvb1mg0/logo-integration-gkeep.svg",
    },
    {
      id: 4,
      image: "https://tmetric.com/media/smflyk5w/logo-integration-github.svg",
    },
    {
      id: 5,
      image: "https://tmetric.com/media/kbrcntmi/logo-integration-excel.svg",
    },
    {
      id: 6,
      image: "https://tmetric.com/media/4aeci1fh/logo-integration-asana.svg",
    },
    {
      id: 7,
      image: "https://tmetric.com/media/caxbzjss/logo-integration-jira.svg",
    },
    {
      id: 8,
      image: "https://tmetric.com/media/dw2nwjwv/logo-integration-gitlab.svg",
    },
    {
      id: 9,
      image: "https://tmetric.com/media/me5ih5eu/logo-integration-gdocs.svg",
    },
    {
      id: 10,
      image: "https://tmetric.com/media/0bzmfrlf/logo-integration-trello.svg",
    },
    {
      id: 11,
      image: "	https://tmetric.com/media/sdaj41fi/logo-integration-redmine.svg",
    },
    {
      id: 12,
      image: "https://tmetric.com/media/1xedbfav/logo-integration-zendesk.svg",
    },
    {
      id: 13,
      image: "https://tmetric.com/media/n3dmgi1p/logo-integration-wrike.svg",
    },
  ];
  return (
    <Box p="80px 60px">
      <Heading
        as="h2"
        fontWeight="bold"
        fontSize="3rem"
        m="0 auto 2rem"
        textAlign="center"
      >
        Integration with 50+ popular services{" "}
      </Heading>
      <Text fontSize="1.25rem" fontWeight="500" textAlign="center" mb="2rem">
        TMetric integrates with dozens of services, which lets you measure
        progress and activity in any tool you use.
      </Text>

      <HStack justifyContent="center">
        <Button
          size="md"
          bg="#3070f0"
          color="white"
          minW="160px"
          _hover={{ bg: "#0053a6" }}
        >
          Start Free Trial
        </Button>
        <Link
          pl="10px"
          color="#3070f0"
          fontWeight={500}
          textDecoration="none"
          lineHeight="initial"
          _hover={{ color: "#0053a6" }}
        >
          <Box fontSize="18px" display="flex">
            <Text>Explore All Integrations</Text>
            <BsArrowRightShort fontSize="25px" />
          </Box>
        </Link>
      </HStack>
      <Wrap spacing="25px" justify="center" mt="2rem" maxW="1296px">
        {integrationList.map((elem) => (
          <WrapItem key={elem.id}>
            <Center
              border="1px solid #e2e7eb"
              borderRadius="12px"
              p="40px 12px"
              display="block"
              position="relative"
            >
              <Image src={elem.image} top="50%" left="50%" />
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default IntegrationSection;
