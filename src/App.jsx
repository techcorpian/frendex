import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainHeader from './shared/components/MainHeader'
import Dashboard from './dashboard/pages/Dashboard';

const App = () => {
  return (
    <main className="mx-5 md:mx-auto md:container pb-10">
    <Router>
      <MainHeader />
        <Routes>
          <Route index element={<Dashboard />} />
        </Routes>
    </Router>
    </main>
  )
}

export default App