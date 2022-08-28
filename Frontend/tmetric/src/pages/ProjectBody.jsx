import React, { useEffect, useState } from 'react'
import styles from '../Styles/projectbody.module.css'
import { IoIosSearch } from "react-icons/io";
import { TiArrowUp } from "react-icons/ti";
import { TiArrowUnsorted } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import Project from '../components/Project';
import { useDispatch, useSelector } from 'react-redux';
import { get_projects } from '../redux/app/action';
import { FiMoreHorizontal } from "react-icons/fi";

function ProjectBody() {
    const [options, setOptions] = useState(false);

    const navigate = useNavigate()
    let projects = useSelector((state)=>state.appReducer.projects)
      const dispatch = useDispatch();
    
    
    // useEffect(()=>{
    //     dispatch(get_projects())
    // },[dispatch])
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.project_title}>
          <h2>Projects</h2>
        </div>
        <div className={styles.filter_container}>
          <div>
            <select>
              <option>Client: All</option>
            </select>
          </div>
          <div>
            <select
            //   onChange={(e) => {
            //     dispatch(get_projects2(e.target.value));
            //   }}
            >
              <option value={""}>Status: Active and Done</option>
              <option value={""}>Active and Done </option>
              <option value={false}>Active</option>
              <option value={true}>Done</option>
            </select>
          </div>

          <div>
            <select>
              <option>Billing: Any</option>
              <option>Non-Billable</option>
              <option>Time & Materials</option>
            </select>
          </div>

          <div>
            <select>
              <option>Budget: Any</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
        
        <div className={styles.content_container}>
          <div className={styles.content_top_div}>
            <div className={styles.content_top_div_left_div}>
              <div>
                <button
                    onClick={() => {
                        navigate("/app/newproject");
                    }}
                    >
                    + New Project
                </button>
                </div>
              <div className={styles.toggle_div}>
                <input
                  type="checkbox"
                  id="switch"
                  className={styles.checkbox}
                />
                <label htmlFor="switch" className={styles.toggle}></label>
                <p>Group by client</p>
              </div>
              </div>
            <div className={styles.content_top_div_right_div}>
              <div>
              {/* <h4>{newArray.length} Projects </h4> */}
                <h4>Projects </h4>
              </div>
              <div className={styles.content_top_div_right_div_input}>
                <IoIosSearch />
                <input
                  type="text"
                  placeholder="Search"
                //   onChange={handleChnage}
                />
              </div>
            </div>
            </div>
          <div className={styles.content_header_div}>
            <div>
              <input type="checkbox" />
              <TiArrowUp />
              <p>PROJECT</p>
            </div>
            <div>
              <TiArrowUnsorted />
              <p>CODE</p>
            </div>
            <div>
              <p>TEAM</p>
            </div>
            <div></div>
          </div>
          {projects?.map((el, index) => (
            <Project
              key={index}
            //   data = {...el}
              options={options}
              setOptions={setOptions}
              index={index}
              data = {el}
            />
          ))}




      </div>
    </div>
    </div>
  )
}

export default ProjectBody