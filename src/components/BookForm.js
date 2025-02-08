import { useState } from 'react';
import { Button, Col, FormGroup, Label } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import useLocalStorage from '../hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';


const BookForm = (props) => {
  const [books, setBooks] = useLocalStorage('books', []);

  const handleOnSubmit = (formValues, { resetForm }) => {
    const { title, author, rating, completed } = formValues; 

    const newBook = {
      id: uuidv4(), 
      title,
      author,
      rating,
      completed, 
      date: Date.now()
    };
    setBooks((prevBooks) => [...prevBooks, newBook]);

    resetForm();
  };

  return (
    <Formik
      initialValues={{
        title: '',
        author: '',
        rating: '',
        completed: false,
      }}
      onSubmit={handleOnSubmit}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor="title" md="2">
            Title
          </Label>
          <Col md="5">
            <Field
              name="title"
              placeholder="Title of Book"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="author" md="2">
            Author
          </Label>
          <Col md="5">
            <Field
              name="author"
              placeholder="Book Author"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="rating" md="2">
            Book rating
          </Label>
          <Col md="3">
            <Field name="rating" as="select" className="form-control">
              <option>Select a rating from 1-5</option>
              <option>Have not completed yet</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Field>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label check md={{ size: 15, offset: 0 }}>
            <Field
              name="completed"
              type="checkbox"
              className="form-check-input"
            />{' '}
            Have you read this book?
          </Label>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 1 }}>
            <Button type="submit" >
              Submit Book
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

const BookList = ({ books }) => (
  <ul>
    {books.map((book) => (
      <li key={book.id}>{book.title} by {book.author}</li>
    ))}
  </ul>
);

export default BookForm;
