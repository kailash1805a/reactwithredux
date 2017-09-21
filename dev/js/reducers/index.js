import { combineReducers } from "redux";
import PoliticiansReducer from "./PoliticiansReducer";
import PoliticianListReducer from "./PoliticiansListReducer";

const allReducers = combineReducers({
    'politicianList' : PoliticiansReducer,
    'activePolitician': PoliticianListReducer
});

export default allReducers;
