import React, { useState } from "react";
import styles from "../styles/Post.module.css";
import Dot from "./Dot";
import Icon from "./Icon";

const Post = ({ post, id }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const renderDetails = () => {
    return { __html: post.details }; // Use __html to set HTML content
  };

  return (
    <div className={`${styles.mainContainer} ${isExpanded ? styles.expanded : ""}`} onClick={toggleExpansion}>
      <div className={styles.headingDiv}>
        <h2>{post.title}</h2>
        <Icon type="like" color="#FFA33C" />
      </div>

      <div className={`${styles.details} ${isExpanded ? styles.expandedText : ""}`} dangerouslySetInnerHTML={renderDetails()}></div>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <span className={styles.mood}>{post.mood}</span> by {id}
        </div>
        <div className={styles.footerRight}>
          <p>{post.date}</p> <Dot /> <p>2 mins Read</p> <Dot />
          <p>{post.views} Views</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
