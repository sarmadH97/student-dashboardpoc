import React from "react";

function StudentTableView({ students, onTileClick }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 text-left">Name</th>
            <th className="py-2 px-4 bg-gray-200 text-left">Username</th>
            <th className="py-2 px-4 bg-gray-200 text-left">Email</th>
            <th className="py-2 px-4 bg-gray-200 text-left">Phone</th>
            <th className="py-2 px-4 bg-gray-200 text-left">Company</th>
            <th className="py-2 px-4 bg-gray-200 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => onTileClick(student)}
            >
              <td className="py-2 px-4">{student.name}</td>
              <td className="py-2 px-4">{student.username}</td>
              <td className="py-2 px-4">{student.email}</td>
              <td className="py-2 px-4">{student.phone}</td>
              <td className="py-2 px-4">{student.company.name}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTableView;
