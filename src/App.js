import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import MyReads from './MyReads'
import SearchPage from './SearchPage'
import './App.css';

class BooksApp extends React.Component {
  state = {

  }

  componentDidMount() {
    BooksAPI.getAll().then(contacts => {
      console.log(contacts)
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyReads />
        )}/>

        <Route path='/search-page' render={() => (
          <SearchPage />
        )}/>
      </div>
    )
  }
}

export default BooksApp
