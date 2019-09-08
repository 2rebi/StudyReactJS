const React = require("react");
const ReactDom = require("react-dom");
const { hot } = require("react-hot-loader/root");

const Shiritori = require("./Shiritori")

const Hot = hot(Shiritori);

ReactDom.render(<Hot />, document.querySelector("#root"));