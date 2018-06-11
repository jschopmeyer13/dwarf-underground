import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Clickbait from './Clickbait';
import Sidebar from './Sidebar';
import ArticleBody from './ArticleBody';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />

        <main className="expanded row">
          <ArticleBody />

          <Sidebar />
          
          <Clickbait />

        </main>

        <Footer />
        

      </div>
    );
  }
}

export default App;
