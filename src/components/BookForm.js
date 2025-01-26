import { useState } from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';

const initialValues = { title: '', author: '', rating: '', completed: '' };
const BookForm = () => {
  const [formValues, updateFormValues] = useState(initialValues);
  const { title, author, rating, completed } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    updateFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Title</label>
      <div>
        <input
          type="text"
          value={title}
          onChange={handleChange}
          name="title"
          placeholder="Enter book title"
        />
      </div>
      <div>
        <label>Author</label>
        <input
          type="text"
          value={author}
          onChange={handleChange}
          name="author"
          placeholder="Enter author"
        />
      </div>
      <div>
        <label>Rating</label>
        <input
          type="radio"
          name="rating"
          value={rating}
          
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Completed</label>
        <input
          type="radio"
          name="completed"
          value={completed}
          onChange={handleChange}
        />
      </div>
      {title && author && <button type="submit">Submit</button>}
    </Form>
  );
};

export default BookForm;
