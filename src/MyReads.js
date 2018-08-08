import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BooksShelf from './BooksShelf'


class MyReads extends Component {
    render () {
        let books = this.props.books;

        console.log(books)


        let rows = [...new Set(books.map(book => {
            return book.shelf
        }))]

        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {rows.map(row =>
                        <BooksShelf
                            key={row}
                            title={row}
                            books={books.filter(book => book.shelf === row)} />
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