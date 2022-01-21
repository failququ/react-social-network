import {Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music'
import Options from './components/Options/Options'


const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar state = {props.state.navBar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile 
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs 
                            messagesPage={props.state.messagesPage} 
                            dispatch={props.dispatch}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/options' element={<Options/>}/>
                    </Routes>
                </div>
            </div>
    );
}



export default App;
