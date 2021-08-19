import React from "react";
import blogData from "../data/blog";
import Header from './Header.js';
import About from './About.js';
import ArticleList from './ArticleList.js';
import Article from './Article';

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <ArticleList posts={blogData.posts}/>
      <div className="App">
            
      </div>
    </div>
    
  );
}

export default App;
