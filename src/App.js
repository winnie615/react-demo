/*
 * @Author: Winnie
 * @Date: 2021-04-10 09:58:06
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-15 18:08:39
 * @Description: 作用
 * @FilePath: /demo/src/App.js
 */
// import './App.css';
import 'antd/dist/antd.css'
// import ContextPage from './pages/lesson1/ContextPage';
// import HocPage from './pages/lesson1/HocPage';
// import MyRCForm from './pages/lesson2/MyRcForm';
// import FormPage  from './pages/lesson2/FormPage';
// import MyRCFieldForm  from './pages/lesson4/MyRCFieldForm';
// import DialogPage  from './pages/react/lesson5/DialogPage';
// import ReducerPage  from './pages/redux/ReducerPage';
import ReduxPage  from './pages/redux/ReduxPage';


function App() {
  return (
    <div className="App">
      {/* <ContextPage/> */}
      {/* <HocPage/> */}
      {/* <MyRCForm/> */}
      {/* <FormPage/> */}
      {/* <MyRCFieldForm/> */}
      {/* <DialogPage/> */}
      <ReduxPage/>
    </div>
  );
}

export default App;
