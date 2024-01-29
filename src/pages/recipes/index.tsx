import React, { useEffect } from "react";

export default function Recipes() {
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndPoint = "http://localhost:3000/api/auth";
      const response = await fetch(apiUrlEndPoint);
      const responseData = await response.json();
      console.log("response data:", responseData);
    }
    getPageData();
  }, []); // Added an empty dependency array to useEffect

  return <h1 className="all-outer">Cart Page</h1>;
}
