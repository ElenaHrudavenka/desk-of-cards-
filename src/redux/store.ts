import {combineReducers, createStore} from "redux";
import loginReducer from "./loginReducer";
import registrationReducer from "./registrationReducer";
import recoveryReducer from "./recoveryReducer";
import changePasswordReducer from "./changePasswordReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
    loginPage: loginReducer,
    registrationPage: registrationReducer,
    recoveryPage: recoveryReducer,
    changePasswordPage: changePasswordReducer,
    profilePage: profileReducer,
});
let store = createStore(rootReducer);
export type rootStoreType = ReturnType<typeof rootReducer>;
export default store;