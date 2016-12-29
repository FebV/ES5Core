var React = require('react');
var CodeMirror = require('react-codemirror');
require('codemirror/mode/javascript/javascript');
 
export default class CodeEditor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            code: this.props.init ? this.props.init : "function() {\n\n}",
        };
    }
    updateCode(newCode) {
        this.setState({
            code: newCode,
        });
        this.props.updateCode(newCode);
    }


    render() {
        var options = {
            lineNumbers: true,
            mode: 'javascript'
        };
        return <CodeMirror
        value={this.state.code}
        onChange={this.updateCode.bind(this)}
        options={options} />
    }
};
