// Stateless React Component
import React from 'react';
import { Link } from 'react-router';

export default class NotFoundPage extends React.Component {
  render () {
    return (
      <div className="view view-main">
        <div className="navbar">
          <div className="navbar-inner">
            <div className="center sliding">Not found</div>
          </div>
        </div>
        <div className="pages navbar-through toolbar-through">
          <div data-page="index" className="page">
            <div className="page-content">
              <div className="content-block-title">Page not found</div>
              <div className="content-block">
                <a href="#" className="button form-to-json">Back</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
