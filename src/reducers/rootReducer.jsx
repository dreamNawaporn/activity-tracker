import { combineReducers } from "redux";
import activitiesReducer from "./activitiesReducers";

const rootReducer = combineReducers({
    activities: activitiesReducer,
});

export default rootReducer;