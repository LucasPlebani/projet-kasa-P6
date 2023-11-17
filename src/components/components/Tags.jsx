import React from "react";
import "../styles/tags.sass"

function Tags(props, index) {
    const tags = props.tags;
  
    return (
      <>
        <div className="Tags">
          {tags.map((tag) => (
            <li className="pTags" key={`${tag}-${index}`}>
              {tag}
            </li>
          ))}
        </div>
      </>
    );
  }
export default Tags;