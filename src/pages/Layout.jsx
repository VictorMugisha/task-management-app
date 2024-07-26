import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import Home from "./Home";
import AllTasks from './AllTasks';

export default function Layout() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all-tasks" element={<AllTasks />} />
            </Routes>
        </Router>
    );
}
