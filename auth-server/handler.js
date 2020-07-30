"use strict";

const axios = require("axios");

const meetupClientId = "n0mb0fa9rn9eegfm3s91fs5kp5";
const meetupClientSecret = "3m6ie1rrfdg3a0et9fnu0uhsjq";

module.exports.getAccessToken = async (event) => {
  const MEETUP_OAUTH_URL =
    "https://secure.meetup.com/oauth2/access" +
    "?client_id=" +
    meetupClientId +
    "&client_secret=" +
    meetupClientSecret +
    "&grant_type=authorization_code" +
    "&redirect_uri=https://azheng1991.github.io/meetup/" +
    "&code=" +
    event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

module.exports.refreshAccessToken = async (event) => {
  const MEETUP_OAUTH_URL =
    "https://secure.meetup.com/oauth2/access" +
    "?client_id=" +
    meetupClientId +
    "&client_secret=" +
    meetupClientSecret +
    "&grant_type=refresh_token" +
    "&refresh_token=" +
    event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
