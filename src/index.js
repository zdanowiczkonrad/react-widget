console.log('hello there');

import React from "react";
import ReactDOM from "react-dom";

class CounterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    componentDidMount() {
        setInterval(() => {this.setState({counter: this.state.counter+Math.ceil(Math.random()*10)})},1000);
    }
    render() {
        return this.state.counter;

    }
}
const Index = (props) => {
    console.log(props);
  return <div>Random timer widget: <CounterComponent/> <small><code>(parent className: {props.element.className})</code></small></div>;
};

console.log(document.getElementsByClassName("widget-mount")[0]);

const mount = el => ReactDOM.render(<Index element={el}/>, el);


/**
 * SDK global object
 */
window.Widget = {};

/**
 * Example widget mount by call
 * @param {HTMLElement} target - mount point 
 */
window.Widget.mount = function(target) {
    mount(target);
}

window.Widget.unmount = function(target) {
    ReactDOM.unmountComponentAtNode(target);
}




