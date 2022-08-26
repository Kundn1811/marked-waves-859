import React from "react";
import style from "./Blog.module.css";

const BlogCard = ({ item }) => {
  return (
    <div className={style.blogadallprofilecard}>
      <a href={item.heading}>
        <div className={style.blogadallprofilecardimg}>
          <img src={item.imgUrl} alt="" />
        </div>
      </a>
      <a href={item.heading}>
        {" "}
        <div className={style.blogadallprofilecarddetail}>
          <h6>PRODUCTIVITY HACKS</h6>
          <h1>{item.para}</h1>
          <p>{item.description}</p>
        </div>
      </a>
      <div className={style.blogadprofileblogcart}>
        <div className={style.blogadprofileimgblogcart}>
          <img src={item.image} alt="" />
        </div>
        <div>
          <h5>{item.name}</h5>
          <p className={style.blogadprofiledate}>{item.date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
