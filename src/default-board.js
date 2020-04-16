import { uuid } from "./utils";

export default {
  name: "workshop",
  columns: [
    {
      name: "todo",
      tasks: [
        {
          description: "",
          name: "first task",
          id: "1",
          userAssigned: null
        },
        {
          description: "",
          name: "second task",
          id: "2",
          userAssigned: null
        },
        {
          description: "",
          name: "and thrid",
          id: "3",
          userAssigned: null
        }
      ]
    },
    {
      name: "in-progress",
      tasks: [
        {
          description: "",
          name: "first task",
          id: "4",
          userAssigned: null
        }
      ]
    },
    {
      name: "done",
      tasks: [
        {
          description: "",
          name: "first task",
          id: "5",
          userAssigned: null
        }
      ]
    }
  ]
};
