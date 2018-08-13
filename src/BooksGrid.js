import React, { Component } from 'react'
import Book from './Book'
import _ from 'lodash'

class BooksGrid extends Component {
    render () {
        let books = this.props.books

        let booksProps = this.props.booksProps

        if(!books || books.error ) {
             return (
                 <p> Faça uma nova busca</p>
             )
        }

        let merged = books.map((book) => {
            let bookProps =  _.find(booksProps,{'id': book.id} )

            if (bookProps) {
                book.shelf = bookProps.shelf
            }
            return book
        })

        return (
            <ol className="books-grid">
                {merged !== undefined &&
                    merged.map((book) => (
                        <li key={book.id}>
                            <Book
                                key={book.id}
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