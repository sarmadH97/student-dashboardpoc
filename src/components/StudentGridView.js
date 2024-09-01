import React from 'react';

function StudentGridView({ students, onTileClick }) {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {students.map(student => (
        <div
          key={student.id}
          className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition"
          onClick={() => onTileClick(student)}
        >
          <h3 className="text-lg font-bold">{student.name}</h3>
          <p className="text-gray-700">Username: {student.username}</p>
          <p className="text-gray-500">Email: {student.email}</p>
          <div className="mt-2 flex justify-between items-center">
            <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Edit</button>
            <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentGridView;
