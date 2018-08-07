import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import _ from 'lodash'

class SearchPage extends Component {
    state = {
        query: '',
        books:[]
    }

    componentDidMount() {
        BooksAPI.search('React').then(books => {
            this.setState({books: books})

            console.log(this.state.books)
          })
    }

    handleChange = _.debounce((query) => {
        this.setState({ query: query })

        BooksAPI.search(this.state.query).then(books => {
            this.setState({books: books})
            console.log(this.state.books)
        })
    }, 300)

    render () {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            onChange={e => this.handleChange(e.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }
}

export default SearchPage