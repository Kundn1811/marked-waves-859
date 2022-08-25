import {
  Box,
  Button,
  Heading,
  Link,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React, { Fragment } from "react";

const ManageTeam = () => {
  return (
    <Box bg="#f6f7f8" p="80px">
      <Box display="flex">
        <Box w="40%">
          <Heading
            as="h2"
            fontWeight="bold"
            fontSize="4rem"
            mb="2rem"
            maxW="800px"
            noOfLines={2}
          >
            Manage your team effectively
          </Heading>
          <UnorderedList
            fontSize="1.5rem"
            marginStart="2.5rem"
            fontWeight="500"
          >
            <ListItem>timekeeping</ListItem>
            <ListItem>sites and apps monitoring</ListItem>
            <ListItem>activity tracking</ListItem>
            <ListItem>
              <Link
                href="/employee-monitoring"
                color="#3070f0"
                title="Employee Monitoring"
              >
                screenshots capturing
              </Link>
            </ListItem>
            <ListItem>task management</ListItem>
            <ListItem>
              <Link href="/integrations" color="#3070f0" title="Integrations">
                50+ integrations
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/work-schedules"
                color="#3070f0"
                title="Work Schedules"
              >
                work schedule
              </Link>
            </ListItem>
          </UnorderedList>
          <Button size="lg" bg="#3070f0" color="white" mt="20px" minW="200px">
            Start Free Trial
          </Button>
        </Box>
        <Box w="60%" pt="40px">
          <Image
            src="https://tmetric.com/media/upkh02nn/img-activity-cases.svg"
            alt="Manage your team effectively"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ManageTeam;
