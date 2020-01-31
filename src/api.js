// import React, { Component } from "react";

export default function api(endpoint, { method = "GET", body, jwt } = {}) {
  return fetch("http://localhost:4000" + endpoint, {
    method: method,
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(response => Promise.all([response.status, response.json()]))
    .then(([status, data]) => {
      if (status >= 400) {
        throw { api_error: data };
      } else {
        return data;
      }
    });
}

// fetch("http://localhost:4000/products").then(data => console.log(data))
