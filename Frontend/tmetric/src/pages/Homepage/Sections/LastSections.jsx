import React, { Fragment } from "react";
import {
  Button,
  Box,
  Heading,
  Text,
  HStack,
  Image,
  Link,
} from "@chakra-ui/react";

const LastSections = () => {
  const chooseTmetricData = [
    {
      id: 1,
      image: "https://tmetric.com/media/zrvmvbl3/icon-straightforward.svg",
      desc: "The most straightforward time tracking app",
    },
    {
      id: 2,
      image: "https://tmetric.com/media/opdfdo3l/icon-platforms.svg",
      desc: "Available on all platforms: macOS, Windows, Linux, iOS, and Android",
    },
    {
      id: 3,
      image: "https://tmetric.com/media/igkmpmix/icon-freetrial.svg",
      desc: "Free plan with basic time tracking for a team up to 5",
    },
    {
      id: 4,
      image: "https://tmetric.com/media/htxfmpoe/icon-reasonableprice.svg",
      desc: "Reasonable price makes it affordable for anyone",
    },
    {
      id: 5,
      image: "https://tmetric.com/media/0uyowzzu/icon-multilang.svg",
      desc: "Multilanguage solution",
    },
  ];
  return (
    <Fragment>
      <Box bg="#fff2cc" p="60px 80px" textAlign="center">
        <Heading fontWeight="bold" fontSize="2.25rem" m="0 auto 2rem">
          Read Hundreds of Reviews
        </Heading>
        <Image
          src="https://tmetric.com/media/rt1k0zjc/img-rating-4-5.svg"
          alt=""
          m="0 auto 1.5rem"
        />
        <Text fontWeight="bold" fontSize="2.25rem" m="0 auto 1rem">
          4.5 Customer Rating
        </Text>
        <Link
          href="https://www.capterra.com/p/148624/TMetric/"
          textDecoration="none"
          color="#3070f0"
          fontWeight="bold"
          fontSize="2.25rem"
          m="0 auto"
        >
          242 Reviews
        </Link>
      </Box>
      <Box textAlign="center" p="40px 80px">
        <Heading fontWeight="bold" fontSize="3rem" m="0 auto 2rem">
          Why choose TMetric?
        </Heading>
        <HStack m="20px">
          {chooseTmetricData.map((item) => (
            <Box
              key={item.id}
              marginStart="1.5rem"
              w="calc(20% - 30px)"
              p="23px"
              border="1px solid #e2e6eb"
              borderRadius="12px"
              textAlign="left"
              h="300px"
            >
              <Image
                src={item.image}
                display="block"
                mb="1.5rem"
                wb="60px"
                minW="60px"
              />
              <Text fontSize="1.25rem" fontWeight="500" maxW="156px">
                {item.desc}
              </Text>
            </Box>
          ))}
        </HStack>
      </Box>
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

export default LastSections;
