const { createStore } = require("redux");
const { default: Reducer } = require(".");

const store = createStore(Reducer)

export default store