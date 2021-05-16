import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Posts from './admin/Posts';
import Main from './main/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <Nav/>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

            <BrowserRouter>
                <Route path='/' exact component={Main} />
                <Route path='/admin/posts' component={Posts} />
            </BrowserRouter>

          </main>
        </div>
      </div>

    </div>
  );
}

export default App;
