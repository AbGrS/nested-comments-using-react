import React from "react";
import useHandleCommentStates from "../hooks/handleCommentsStates";

export default function Comments({ data }) {
  const [commentData, setCommentData] = useHandleCommentStates(data);

  const handleExpansionState = (id) => {
    const copyData = structuredClone(commentData);
    for (let d of copyData) {
      if (d.id === id) {
        d.isExpanded = !d.isExpanded;
      }
    }

    setCommentData(copyData);
  };

  {
    return commentData.map((comment) => {
      return (
        <div
          key={comment.id}
          style={{ padding: "10px", borderTop: "2px solid" }}
        >
          <button onClick={() => handleExpansionState(comment.id)}>
            {!comment.child.length ? "" : comment.isExpanded ? "-" : "+"}
          </button>

          <label>{comment.text}</label>
          {comment.child && comment.isExpanded ? (
            <Comments data={comment.child} />
          ) : (
            ""
          )}
        </div>
      );
    });
  }
}
