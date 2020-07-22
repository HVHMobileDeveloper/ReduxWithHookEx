import RootReducer from ".";

const { createStore } = require("redux");

const store = createStore(RootReducer)

export default store