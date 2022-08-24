import React from "react";
import { Button, Heading } from "@chakra-ui/react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="#">
            <img
              src="https://app.tmetric.com/images/tmetric_logo_and_text.svg"
              alt=""
            />
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">
              Why TMetric <BiChevronDown />
            </a>
            <div className="mega_menu">
              <div className="content">
                <div className="content-body">
                  <Heading color={"gray"} size={"lg"} fontWeight="400">
                    Overview
                  </Heading>
                  <div className="details">
                    <div className="detail">
                      <Heading size={"sm"} lineHeight="2rem" className='heading'>
                        Industry
                      </Heading>
                      <p>Made for all industries.Check benefits og usage</p>
                    </div>
                    <div className="detail">
                      <Heading size={"sm"} lineHeight="2rem" className='heading'>
                        Customers
                      </Heading>
                      <p>
                        See why business use TMetric for time tracking and
                        workflow management
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-body">
                  <Heading color={"gray"} size={"lg"} fontWeight="400">
                    Features
                  </Heading>
                  <div className="f-details">
                    <div className="detail">
                      <Heading
                        size={"xs"}
                        lineHeight="2rem"
                        display={"inline-flex"} className='heading'
                      >
                        {" "}
                        <img
                          src="https://tmetric.com/media/qojb5snq/icon-timer-gray.svg"
                          alt=""
                        />
                        Time Tracking
                      </Heading>
                      <p>Capture and control every task you work on</p>
                    </div>
                    <div className="detail">
                      <Heading
                        size={"xs"}
                        lineHeight="2rem"
                        display={"inline-flex"} className='heading'
                      >
                        {" "}
                        <img
                          src="https://tmetric.com/media/5r1l1s4g/icon-invoice-gray.svg"
                          alt=""
                        />{" "}
                        Billing & Invoicing
                      </Heading>
                      <p>Set billable rates and easily create invoices</p>
                    </div>
                    <div className="detail">
                      <Heading
                        size={"xs"}
                        lineHeight="2rem"
                        display={"inline-flex"} className='heading'
                      >
                        {" "}
                        <img
                          src="https://tmetric.com/media/kqgpqtvh/icon-project-gray.svg"
                          alt=""
                        />{" "}
                        Project Management
                      </Heading>
                      <p>Create project, set rates and budgets</p>
                    </div>
                    <div className="detail">
                      <Heading
                        size={"xs"}
                        lineHeight="2rem"
                        display={"inline-flex"} className='heading'
                      >
                        {" "}
                        <img
                          src="https://tmetric.com/media/isxcp2ip/icon-team-gray.svg"
                          alt=""
                        />{" "}
                        Team Management
                      </Heading>
                      <p>
                        Monitor productivity and activity level of your team{" "}
                      </p>
                    </div>
                    <div className="detail">
                      <Heading
                        size={"xs"}
                        lineHeight="2rem"
                        display={"inline-flex"} className='heading'
                      >
                        {" "}
                        <img
                          src="https://tmetric.com/media/g3jc0dsg/icon-reports-gray.svg"
                          alt=""
                        />{" "}
                        Task Management
                      </Heading>
                      <p>Manage task and set up an effective workflow</p>
                    </div>
                    <div className="detail">
                      <Heading
                        size={"xs"}
                        lineHeight="2rem"
                        display={"inline-flex"} className='heading'
                      >
                        {" "}
                        <img
                          src="https://tmetric.com/media/bxylkc2s/icon-time-off-gray.svg"
                          alt=""
                        />{" "}
                        Time Off
                      </Heading>
                      <p>
                        Simply ask for days off and control teams attendance
                      </p>
                    </div>
                  </div>
                  <Heading
                    display={"inline-flex"}
                    size={"md"}
                    alignItems="center"
                    color={"#5184e6"}
                    fontWeight="500"
                    lineHeight="3rem"
                  >
                    View All Features <BsArrowRight />
                  </Heading>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#">
              Apps & Integrations <BiChevronDown />
            </a>
            <div className="mega_menu">
              <div className="content">
                <div className="content-body">
                  <Heading color={"gray"} size={"lg"} fontWeight="400">
                    Apps
                  </Heading>
                  <div className="details">
                    <div className="detail">
                      <Heading size={"sm"} lineHeight="2rem" className='heading' >
                        Browser Extensions
                      </Heading>
                      <p>
                        Simple time tracking extension which helps you be more
                        productive
                      </p>
                    </div>
                    <div className="detail">
                      <Heading size={"sm"} lineHeight="2rem" className='heading'>
                        Mobile apps
                      </Heading>
                      <p>
                        Install TMetric app to your phone or a tablet device.
                        Android and iOS platforms are supported.
                      </p>
                    </div>
                    <div className="detail">
                      <Heading size={"sm"} lineHeight="2rem" className='heading'>
                        Desktop apps
                      </Heading>
                      <p>
                        Download TMetric app for your desktop computer or a
                        laptop
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-body">
                  <Heading color={"gray"} size={"lg"} fontWeight="400">
                    Integrations
                  </Heading>
                  <div className="f-details">
                    <div className="detail">
                      <Heading
                        size={"xs"}
                        lineHeight="2rem"
                        display={"inline-flex"}
                        className='heading'
                      >
                        {" "}
                        <img
                          src="https://tmetric.com/media/rejbvkxk/icon-jira-small.svg"
                          alt=""
                          height="32px"
                          width="32px"
                        />
                        Jira
                      </Heading>
                      <p>Time tracking on every task in one click</p>
                    </div>
                    <div className="detail">
                      <Heading
                        size={"xs"}
                        lineHeight="2rem"
                        display={"inline-flex"} className='heading'
                      >
                        {" "}
                        <img
                          src="https://tmetric.com/media/u4kphldq/icon-asana-small.svg"
                          alt=""
                          height="32px"
                          width="32px"
                        />{" "}
                        Asana
                      </Heading>
                      <p>Start to accurately track time of task</p>
                    </div>
                    <div className="detail">
                      <Heading
                        size={"xs"}
                        lineHeight="2rem"
                        display={"inline-flex"} className='heading'
                      >
                        {" "}
                        <img
                          src="https://tmetric.com/media/jduhrdq5/icon-todoist-small.svg"
                          alt=""
                          height="32px"
                          width="32px"
                        />{" "}
                        Todoist
                      </Heading>
                      <p>Track time of your list and task</p>
                    </div>
                    <div className="detail">
                      <Heading
                        size={"xs"}
                        lineHeight="2rem"
                        display={"inline-flex"} className='heading'
                      >
                        {" "}
                        <img
                          src="https://tmetric.com/media/uq4dqcrf/icon-ms-office-small.svg"
                          alt=""
                          height="32px"
                          width="32px"
                        />{" "}
                        MS Office
                      </Heading>
                      <p>Get plugin for tracking time in MS Office Online </p>
                    </div>
                    <div className="detail">
                      <Heading
                        size={"xs"}
                        lineHeight="2rem"
                        display={"inline-flex"} className='heading'
                      >
                        {" "}
                        <img
                          src="https://tmetric.com/media/nfqj22co/icon-github-small.svg"
                          alt=""
                          height="32px"
                          width="32px"
                        />{" "}
                        GitHub
                      </Heading>
                      <p>
                        Track time spent working on an issue with one mouse
                        click
                      </p>
                    </div>
                    <div className="detail">
                      <Heading
                        size={"xs"}
                        lineHeight="2rem"
                        display={"inline-flex"} className='heading'
                      >
                        {" "}
                        <img
                          src="https://tmetric.com/media/l1cply4y/icon-freshdesk-small.svg"
                          alt=""
                          height="32px"
                          width="32px"
                        />{" "}
                        Freshdesk
                      </Heading>
                      <p>Track time spent on every support ticket</p>
                    </div>
                  </div>
                  <Heading
                    display={"inline-flex"}
                    size={"md"}
                    alignItems="center"
                    color={"#5184e6"}
                    fontWeight="500"
                    lineHeight="3rem"
                  >
                    View All Features <BsArrowRight />
                  </Heading>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <div className="authBtn">
          <Button
            fontSize={"md"}
            fontWeight={600}
            variant={"ghost"}
            href={"#"}
            _hover=""
          >
            Log In
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            border="1px"
            borderColor="#5184e6"
            fontSize={"md"}
            fontWeight={600}
            color={"#5184e6"}
            variant="outline"
            href={"#"}
            _hover={{
              bg: "#5184e6",
              color: "white",
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
