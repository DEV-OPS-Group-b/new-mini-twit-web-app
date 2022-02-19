import axios from "axios";

export function requestGetAllTweets() {
  return axios.request({
    method: "get",
    url: "http://localhost:8080/devops/tweet/get-all-tweets",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function requestGetUserTweets(profileUsername) {
  return axios.request({
    method: "get",
    url: `http://localhost:8080/devops/tweet/get-user-tweets/${profileUsername}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function requestCreateTweets(username, tweet) {
  return axios.request({
    method: "post",
    url: "http://localhost:8080/devops/tweet/add-tweet",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: { username, tweet }
  });
}

export function requestUpdateTweetFlag(tweetId, username, password) {
  return axios.request({
    method: "post",
    url: "http://localhost:8080/devops/tweet/update-Tweet-flag",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: { tweetId, username, password }
  });
}