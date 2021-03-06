import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import ToDoList from './routes/ToDolist/ToDoList';
import MineSearch from './routes/MineSearch/MineSearch';
import NumberBaseball from './routes/NumberBaseball/NumberBaseball';
import QuizApp from './routes/QuizApp/QuizApp';
import ResponCheck from './routes/ResponCheck/ResponCheck';
import TicTacToe from './routes/TicTacToe/TicTacToe';
import Lotto from './routes/Lotto/Lotto';
import BookSearch from './routes/BookSearch/BookSearch';



const App = () => {
    return (        
        <BrowserRouter>             
            <div className="App">   
                <Navigation />        
                <div className="container">
                    <Switch>
                        <Route path="/" component={ToDoList}/>
                        <Route path="/mine_search" component={MineSearch}/>
                        <Route path="/number_baseball" component={NumberBaseball}/>
                        <Route path="/quiz_app" component={QuizApp}/>
                        <Route path="/respon_check" component={ResponCheck}/>
                        <Route path="/tictactoe" component={TicTacToe}/>
                        <Route path="/lotto" component={Lotto}/>
                        <Route path="/book_search" component={BookSearch}/>
                    </Switch>
                </div>                       
            </div>
        </BrowserRouter>
    );
}

export default App;
                                      
            