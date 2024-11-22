import React from "react";
import { useState, useEffect } from "react";
import useCustomFetch from "../hooks/useCustomFetch";

function Blog() {
  const { data,loading,error } = useCustomFetch();
  if (loading) return <div>...yuklenir</div>;
  if (error) return <div>error varr {error}</div>;
  return (
    <div style={{ width: "50%" }}>
      {data.map((item) => (
        <div>{item.shipName}</div>
      ))}
    </div>
  );
}

export default Blog;
