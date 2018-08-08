import React , { Component } from 'react'
import Book from './Book'

class BooksShelf extends Component {
    render () {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">
                    { this.props.title === 'currentlyReading' ? 'Currently Reading' : '' }
                    { this.props.title === 'wantToRead' ? 'Want to Read' : '' }
                    { this.props.title === 'read' ? 'Read' : '' }
                </h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li key={book.id}>
                                <Book bookDetail={book} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BooksShelf