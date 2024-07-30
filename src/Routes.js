import React from 'react';
import { Routes as Router, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import MuiTheme from './theme';

import Dashboard from './pages/dashboard';
import Income from './pages/income';
import Expenses from './pages/expenses';

const Routes = () => {
    return (
        <ThemeProvider theme={MuiTheme}>
            <AnimatePresence>
                <Router>
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/income" element={<Income />} />
                    <Route path="/expenses" element={<Expenses />} />
                </Router>
            </AnimatePresence>
        </ThemeProvider>
    );
}

export default Routes;