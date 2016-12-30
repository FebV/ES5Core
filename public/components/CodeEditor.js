var React = require('react');
var CodeMirror = require('react-codemirror');
require('codemirror/mode/javascript/javascript');
 
export default class CodeEditor extends React.Component{
    constructor(props) {
        super(props);
        let code = `function Exam() {\n\n}`;
        if(this.props.init || this.props.param) {
            code = this.props.init ? this.props.init : `function Exam(${this.props.param}) {\n\n}`;
        }
        this.state = {
            code
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
