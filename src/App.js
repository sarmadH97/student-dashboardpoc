import React, { useEffect, useState } from 'react';
import HorizontalMenu from './components/HorizontalMenu';
import HamburgerMenu from './components/HamburgerMenu';
import StudentGridView from './components/StudentGridView';
import StudentTileView from './components/StudentTileView';
import StudentTableView from './components/StudentTableView';
import { motion } from "framer-motion";

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [view, setView] = useState('table'); // 'grid' or 'tile'

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  const handleTileClick = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseDetailView = () => {
    setSelectedStudent(null);
  };

  const handleToggleView = () => {
    setView(view === 'grid' ? 'table' : 'grid');
  };

  return (
    <div className="App">
      <HorizontalMenu />
      <HamburgerMenu />
      <main className="p-4">
        {/* Toggle View Button */}
        <motion.button
          onClick={handleToggleView}
          className="p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mb-2 cursor-pointer duration-300"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          Toggle to {view === 'grid' ? 'Table View' : 'Tile View'}
        </motion.button>

        {view === 'grid' ? (
          <StudentGridView students={students} onTileClick={handleTileClick} />
        ) : (
          <StudentTableView students={students} onTileClick={handleTileClick} />
        )}

        {selectedStudent && (
          <StudentTileView student={selectedStudent} onClose={handleCloseDetailView} />
        )}
      </main>
    </div>
  );
}

export default App;
