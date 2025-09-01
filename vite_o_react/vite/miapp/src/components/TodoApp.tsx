import { useState } from 'react'

function TodoApp() {
    //Estado para guardar tareas
    const [tasks, setTasks] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const handleAdd = () => {
        if (inputValue.trim()) {
            setTasks([...tasks, inputValue.trim()]);
            setInputValue("");
        }
    };

    return (
        <>
            <h1>Lista de tareas</h1>
            <input type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Añadir nueva tarea"
                style={{ marginRight: '8px', padding: '4px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <button onClick={(handleAdd)}
                style={{ padding: '6px 12px', fontSize: '16px', borderRadius: '4px', border: 'none', backgroundColor: '#28a745', color: '#fff', cursor: 'pointer' }}
            >Añadir
            </button>
            <ul style={{ marginTop: '16px', listStyleType: 'none', padding: 0 }}>
                {tasks.map((task, index) => (
                    <li key={index} style={{ marginBottom: '8px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {task}
                    </li>
                ))}
            </ul>
        </>
    )
}


export default TodoApp