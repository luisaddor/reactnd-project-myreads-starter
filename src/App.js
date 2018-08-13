import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import MyReads from './MyReads'
import SearchPage from './SearchPage'
import './App.css';

class BooksApp extends React.Component {
  state = {
   books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books: books})
    })
  }

  handleBookChange = (book, shelf) => {
      BooksAPI.update(book, shelf)
      this.setState({bookShelf: shelf})

      BooksAPI.getAll().then(books => {
        this.setState({books: books})
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyReads
            books={this.state.books}
            handleBookChange={this.handleBookChange}
          />
        )}/>

        <Route path='/search-page' render={() => (
          <SearchPage
            books={this.state.books}
            handleBookChange={this.handleBookChange}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
