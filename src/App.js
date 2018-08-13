import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import MyReads from './MyReads'
import SearchPage from './SearchPage'
import './App.css';

class BooksApp extends React.Component {
  state = {
   books: [],
   rows: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books: books})

      let rows = [...new Set(this.state.books.map(book => {
        return book.shelf
      }))]

      this.setState({rows: rows})
    })
  }

  handleBookChange = (book, shelf) => {
      BooksAPI.update(book, shelf)

      book.shelf = shelf

      let newState = this.state.books.filter(b =>
        b.id !== book.id
      )

      newState = [...newState, book]

      this.setState({books: newState})
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyReads
            books={this.state.books}
            rows={this.state.rows}
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
