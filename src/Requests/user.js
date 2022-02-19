import axios from "axios";

export function requestGetUser(userId) {
    return axios.request({
      method: "get",
      url: `http://localhost:8080/devops/user/getUser/${userId}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
}

export function requestCreateUser(username, email, password) {
  return axios.request({
    method: "post",
    url: "http://localhost:8080/devops/user/register",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: { username, email, password }
  });
}

export function requestLoginUser(username, password) {
  return axios.request({
    method: "get",
    url: `http://localhost:8080/devops/user/login/${username}/${password}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  });
}


export function requestFollowUser(currentUsername, targetUsername) {
  return axios.request({
    method: "post",
    url: "http://localhost:8080/devops/user/follow",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: { currentUsername, targetUsername }
  });
}

export function requestUnfollowUser(currentUsername, targetUsername) {
  return axios.request({
    method: "post",
    url: "http://localhost:8080/devops/user/unfollow",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: { currentUsername, targetUsername }
  });
}

export function requestIsUserFollowing(currentUsername, targetUsername) {
  return axios.request({
    method: "post",
    url: "http://localhost:8080/devops/user/isFollowing",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: { currentUsername, targetUsername }
  });
}