import { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Label, Col, FormGroup } from 'reactstrap';
import BookContext from '../context/BookContext';

const {addBook} = useContext(BookContext)

const validateForm = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Required';
  }

  return errors;
};

const BookForm = () => {

  const handleSubmit = (values, { resetForm }) => {
    const newBook = {
      title, 
      author, 
      completed
    }; 

    addBook(newBook); 

    resetForm();
  };

  return (
    <Formik
      initialValues={{
        title: '',
        author: '',
        completed: 'Yes',
      }}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor="title" md="2">
            Book Title
          </Label>
          <Col md="8">
            <Field
              name="title"
              placeholder="Ttile of book"
              className="form-control"
            />
            <ErrorMessage name="title">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="author" md="2">
            Book author
          </Label>
          <Col md="8">
            <Field
              name="author"
              placeholder="Author of book"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label md={{ size: 3, offset: 1 }}>
            Have you completed this book?
          </Label>
          <Col md="4">
            <Field name="completed" as="select" className="form-control">
              <option>Yes</option>
              <option>No</option>
            </Field>
          </Col>
        </FormGroup>
        <Col md={{ size: 9, offset: 1 }}>
          <Button type="submit">Submit</Button>
        </Col>
      </Form>
    </Formik>
  );
};

export default BookForm;
