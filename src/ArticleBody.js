import React, { Component } from 'react';

import Author from './Author';
import ArticleInfo from './ArticleInfo';
import ArticleLinks from './ArticleLinks';

class ArticleBody extends Component {
    render(){
        return (
          <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <Author />

            <ArticleInfo />

            <ArticleLinks />
          </div>
        )
      }
    }
    export default ArticleBody;
