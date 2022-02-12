import axios from "axios";

// export function requestGetUserTweets(userId, token) {
export function requestGetUserTweets(userId) {
    return axios.request({
      method: "get",
    //   url: `https://localhost:5001/tweets/user/${userId}`,
    url: "https://my-json-server.typicode.com/Diiiya/demo/db",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: "Bearer " + token,
      },
    });
  }