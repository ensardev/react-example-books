import {useState} from 'react';

function BookEdit({book, onEdit}){
    const [title, setTitle] = useState(book.title);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onEdit(book.id, title);
        console.log(title);
    };

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleTitleChange}/>
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;