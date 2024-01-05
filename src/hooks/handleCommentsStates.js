import React, { useEffect, useState } from "react";

function useHandleCommentStates(data) {
  const [commentData, setCommentData] = useState(data);
  useEffect(() => {
    const copyData = structuredClone(commentData);
    copyData.forEach((eachData) => {
      eachData.isExpanded = false;
    });

    setCommentData(copyData);
  }, []);

  return [commentData, setCommentData];
}
export default useHandleCommentStates;
