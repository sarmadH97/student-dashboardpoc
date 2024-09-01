import React from 'react';

function StudentTileView({ student, onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4">{student.name}</h2>
        <p className="text-gray-700 mb-2">Username: {student.username}</p>
        <p className="text-gray-700 mb-2">Email: {student.email}</p>
        <p className="text-gray-700 mb-2">Phone: {student.phone}</p>
        <p className="text-gray-700 mb-2">Company: {student.company.name}</p>
        <button
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default StudentTileView;
