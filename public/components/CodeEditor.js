var React = require('react');
var CodeMirror = require('react-codemirror');
require('codemirror/mode/javascript/javascript');
 
export default class CodeEditor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            code: "// Code",
        };
    }
    updateCode(newCode) {
        this.setState({
            code: newCode,
        });
    }
    render() {
        var options = {
            lineNumbers: true,
            mode: 'javascript'
        };
        return <CodeMirror value={this.state.code} onChange={() => {this.updateCode}} options={options} />
    }
};
