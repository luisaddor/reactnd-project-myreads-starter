import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import _ from 'lodash'
import BooksGrid from './BooksGrid'
import escapeRegExp from 'escape-string-regexp'


class SearchPage extends Component {
    state = {
        query: '',
        books: []
    }

    componentDidMount() {
        const match = new RegExp(escapeRegExp('React'), 'i')

        BooksAPI.search('React').then(booksAPI => {

            let booksProps = this.props.books.filter( (book) =>
                match.test(book.title)
            )

            let merged = booksAPI.map((book) => {
                let bookProps =  _.find(booksProps,{'id': book.id} )

                if (bookProps) {
                    book.shelf = bookProps.shelf
                }
                return book
            })

            this.setState({books: merged})
        })
    }

    handleQuery = _.debounce((query) => {
            this.setState({ query: query })

            BooksAPI.search(this.state.query).then(books => {
                this.setState({books: books})
            })
    }, 300)

    render () {
        let books = this.state.books

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            onChange={e => this.handleQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <BooksGrid
                        books={books}
                        handleBookChange={this.props.handleBookChange}
                    />
                </div>
            </div>
        )
    }
}

export default SearchPage