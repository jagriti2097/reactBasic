import React, { useState } from "react";
import "./Search.css";
// import axios from "axios";

const Search: React.FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [reposlink, setReposLink] = useState<string>("");

  type URLcreator = (e: any) => void;

  const urlCreator: URLcreator = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;
    setUrl("https://api.github.com/users/" + username);
    setReposLink("https://github.com/" + username + "?tab=repositories");
  };

  const getUserData: any = async () => {
    setLoading(true);
    // axios
    //   .get("")
    //   .then(function (response: any) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error: Error) {
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     console.log("End of API call");
    //   });
    // setLoading(false);
  };
  if (loading) {
    return <div className="spinner"></div>;
  }
  // Write your code here to display data on DOM considering:
  // 1- if username is valid, display all the details of the users.
  // 2- if username is invalid,display the error on the screen and give option to search again
  //Don't create a seperate component for the error page, handle it in the same component using conditional rendering concept in react
  else {
    return <></>;
  }
};

export default Search;
