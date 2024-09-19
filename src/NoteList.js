import {Note} from "./Note";
import {useState} from "react";

let noteIndex = 0

export function NoteList() {
    const [notes, setNotes] = useState([])

    function handleSubmit() {
        e.target
    }

    function addNote(value) {
    setNotes(
        [
        {index: noteIndex++,text: value},
            ...notes
    ]
    )
    }

    function deleteNote(index) {
        setNotes(
            notes.filter(note => note.id !== index)
        )
    }

    function editNote(value, index) {
        setNotes(
            notes.map(note=> {
             if(note.id === index)
                 return {
                 ...note,
                     text: value
                 }
             return note
            }
        )
        )
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Введите текст"/>
            <button type="submit">Создать заметку</button>
        </form>
    <h3>Список заметок:</h3>
            <ul>
                {notes.map(note => {
                        <Note key={note.id}>
                            {note.text}
                        </Note>
                }
                }
            </ul>
        </>
    )
}