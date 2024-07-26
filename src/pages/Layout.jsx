import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import Home from "./Home";
import AllTasks from './AllTasks';
import NewTask from './NewTask';
import CreateCategory from './CreateCategory';
import AllCategories from './AllCategories';
import UpdateTask from './UpdateTask';

export default function Layout() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all-tasks" element={<AllTasks />} />
                <Route path="/new-task" element={<NewTask />} />
                <Route path="/new-category" element={<CreateCategory />} />
                <Route path="/all-categories" element={<AllCategories />} />
                <Route path="/edit-task" element={<UpdateTask />}>
                    <Route path=':taskId' element={<UpdateTask />} />
                </Route>
            </Routes>
        </Router>
    );
}
