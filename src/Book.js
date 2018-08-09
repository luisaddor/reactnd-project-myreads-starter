import React, { Component } from 'react'

class Book extends Component {

    handleChange = () => {
        console.log('teste')
    }

    render (){
        let imageStyles
        let book =   this.props.bookDetail
        let shelf =  book.shelf

        console.log(shelf)

        if(!book.imageLinks) {
            imageStyles = { width: 128, height: 193,  backgroundColor: '#444'}
        } else {
            imageStyles = { width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")`}
        }
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={ imageStyles }></div>
                    <div className="book-shelf-changer">
                        <select value={shelf ? shelf : 'none'} onChange={this.handleChange} >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ book.title }</div>
                <div className="book-authors">{ book.authors }</div>
            </div>
        )
    }
}

export default Book