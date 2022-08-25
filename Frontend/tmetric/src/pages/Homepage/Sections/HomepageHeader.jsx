import React, { Fragment } from "react";
import {
  Box,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const HomepageHeader = () => {
  return (
    <Fragment>
      <HStack bg={"#FBEFCA"} pt="6.25rem" pb="1.25rem" pl="80px" pr="80px">
        <Box w="50%" p="0 15px">
          <Heading
            as="h1"
            fontSize="3.75rem"
            fontWeight="bold"
            mb="1rem"
            noOfLines={2}
          >
            Make the best use of your time
          </Heading>
          <Heading as="h3" fontSize="1.25rem" fontWeight="bold">
            TMetric is a smart choice for time tracking to see work in progress
            and keep team, cost and quality under control
          </Heading>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              m="1rem 0"
              children={<EmailIcon color="#3070f0" />}
            />
            <Input
              placeholder="Enter your email address"
              m="1rem 0"
              maxW="450px"
              background="white"
              size="md"
            />
          </InputGroup>
          <HStack>
            <Button
              size="md"
              bg="#3070f0"
              color="white"
              minW="200px"
              _hover={{ bg: "#0053a6" }}
            >
              Get Started
            </Button>
            <Text marginStart="1rem">Fully Functional 30-Day Trial</Text>
          </HStack>
        </Box>
        <Box w="50%" p="0 15px">
          <AspectRatio ratio={16 / 9}>
            <iframe
              title="tmetric"
              src="https://www.youtube.com/embed/d2LwNiALPIM?autoplay=1&controls=1&list=PL74QEPdFcvLY9y7ZGsu9IE2kMwGJmAT3f&listType=playlist"
              allowFullScreen
            />
          </AspectRatio>
          {/* <div class="video-box">
            <img
              class="cover"
              src="https://tmetric.com/media/w53hmkzd/img-video-cover.png"
              width="720"
              height="405"
              alt=""
            />
            <a
              href="#"
              class="btn-play"
              data-toggle="modal"
              data-target="#youTubeVideoModal"
              data-video-url="https://www.youtube.com/embed/d2LwNiALPIM?autoplay=1&amp;controls=1&amp;list=PL74QEPdFcvLY9y7ZGsu9IE2kMwGJmAT3f&amp;listType=playlist"
            >
              Watch Video
            </a>
          </div> */}
        </Box>
      </HStack>
    </Fragment>
  );
};

export default HomepageHeader;
