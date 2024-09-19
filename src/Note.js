export function Note({children}) {

    return (
        <li className="note">
            <input type="checkbox"/>
            <input type="text" value={children}/>
            <button onClick={DeleteNote}>Удалить</button>
        </li>
    )
}