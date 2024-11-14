import Login from './components/Login';
import TabelaCategoria from './components/TabelaCategoria';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


const App = () => {
    const PrivateRoute = ({ children }) => {
        return localStorage.getItem('token') ? children : <Navigate to="/login" />;
    };

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/categoria"
                    element={
                        <PrivateRoute>
                            <TabelaCategoria />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;