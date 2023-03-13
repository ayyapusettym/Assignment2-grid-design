import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstPage from './FirstPage';  //child component
import SecondPage from './SecondPage';  //child component
import style from './App.module.css';


function App() {

  // const cssObject = {
  //   color: 'orange'
  // }
  // return (
  //   // <div>
  //   <>
  //   <div className='divTag'>
  //     <h1 style={{color:'pink'}}>Welcome to react</h1>
  //     <h2 style={cssObject}>test h2 tag</h2>
  //     <h3 style={{color:'violet'}}>i am from h3 tag</h3>
  //     <h4 className='h4Tag'>i am from h4 tag</h4>
  //     <input type="text" placeholder="enter name"></input>
  //     </div>
  //   </>
  //   // </div>
  // );

  // const[showFirstPage,setShowFirstPage] = useState(false);
  // const[showSecondPage,setShowSecondPage] = useState(false);
  // const UserDetails = {
  //   name: 'Manisha',
  //   city: 'kurnool'
  // };

  // const country = 'India';

  // const className = 'edyoda';

  // const openFstPage = () =>{
  //   setShowFirstPage(true);
  // };
  // const openSecPage = () =>{
  //   setShowSecondPage(true);
  // };

  // return(
  //   <>
  //   <div>
  //     <h1>Hii lets apply global css</h1>
  //     <button onClick={openFstPage}>Call First Page</button>
  //     <button onClick={openSecPage}>Call Second Page</button>
  //   </div>
  //   {showFirstPage && <FirstPage
  //   data = {UserDetails}
  //   countryDetails = {country}
  //   />}
  //   {showSecondPage && <SecondPage
  //   classDetails = {className}
  //   />}
  //   </>
  // )




  
}

export default App;
