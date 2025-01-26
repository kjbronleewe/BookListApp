import BookForm from "./BookForm";


const AddBook = () => {
    const handleOnSubmit = (book) => {
        console.log(book)
    }; 

    return(
        <>
        <h1>Add a Book</h1>
        <BookForm handleOnSubmit={handleOnSubmit} />
        </>
    )
}

export default AddBook