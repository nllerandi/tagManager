import { combineReducers } from 'redux';
import TestReducer from "./reducer_test";
import TagsReducer from "./reducer_tags";

const rootReducer = combineReducers({
    test: TestReducer,
    tags: TagsReducer
});

export default rootReducer;