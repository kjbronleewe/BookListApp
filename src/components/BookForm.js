import { Button, Col, FormGroup, Label } from 'reactstrap';
import { Formik, Form, Field } from 'formik';

const BookForm = () => {

  const handleSubmit = (values, { resetForm }) => {
    console.log('form values:', values);
    console.log('in JSON format:', JSON.stringify(values));
    resetForm();
  };

  return (
    <Formik
    initialValues={{
      title: '', 
      author: '', 
      rating: '',
      completed: false
    }}
    onSubmit={handleSubmit}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor='title' md='2'>
            Title
          </Label>
          <Col md='5'>
            <Field 
            name='title'
            placeholder='Title of Book'
            className='form-control'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='author' md='2'>
            Author
          </Label>
          <Col md='5'>
            <Field 
            name='author'
            placeholder='Book Author'
            className='form-control'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='rating' md='2'>
            Book rating
          </Label>
          <Col md="3">
            <Field name="rating" as="select" className="form-control">
              <option>Select a rating</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Field>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label check md={{ size: 10, offset: 1 }}>
            <Field name="completed" type="checkbox" className="form-check-input" />{' '}
            Have you completed this book?
          </Label>

        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 1 }}>
            <Button type="submit" color="primary">
              Submit Book
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>

  );
};

export default BookForm;
