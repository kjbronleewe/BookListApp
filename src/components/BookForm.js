import React, { useState } from 'react';
import { Form, FormGroup, Button, Input, Label } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
  const [book, setBook] = useState(() => {
    return {
      title: props.book ? props.book.title : '',
      author: props.book ? props.book.author : '',
      rating: props.book ? props.book.rating : '',
      completed: props.book ? props.book.completed : '',
      date: props.book ? props.book.date : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { title, author, rating, completed } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [title, author, rating, completed];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        title,
        author,
        rating,
        completed,
        date: new Date()
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'rating':
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
    }
  
  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <FormGroup controlId="title">
          <Label>Book Title</Label>
          <Input
            className="input-control"
            type="text"
            name="title"
            value={title}
            placeholder="Enter title of book"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup controlId="author">
          <Label>Book Author</Label>
          <Input
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup controlId="rating">
          <Label>Rating</Label>
          <Input
            className="input-control"
            type="number"
            name="rating"
            value={rating}
            placeholder="Enter a rating from 1 - 5"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup controlId="completed">
          <Label>Book completed</Label>
          <Input
            className="input-control"
            type="text"
            name="completed"
            value={completed}
            placeholder="Enter if you have completed the book"
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;