import React from "react";
import style from "../Styles/Blog.module.css";
import BlogCard from "./BlogCard";
import Data from "../data/Data.json";
const Blog = () => {
  return (
    <>
      <div>
        <div className={style.blognav}>
          <img
            src="https://blog.tmetric.com/content/images/size/w2000/2022/01/MicrosoftTeams-image--1-.png"
            alt=""
          />
        </div>
        <div className={style.blogad}>
          <div className={style.blogadimg}>
            <img
              src="https://blog.tmetric.com/content/images/size/w1000/2022/06/productivity-banner-2.png"
              alt=""
            />
          </div>
          <div>
            <div className={style.blogaddetail}>
              <h6>PRODUCTIVITY HACKS</h6>
              <h1>
                If You Want To Be <br /> Productive, Beware Of <br /> These 5
                Distractions
              </h1>
              <p>
                Distractions in the digital world spring up like <br />
                mushrooms after the rain. The biggest is having
                <br /> too many meetings. And there are four more that <br />
                block a productive and balanced life. If you know <br />
                them, you are better equipped for dealing with them.
              </p>
            </div>
            <div className={style.blogadprofile}>
              <div className={style.blogadprofileimg}>
                <img
                  src="https://blog.tmetric.com/content/images/size/w100/2021/11/-----1.png"
                  alt=""
                />
              </div>
              <div>
                <h5>Alla Chernets</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={style.blogadallprofilemap}>
          {Data.blog.map((item) => {
            return <BlogCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
