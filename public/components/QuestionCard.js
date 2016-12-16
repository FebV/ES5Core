import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import CodeEditor from './CodeEditor';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export default class QuestionCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let inner = null;
        if(this.props.type == 'choice')
            inner = <RadioButtonGroup name="choice">
                        <RadioButton
                            value="light"
                            label="where"
                            // style={styles.radioButton}
                        />
                    </RadioButtonGroup>;

        return (
            <Card style={{padding: '10px'}}>
                <CardHeader
                title={this.props.title}
                subtitle={this.props.subTitle}  
                // actAsExpander={true}
                />
                <CardText>
                    {this.props.content}
                </CardText>
                {inner}
                <CodeEditor />
                <CardActions>
                <FlatButton label={this.props.act1} />
                <FlatButton label={this.props.act2} />
                </CardActions>
            </Card>
        );}
}