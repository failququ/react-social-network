import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { addPost, messageTextUpdate, postTextUpdate, sendMessage, subscribe } from './redux/state';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireApp = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} postTextUpdate={postTextUpdate} sendMessage={sendMessage} messageTextUpdate={messageTextUpdate}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
    }

rerenderEntireApp(state);

subscribe(rerenderEntireApp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
