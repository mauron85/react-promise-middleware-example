import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

export default class MainPage extends Component {
  constructor (props) {
    super(props);
  }  
  
  render () {
    return (
      <div className="view view-main navbar-fixed">
        <div className="navbar">
          <div className="navbar-inner">
            <div className="left"></div>
            <div className="center">MainPage</div>
            <div className="right">
              <Link to="/new" className="link icon-only">
                <i className="icon icon-plus">+</i>
              </Link>
            </div>
          </div>
        </div>
        <div className="pages">
          <div data-page="main" className="page">
            <form className="searchbar" data-search-list=".contacts-list" data-search-in=".item-title">
              <div className="searchbar-input">
                <input type="search" placeholder="Search"/>
                <a href="#" className="searchbar-clear"></a>
              </div>
              <a href="#" className="searchbar-cancel">Cancel</a>
            </form>
            <div className="searchbar-overlay"></div>
            <div classNameName="page-content">
              <div className="list-block media-list contacts-list searchbar-found">
                <div className="list-group">
                  <ul></ul>
                </div>
              </div>
              <div className="content-block searchbar-not-found">
                Nothing found
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
