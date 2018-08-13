import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BooksShelf from './BooksShelf'


class MyReads extends Component {
    render () {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {this.props.rows.map(row =>
                        <BooksShelf
                            key={ row }
                            title={ row }
                            books={ this.props.books.filter(book => book.shelf === row) }
                            handleBookChange={ this.props.handleBookChange } />
                    )}

                    <div className="open-search">
                        <Link to='/search-page'>Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyReads