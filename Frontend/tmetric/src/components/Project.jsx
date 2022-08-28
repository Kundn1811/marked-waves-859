import styles from "../Styles/project.module.css";
import { RiFolderOpenFill } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
// import { delete_project, toggle_status } from "../redux/project/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delete_project, patch_request } from "../redux/app/action";
const Project = (el) => {
  const { index, options, setOptions,data } = el;
    const {status,name,notes,code,_id} = data
    console.log(status)
    console.log(_id)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (_id)=>{
    navigate(`/app/editproject/${_id}`)
  }
  return (
    <div className={styles.project_div}>
      <div className={styles.project_div_first}>
        <input checked={status} type="checkbox" />
        <div className={styles.folder_logo}>
          <RiFolderOpenFill />
        </div>
        <p>{name}</p>

        {el.status && <span className={styles.project_div_status}>done</span>}
      </div>
      <div>
        <p>{code}</p>
      </div>
      <div className={styles.project_div_noteam}>
        <p>No team</p>
      </div>
      <div className={styles.more_options_div_last}>
        <FiMoreHorizontal
          className={styles.dotdotdot}
          fontSize={"18px"}
          onClick={() => {
            setOptions((prev) => {
              if (prev === index) {
                return false;
              } else {
                return index;
              }
            });
          }}
        />
        {index === options && (
          <div className={styles.other_btn}>
            <div>
              <button
                onClick={() => {
                  handleEdit(_id)
                }}
              >
                Edit
              </button>
            </div>

            <hr />
            <div>
              <span>Status</span>
              <button
                onClick={() => {
                  dispatch(patch_request(_id,{status:!status}));
                }}
                disabled={!el.status}
              >
                {!el.status ? <MdDone /> : ""} Active
              </button>
              <button
                onClick={() => {
                  dispatch(patch_request(_id,{status:!status}));
                }}
                disabled={el.status}
              >
                
                {el.status ? <MdDone /> : ""}Done
              </button>
            </div>

            <hr />
            <div>
              <button
                onClick={() => {
                  dispatch(delete_project(_id));
                  setOptions(false);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
