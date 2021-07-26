import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import { Card } from 'semantic-ui-react';
import Stats from '../components/Stats';
import { Divider } from 'semantic-ui-react';

class Books extends Component {

    state = {newSearch: ""}

    handleInputChange = e => {
        this.setState({newSearch: e.target.value})
    }

    render(){
        const { booksReducer } = this.props;

        let topBooks = [...booksReducer.books].sort((a, b) => (a.users.length > b.users.length) ? -1 : 1)
        let booksMatch = booksReducer.books.filter( (book) => book.name.toLowerCase().includes(this.state.newSearch.toLowerCase()))

        return (
            <div className="Books">
                <input placeholder="bookName" value={this.state.newSearch} name="bookName" type="text" />
            
            <Divider />
            
            <Stats numBooks={booksReducer.books.length} topThree={topBooks.slice(0,3)}/>
            <Divider />
            
            <Card.Group itemsPerRow={3}>
                {booksMatch.map((book, id) => <BookCard  claimed={book.claimed} numUsers={book.users.length} key={id} book={book} />)}
            </Card.Group>

            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return ({
        booksReducer: state.booksReducer
    })
}

export default connect(mapStateToProps)(Books);