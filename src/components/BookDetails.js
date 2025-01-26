
function BookDetails(props) {
    return (
     <div className="bg-light border p-4 m-2 card">
         <h4>{props.book.title}</h4>
         <p>{props.book.author}</p>
         <p>{props.book.rating}</p>
         <p>{props.book.completed}</p>
       </div>
    )
   }
   
   export default BookDetails;