import Vue from "vue";
import Vuex from "vuex";
import defaultBoard from "./default-board";
import { saveStatePlugin } from "./utils";

Vue.use(Vuex);

const board = JSON.parse(localStorage.getItem("board")) || defaultBoard;

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board
  },
  getters: {
    getTask(state) {
      return id => {
        for (const column of state.board.columns) {
          // console.log(column.tasks);
          for (const task of column.tasks) {
            console.log(id, task.id);
            if (task.id === id) {
              console.log();
              return task;
            }
          }
        }
      };
    }
  },
  mutations: {}
});
