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
          <QuestionCard 
            title="变量提升"
            subTitle="No.1"
            content={`编写一个关于变量提升的例子，并且给出注释`}
          />
          <QuestionCard 
            title="遍历结构"
            subTitle="No.2"
            content={`在es5语境下写出代码，选择本页所有<p>并输出标签innerHTML`}
          />
          <QuestionCard 
            title="默认值"
            subTitle="No.3"
            content={`在es5语境下写出函数，该函数会打印传入的一个参数，如果调用时没有传参，则该参数默认值为'default'字符串，一行实现`}
          />
          <QuestionCard 
            title="变长参数列表"
            subTitle="No.4"
            content={`在es5语境下写出函数，该函数可以传入任意多个数值参数，返回值为所有参数之和`}
          />
          <QuestionCard 
            title="闭包"
            subTitle="No.5"
            content={`写出一个函数，该函数需要一个参数，该函数为一个a标签添加click事件回调函数，使其触发时会alert出该函数的参数值`}
          />
          <QuestionCard 
            title="错误处理"
            subTitle="No.6"
            content={`写出一个函数，每次运行该函数都会报错，错误信息为'Yo Man'，另写出一个函数，在新的函数中运行第一个函数安然无恙`}
          />
          <QuestionCard 
            title="函数式"
            subTitle="No.7"
            content={`写出一个函数，该函数接受一个数组参数，将这个数组中所有小于15的数剔除掉，然后每个元素乘以2，然后把每个元素加起来，返回这个结果，一行实现`}
          />
          <QuestionCard 
            title="数组检索"
            subTitle="No.8"
            content={`写出一个函数，该函数接受一个数组参数和一个字符串参数，返回字符串参数是否为该数组中的一个元素，一行实现`}
          />
          <QuestionCard 
            title="正则表达式"
            subTitle="No.9"
            content={`写出一个函数，该函数接受一个字符串参数，判断该字符串参数是否符合一个邮件地址的格式，一行实现。(邮件地址格式为xxx@xxx.com)`}
          />
          <QuestionCard 
            title="时间日期"
            subTitle="No.10"
            content={`写出一个函数，打印今天的时间日期，及当前unix时间戳`}
          />
          <QuestionCard 
            title="accessor"
            subTitle="No.11"
            content={`写出一个构造函数，该构造函数实例化的对象的value属性和input标签的value值双向绑定`}
            init="<input value=''/><script></script>"
          />
          <QuestionCard 
            title="属性描述对象"
            subTitle="No.12"
            content={`直接写出是否掌握`}
          />
          <QuestionCard 
            title="this/原型链"
            subTitle="No.13"
            content={`修改Array.prototype.slice函数，使得此函数可以将字符串切割为数组`}
          />
          <QuestionCard 
            title="callback"
            subTitle="No.14"
            content={`首先称s(second)为使用setTimeout函数延迟second秒,r(range)为一个range以内的随机数。写出一个函数，该函数首先s(1)后并行三个s(r(1.5)), s(r(2)), s(r(2.5)), 三者任意一个结束后s(0.5)后打印'first out', 三者均结束后打印'last out'`}
          />
        </div>
      );}
};

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
