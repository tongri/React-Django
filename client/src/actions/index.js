import * as actionType from "../constants/index.js";

export const setToken = data => {
  return {
    type: actionType.SET_TOKEN,
    data
  };
};
export const SET_TOKEN = "SET_TOKEN";

export const setTask = data => ({
  type: actionType.SET_TASK,
  data
});


export const setBoard = data => ({
  type: actionType.SET_BOARD,
  data
})

export const setTopic = data => ({
  type: actionType.SET_TOPIC,
  data
})
