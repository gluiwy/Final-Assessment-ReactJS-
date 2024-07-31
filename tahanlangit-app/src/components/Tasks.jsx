import React, { useState } from 'react';
import Task from './Task';
import SearchFilter from './SearchFilter';
import 'bootstrap/dist/css/bootstrap.min.css';


const generateRandomDeadline = () => {
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + Math.floor(Math.random() * 30));
  return futureDate.toISOString().split('T')[0];
};


const assignees = ['John', 'Jane', 'Mike', 'Lisa'];

const Tasks = () => {

  const initialTasks = [
    { description: 'Task 1', assignee: assignees[Math.floor(Math.random() * assignees.length)], deadline: generateRandomDeadline(), status: 'Pending' },
    { description: 'Task 2', assignee: assignees[Math.floor(Math.random() * assignees.length)], deadline: generateRandomDeadline(), status: 'Pending' },
    { description: 'Task 3', assignee: assignees[Math.floor(Math.random() * assignees.length)], deadline: generateRandomDeadline(), status: 'Pending' },
    { description: 'Task 4', assignee: assignees[Math.floor(Math.random() * assignees.length)], deadline: generateRandomDeadline(), status: 'Pending' },
    { description: 'Task 5', assignee: assignees[Math.floor(Math.random() * assignees.length)], deadline: generateRandomDeadline(), status: 'Pending' },
    { description: 'Task 6', assignee: assignees[Math.floor(Math.random() * assignees.length)], deadline: generateRandomDeadline(), status: 'Pending' },
    { description: 'Task 7', assignee: assignees[Math.floor(Math.random() * assignees.length)], deadline: '', status: 'Completed' },
    { description: 'Task 8', assignee: assignees[Math.floor(Math.random() * assignees.length)], deadline: '', status: 'Completed' },
    { description: 'Task 9', assignee: assignees[Math.floor(Math.random() * assignees.length)], deadline: '', status: 'Completed' },
    { description: 'Task 10', assignee: assignees[Math.floor(Math.random() * assignees.length)], deadline: '', status: 'Completed' },
  ];

 
  const [tasks, setTasks] = useState(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState(initialTasks);


  const toggleStatus = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' };
      }
      return task;
    });
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  return (
    <div className="container mt-4">
      <SearchFilter tasks={tasks} setFilteredTasks={setFilteredTasks} />
      <div className="row">
        {filteredTasks.map((task, index) => (
          <div className="col-md-6 col-lg-4 mb-3" key={index}>
            <Task
              number={index + 1}
              description={task.description}
              assignee={task.assignee}
              deadline={task.deadline}
              status={task.status}
              onToggleStatus={() => toggleStatus(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;