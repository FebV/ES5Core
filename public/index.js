import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import QuestionCard from './components/QuestionCard';
import { AppContainer } from 'react-hot-loader';
injectTapEventPlugin();

class App extends React.Component {
    render() {
      return (
        <div>
        <MuiThemeProvider>
            <AppBar 
              title="Online Judge"
            />
        </MuiThemeProvider>
        <br />
        <MuiThemeProvider>
            <QuestionCard 
              title="变量提升"
              subTitle="No.1"
              content={`简单描述变量提升的表现和原理`}
              act1="submit"
              act2="reset"
              type="choice"
            />
        </MuiThemeProvider>
        <br />
        <MuiThemeProvider>
            <QuestionCard 
              title="数组遍历"
              subTitle="No.2"
              content={`假设有一个数组arr，遍历数组并输出每一位的值`}
              act1="submit"
              act2="cancel"
            />
        </MuiThemeProvider>
        <br />
        </div>
      );}
};

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
