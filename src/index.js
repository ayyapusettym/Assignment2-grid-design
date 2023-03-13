import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Session3 from './Session3';
import Classcomponent from './Classcomponent';
import CompoWillMount from './CompoWillMount';
import CompoDidMount from './CompoDidMount';
import ShouldCompoUpdate from './ShouldCompoUpdate';
import CompoWillUpdate from './CompoWillUpdate';
import SnapshotBeforeUpdate from './SnapshotBeforeUpdate';
import PureComponent from './PureComponent';
import Practice1 from './Practice1';
import Assignment1 from './Assignments/Assignment1';
import ApiIntegration from './ApiIntegration';
import MyForm from './MyForm';
import UnControlledCompo from './UnControlledCompo';
import Assignment3 from './Assignment3/Assignment3'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Session3 /> */}
    <Assignment3/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
