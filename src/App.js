import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import Music from './components/Music/Music'
import Options from './components/Options/Options'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header />
                <NavbarContainer />
                <div className='app-wrapper-content'>
                        <Route path='/profile/:userId?' render={()=> <ProfileContainer />}/>
                        <Route path='/dialogs' render={()=> <DialogsContainer />}/>
                        <Route path='/users' render={()=> <UsersContainer />}/>
                        <Route path='/news' render={()=> <News/>}/>
                        <Route path='/music' render={()=> <Music/>}/>
                        <Route path='/options' render={()=> <Options/>}/>
                </div>
            </div>
    );
}



export default App;
