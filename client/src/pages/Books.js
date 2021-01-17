import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Title from "../components/Title";
import BooksList from "../components/BooksList";

function Books() {

    const [books, setBooks] = useState([]);
    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };


    return (
        <div>
            <Title />
            <BooksList />

        </div>
    )
}
export default Books;