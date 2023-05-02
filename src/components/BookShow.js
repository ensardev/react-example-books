import { useState, useContext } from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/book';

function BookShow({ book }){
    const { deleteBookById } = useContext(BooksContext);
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleEditSubmit = () => {
        setShowEdit(false);
    };

    let content = <h3>{book.title}</h3>;
    if(showEdit){
        content = <BookEdit book={book} onSubmit={handleEditSubmit} />;
    }

    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="Books" />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    );
}

export default BookShow;