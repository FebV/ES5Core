import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import CodeEditor from './CodeEditor';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class QuestionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: null,
        };
    }

    runCode() {
        const code = this.state.code;
        if(eval(this.state.code) == this.props.expectReturn) {
            alert('Pass');
            return true;
        }
        else {
            alert('Fail');
            return false;
        }
    }

    updateCode(code) {
        this.setState({code});
    }

    render() {
        const style = {fontFamily: 'Microsoft Yahei'};
        let inner = null;
        if(this.props.type == 'choice')
            inner = <RadioButtonGroup name="choice">
                        <RadioButton
                            value="light"
                            label="where"
                            // style={styles.radioButton}
                        />
                    </RadioButtonGroup>;
        let act = null;
        if(this.props.veri == true)
            act =   <CardActions>
                        <FlatButton label={this.props.act1} onClick={this.runCode.bind(this)} />
                        <FlatButton label={this.props.act2} />
                    </CardActions>

        return (
            <MuiThemeProvider>
            <div>
            <Card style={{padding: '10px', fontFamily: 'Microsoft Yahei'}}>
                <CardHeader
                title={this.props.title}
                subtitle={this.props.subTitle}  
                // actAsExpander={true}
                />
                <CardText style={style}>
                    {this.props.content}
                </CardText>
                {inner}
                <CodeEditor
                    updateCode={this.updateCode.bind(this)}
                    init={this.props.init}
                    param={this.props.param}
                />
                {act}
            </Card>
            <br />
            <br />
            </div>
            </MuiThemeProvider>
        );}
}