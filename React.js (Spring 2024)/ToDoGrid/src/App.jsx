import { useState } from 'react';
import './App.css';
import ReactiveButton from 'reactive-button';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

function App() {
  const [todo, setTodo] = useState({ description: '', date: '', status: '' });
  const [todos, setTodos] = useState([]);

  // Column definitions for ag-grid
  const columnDefs = [
    { field: 'description', sortable: true, filter: true },
    { field: 'date', sortable: true, filter: true },
    { field: 'status', sortable: true, filter: true }
  ]

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: '', date: '', status: '' });
  }

  return (
    <>
      <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
      <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged} />
      <input placeholder="Status" name="status" value={todo.status} onChange={inputChanged} />
      <ReactiveButton
        color='green'
        idleText='Add'
        onClick={addTodo}
        rounded={true}
        shadow={true}
        outline={true}
      />

      <br />
      <br />

      <div className="ag-theme-material" style={{ height: 400, width: 600, }}>
        <AgGridReact
          rowData={todos}
          columnDefs={columnDefs}
          // suppresses the ability to move columns
          suppressMovableColumns={true}
          // Row animations
          animateRows={true}
        />
      </div>
    </>
  );
}

export default App;