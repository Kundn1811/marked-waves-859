import React from "react";
import style from "./Support.module.css";
import { IoMdSearch } from "react-icons/io";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
const Support = () => {
  return (
    <div>
      {/* header part */}
      <div className={style.mainsp}>
        <div className={style.navsp}>
          <div className={style.headingsp}>
            <h1 className={style.navsph1}>How can we help you?</h1>
          </div>

          <div className={style.searchsp}>
            <div>
              {" "}
              <IoMdSearch className={style.searchbtn} />
            </div>
            <div>
              {" "}
              <input
                className={style.searchinput}
                type="text"
                placeholder="Enter a question, keyword,or topic to find answer "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick start videos part */}

      <div className={style.videosp}>
        <div>
          <h2 className={style.videosph2}>Quick Start Videos</h2>
        </div>

        <div className={style.videospvideo}>
          <div className={style.videospvideo1}>
            <img
              src="https://i.ytimg.com/vi/jT3467I-c2M/mqdefault.jpg"
              alt=""
            />
          </div>
          <div className={style.videospvideo1}>
            <img
              src="https://i.ytimg.com/vi/jT3467I-c2M/mqdefault.jpg"
              alt=""
            />
          </div>
          <div className={style.videospvideo1}>
            <img
              src="https://i.ytimg.com/vi/jT3467I-c2M/mqdefault.jpg"
              alt=""
            />
          </div>
          <div className={style.videospvideo1}>
            <img
              src="https://i.ytimg.com/vi/jT3467I-c2M/mqdefault.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={style.videospcnt}>
          <a
            href="https://www.youtube.com/playlist?list=PL74QEPdFcvLbliXZZ04Zm8UlGl_G6tmvL"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Watch Other Tutorials
            <span>
              <BsFillArrowUpRightSquareFill />
            </span>
          </a>
        </div>
      </div>

      {/* user guide videos part*/}

      <div className={style.userguidemain}>
        <div>
          <h2 className={style.videosph2}>User Guide</h2>
        </div>
        <div className={style.userguide}>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/fqmd4fox/icon-guide-getting-started.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Getting Started</h2>
              <p className={style.userguide1p}>
                This section explains what a new <br />
                TMetric user should know and do to <br />
                quickly start tracking their work time.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/pgxe2341/icon-guide-time-tracking.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Time Tracking</h2>
              <p className={style.userguide1p}>
                Learn how to manage and lock time, <br />
                link tasks to time entries, set a required <br />
                work schedule and permissions.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img src="https://tmetric.com/media/nhhdfvxt/tasks.svg" alt="" />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Tasks</h2>
              <p className={style.userguide1p}>
                Learn about task management - how to <br />
                create and edit tasks, customize a task <br />
                list, and share tasks with others.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/ajnblb01/icon-guide-projects.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Projects</h2>
              <p className={style.userguide1p}>
                This section includes information about <br />
                creating different types of projects, <br />
                setting up budgets, and invoicing
                <br />
                clients for work days.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/jxsewpku/icon-guide-reports.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Reports</h2>
              <p className={style.userguide1p}>
                General information about using <br />
                reports in TMetric to review and <br />
                analyze your time tracking data.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/42if5ekb/icon-guide-billing-invoicing.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Invoices</h2>
              <p className={style.userguide1p}>
                Make invoicing painless, just go through <br />
                a learning process described in this <br />
                section and get paid on time.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/5uzjal2u/icon-guide-time-off.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Time Off</h2>
              <p className={style.userguide1p}>
                Learn how to simplify employee paid <br />
                time off and vacation tracking: set up <br />
                time off policies and properly <br />
                compensate days
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/0ssdlvqw/icon-guide-productivity-tracking.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Productivity Tracking</h2>
              <p className={style.userguide1p}>
                Here you will find everything about <br />
                productivity tracking - what activity <br />
                level is and where to get user activity
                <br />
                details.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/sa1fife4/icon-guide-team-management.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Team Management</h2>
              <p className={style.userguide1p}>
                Learn about team management - how <br />
                to add people to your workspace, create <br />a team, and
                monitor and payroll its work.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/lkpdnu2f/icon-guide-workspace-management.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Workspace Management</h2>
              <p className={style.userguide1p}>
                Configure your workspace, manage <br />
                members, learn user roles and track <br />
                your time as a team in TMetric.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/rfij2vrr/icon-guide-apps.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Apps</h2>
              <p className={style.userguide1p}>
                This topic describes a broad range of <br />
                TMetric apps: how to install and use <br />
                them and the features they provide.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/mpdjzi1w/icon-guide-integrations.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Intergation</h2>
              <p className={style.userguide1p}>
                Integrate TMetric with various time and <br />
                project management systems to track <br />
                time, create reports, and monitor your <br />
                team.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/iuyisza0/icon-guide-user-account.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>User Account Management</h2>
              <p className={style.userguide1p}>
                Here you will find all the necessary <br />
                information about a user account in
                <br /> TMetric and how to manage it with
                <br /> ease.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/srnmkwja/icon-guide-subscription-billing.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Subscription & Billing</h2>
              <p className={style.userguide1p}>
                This section provides information about <br />
                the subscription and billing process in <br />
                TMetric to understand how it all works.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
