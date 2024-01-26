import { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react';
import './App.css'

import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AddTodo from './AddTodo';

function App() {
  const [todos, setTodos] = useState([]);

  const columnDefs = [
    { field: 'description', sortable: true, filter: true },
    { field: 'date', sortable: true, filter: true },
    { field: 'priority', sortable: true, filter: true },
  ]

  useEffect(() => {
    fetchItems();
  }, [])


  // Fetch items from database
  const fetchItems = () => {
    fetch('https://todolist-2d959-default-rtdb.europe-west1.firebasedatabase.app/items/.json')
      .then(response => response.json())
      .then(data => setTodos(Object.values(data)))
      .catch(err => console.error(err))
  }

  const addTodo = (newTodo) => {
    fetch('https://todolist-2d959-default-rtdb.europe-west1.firebasedatabase.app/items/.json',
    {
      method: 'POST',
      body: JSON.stringify(newTodo)
    })
    .then(response => fetchItems())
    .catch(err => console.error(err))
  }


  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            TodoList
          </Typography>
        </Toolbar>
      </AppBar>
      <AddTodo addTodo={addTodo} />
      <div className="ag-theme-quartz" style={{ height: 200, width: 650 }}>
        <AgGridReact
          rowData={todos}
          columnDefs={columnDefs}
        />
      </div>
    </>
  );
}

export default App