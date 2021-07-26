import React, { Component } from 'react'; 
import './Book.css';
import '../App.css';
// import {Card, Image } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import { claimBook, unclaimBook } from '../actions/bookOwnerships';
import { connect } from 'react-redux';
 
class BookCard extends Component {
  
  
  constructor(props) {
    //super calls the constructor of parent class Component
    super(props);

    //set initial state in constructor since it runs first
    this.state = { liked: false }
 
  }

  //alter state when like button is clicked using setState
  clickHandler = () => {
    this.setState(state => ({
      liked: !state.liked
    }));
   }
 

 
  render(){
    //Destructure to extract data from objects into their own variable- exBook instead this.props.book)
    const { book, numUsers, claimBook, unclaimBook, booksReducer } = this.props;

   let buttonsVisible =  
   <div>
   { book.claimed !== "true" ? 
    <div className="claim-button" onClick={() => {claimBook(book, booksReducer.currentUser)}}><i className='plus icon plus-class'  />I HAD THIS</div> :
    <div className="unclaim-button" onClick={() => {unclaimBook( booksReducer.bookOwnerships, book, booksReducer.currentUser)}}><i className="minus icon minus-class" />UNCLAIM THIS</div> 
   }   </div>


    return(
      
       <Card>
            <div key={book.id} >

                <Card.Content>
                    {/* <Image className="BookImage" src={book.url} alt={book.name} /> */}
                    <Card.Header><strong>{book.name}</strong></Card.Header>
                    <Card.Description>{book.description}</Card.Description>
  
   

                <div>
                  { this.state.liked ? 
                      <button className="unlike-button" onClick={this.clickHandler}><i className="red heart icon"  />Liked</button> :
                      <button className="like-button" onClick={this.clickHandler}><i className="red heart outline icon" />Like</button> 
                  }   
                  </div>


 
                </Card.Content>

                <Card.Content extra>
                    <i className='users icon user-class' /> {numUsers !== undefined ? book.users.length : 0}
                 </Card.Content>
 

            {booksReducer.currentUser.username ? buttonsVisible : ""}
 

             </div>
        </Card>
   
    )
  }
}


 
const mapStateToProps = state => {
  return {
    books: state.books,
    user: state.currentUser,
    bookOwnerships: state.bookOwnerships,
    booksReducer: state.booksReducer
  }
}

export default connect(mapStateToProps, {claimBook, unclaimBook})(BookCard);