import { configureStore, createSlice } from "@reduxjs/toolkit";

const stepSlice = createSlice({
  name: "stepCounter",
  initialState: { stepVal: 1 },
  reducers: {
    increment: (state, action) => {
      state.stepVal++;
    },
    decrement: (state, action) => {
      state.stepVal--;
    },
  },
});

const toggleSlice = createSlice({
  name: "toggle",
  initialState: { value: false },
  reducers: {
    toggleHandle: (state, action) => {
      if (action.payload.num !== state.value) {
        state.value = !state.value;
      }
    },

    changePlan: (state, action) => {
      if (action.payload.num !== state.value) {
        state.value = action.payload.num;
      } else {
        state.value = false;
      }
    },
  },
});

const addOnSlice = createSlice({
  name: "addOn",
  initialState: {checkVal:""},
  reducers: {
    addAddOn: (state, action) => {
      if (action.payload.num) {
        state.checkVal= [...state.checkVal, action.payload.num2];
        console.log(state.checkVal)
      }else{
        state.checkVal=state.checkVal.filter((item)=>item !==action.payload.num2)
      }
    },
  },
});

const selectPlanSlice = createSlice({
  name: "plan",
  initialState: { planValue: "Arcade" },
  reducers: {
    handlePlan: (state, action) => {
      state.planValue = action.payload;
      // console.log(state)
    },
  },
});

const stepStore = configureStore({
  reducer: {
    stepCounter: stepSlice.reducer,
    toggle: toggleSlice.reducer,
    plan: selectPlanSlice.reducer,
    addOn: addOnSlice.reducer,
  },
});
export const addOnActions = addOnSlice.actions;
export const planActions = selectPlanSlice.actions;
export const toggleAction = toggleSlice.actions;
export const stepAction = stepSlice.actions;
export default stepStore;
