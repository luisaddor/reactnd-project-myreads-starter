import React, { Component } from 'react'
import Book from './Book'

class BooksGrid extends Component {
    render () {
        let books = this.props.books

        if(!books || books.error ) {
             return (
                 <p> Faça uma nova busca</p>
             )
        }

        return (
            <ol className="books-grid">
                {books !== undefined &&
                    books.map((book) => (
                        <li key={book.id}>
                            <Book
                                bookDetail={book}
                                handleBookChange={this.props.handleBookChange}
                            />
                        </li>
                    ))
                }
            </ol>
        )
    }
}

export default BooksGrid