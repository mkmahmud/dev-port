import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openProject: false,
  detailsProject: {},
  sortProject: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setOpenProject: (state) => {
      state.openProject = false;
    },
    setDetailsProject: (state, action) => {
      state.detailsProject = action.payload;
      state.openProject = true;
      state.sortProject = []
    },
    setSortProject: (state, action) => {
      const { payload } = action;
      const index = state.sortProject.findIndex((item) => item === payload);

      if (index !== -1) {
        // Remove the item if it already exists in the array
        state.sortProject.splice(index, 1);
      } else {
        // Add the item if it doesn't exist in the array
        state.sortProject.push(payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpenProject, setDetailsProject, setSortProject } = projectSlice.actions;

export default projectSlice.reducer;
