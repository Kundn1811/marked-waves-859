import { Box, Heading, Text, Button, Link } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import React from "react";

const Pricing = () => {
  const options = [
    {
      id: 1,
      title: "Time tracking",
    },
    {
      id: 2,
      title: "Unlimited projects and clients",
    },
    {
      id: 3,
      title: "Timer button in 50+ web apps",
    },
    {
      id: 4,
      title: "Calendar integrations: Google, Outlook",
    },
    {
      id: 5,
      title: "Billable rates and money tracking",
    },
    {
      id: 6,
      title: "Budgeting for projects",
    },
    {
      id: 7,
      title: "Invoicing",
    },
    {
      id: 8,
      title: "Task management",
    },
    {
      id: 9,
      title: "Activity levels for employees",
    },
    {
      id: 10,
      title: "Apps and sites usage reports",
    },
    {
      id: 11,
      title: "Screenshots capturing",
    },
    {
      id: 12,
      title: "Paid time off tracking",
    },
    {
      id: 13,
      title: "Payroll for employees",
    },
    {
      id: 14,
      title: "Time tracking permissions",
    },
    {
      id: 15,
      title: "Time-sync with Jira and QuickBooks",
    },
    {
      id: 16,
      title: "Time Off Calendar",
    },
    {
      id: 17,
      title: "Work Schedule",
    },
    {
      id: 18,
      title: "Work Schedule",
    },
  ];

  return (
    <Box>
      <Box bg="#e8edff" textAlign="center" mt="3.7rem" minH="356px">
        <Heading
          fontSize="3.75rem"
          fontWeight="bold"
          pt="94px"
          m="0 auto 2.1rem"
        >
          Pricing
        </Heading>
        <Text m="0 auto" fontSize="1.25rem" fontWeight="bold">
          All plans include free 30-day trial. No credit card required!
        </Text>
      </Box>
      <Box
        m="8px 40px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="1px solid #e2e6eb"
        borderRadius="12px"
        p="1.1rem 2rem"
      >
        <Slider aria-label="slider-ex-2" colorScheme="blue" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>

      {/* Other Questions Section */}
      <Box borderTop="1px solid #e2e6eb" p="3.1875rem 0 2.5rem">
        <Heading
          textAlign="center"
          fontSize="2.25rem"
          fontWeight="bold"
          m="0 0 2.65rem"
        >
          Other Question
        </Heading>

        <Box maxW="728px" m="0 auto">
          <Box fontWeight="600" mt="30px" display="flex">
            <Button
              bg="#fef6e2"
              color="#9b6919"
              fontSize="20px"
              width="50px"
              height="50px"
              marginRight="40px"
              borderRadius="12px"
              border="none"
            >
              Q
            </Button>
            <Text
              border="1px solid #e2e6eb"
              borderRadius="0 12px 12px 12px"
              p=".92rem 1.25rem"
              position="relative"
            >
              Have a large team?
            </Text>
          </Box>

          <Box mt="30px" display="flex">
            <Button
              background="#e3f8e7"
              color="#127924"
              fontSize="20px"
              width="50px"
              height="50px"
              marginRight="40px"
              fontWeight="600"
              borderRadius="12px"
              border="none"
            >
              A
            </Button>
            <Text to="#">
              You can save money with our volume discount for teams of 40+
              users. Learn more on{" "}
              <span style={{ color: "#5ea0f5" }}> FAQ.</span>
            </Text>
          </Box>

          <Box mt="30px" fontWeight="600" display="flex">
            <Button
              bg="#fef6e2"
              color="#9b6919"
              fontSize="20px"
              width="50px"
              height="50px"
              marginRight="40px"
              borderRadius="12px"
              border="none"
            >
              Q
            </Button>
            <Text
              border="1px solid #e2e6eb"
              borderRadius="0 12px 12px 12px"
              p=".92rem 1.25rem"
              position="relative"
            >
              Running a non-profit organization?
            </Text>
          </Box>

          <Box mt="30px" display="flex">
            <Button
              background="#e3f8e7"
              color="#127924"
              fontSize="20px"
              width="50px"
              height="50px"
              marginRight="40px"
              fontWeight="600"
              borderRadius="12px"
              border="none"
            >
              A
            </Button>
            <Text>
              We offer special{" "}
              <span style={{ color: "#5ea0f5" }}>
                pricing options for non-profit
              </span>{" "}
              and education organizations. To apply, please{" "}
              <span style={{ color: "#5ea0f5" }}> contact</span> team
            </Text>
            .
          </Box>

          <Box mt="30px" fontWeight="600" display="flex">
            <Button
              bg="#fef6e2"
              color="#9b6919"
              fontSize="20px"
              width="50px"
              height="50px"
              marginRight="40px"
              borderRadius="12px"
              border="none"
            >
              Q
            </Button>

            <Text
              border="1px solid #e2e6eb"
              borderRadius="0 12px 12px 12px"
              p=".92rem 1.25rem"
              position="relative"
            >
              Have other sales questions?
            </Text>
          </Box>

          <Box mt="30px" display="flex">
            <Button
              background="#e3f8e7"
              color="#127924"
              fontSize="20px"
              width="50px"
              height="50px"
              marginRight="40px"
              fontWeight="600"
              borderRadius="12px"
              border="none"
            >
              A
            </Button>
            <Text to="#">
              Please contact our sales department at
              <span style={{ color: "#5ea0f5" }}> sales@tmetric.com</span>
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Last Section */}
      <Box
        bgImage="url(https://tmetric.com/media/shvmqkff/colored-banner-image.png)"
        bgSize="cover"
        textAlign="center"
        p="4rem 0 2rem"
      >
        <Heading fontSize="2.25rem" fontWeight="bold" mb="2rem">
          Make time work for you!
        </Heading>
        <Box className="btn2">
          <Button
            size="lg"
            bg="#3070f0"
            color="white"
            mb="2rem"
            minW="200px"
            _hover={{ bg: "#0053a6" }}
          >
            Start Free Trial
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Pricing;
