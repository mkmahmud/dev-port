import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openProject: false,
  detailsProject: {},
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
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpenProject, setDetailsProject } = projectSlice.actions;

export default projectSlice.reducer;
