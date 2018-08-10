import React, { Component } from 'react'
import Book from './Book'

class BooksGrid extends Component {
    render () {
        const books = this.props.books

        if(!books || books.error ) {
             return (
                 <p> Faça uma nova busca</p>
             )
        }

        console.log(books)

        return (
            <ol className="books-grid">
                {books !== undefined &&
                    books.map((book) => (
                        <li key={book.id}>
                            <Book
                                bookDetail={book}/>
                        </li>
                    ))
                }
            </ol>
        )
    }
}

export default BooksGrid