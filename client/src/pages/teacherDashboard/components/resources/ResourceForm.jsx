import React, { useState } from "react";

// Dummy resource data
const initialResources = [
  { id: 1, title: "Math Lecture Notes", description: "Chapter 1: Algebra", fileType: "PDF", link: "path/to/lecture_notes.pdf" },
  { id: 2, title: "Science Revision", description: "Physics formulas", fileType: "PDF", link: "path/to/science_revision.pdf" },
];

const StudyResources = () => {
  const [resources, setResources] = useState(initialResources);
  const [newResource, setNewResource] = useState({ title: "", description: "", file: null });

  // Handle input changes for the new resource form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewResource({
      ...newResource,
      [name]: value,
    });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setNewResource({
      ...newResource,
      file: e.target.files[0],
    });
  };

  // Add new resource
  const handleAddResource = (e) => {
    e.preventDefault();

    if (newResource.title && newResource.description && newResource.file) {
      const newResourceObj = {
        id: resources.length + 1,
        title: newResource.title,
        description: newResource.description,
        fileType: newResource.file.type.split("/")[1], // Extract file type (e.g., 'pdf')
        link: URL.createObjectURL(newResource.file), // Generate URL for local resource
      };

      setResources([...resources, newResourceObj]);
      setNewResource({ title: "", description: "", file: null });
    } else {
      alert("Please fill all fields and upload a file!");
    }
  };

  // Delete a resource
  const handleDeleteResource = (id) => {
    setResources(resources.filter((resource) => resource.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#2E2E48] rounded-lg shadow-lg">
      <h2 className="text-white text-3xl font-bold mb-6">Study Resources</h2>

      {/* Add Resource Form */}
      <div className="bg-[#383854] p-6 rounded-md mb-6">
        <h3 className="text-xl text-white font-semibold mb-4">Upload New Resource</h3>
        <form onSubmit={handleAddResource} className="space-y-4">
          <div>
            <label htmlFor="title" className="text-white font-semibold">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newResource.title}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 bg-[#2E2E48]  text-white rounded-md focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="text-white font-semibold">Description</label>
            <textarea
              id="description"
              name="description"
              value={newResource.description}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 bg-[#2E2E48]  text-white rounded-md focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="file" className="text-white font-semibold">Upload File</label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="w-full mt-2 p-2 bg-[#2E2E48]  text-white rounded-md focus:outline-none"
              required
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-[#475BE8] text-white rounded hover:bg-[#FF5733] transition-colors duration-300"
            >
              Upload Resource
            </button>
          </div>
        </form>
      </div>

      {/* Resource List */}
      <div className="bg-[#383854] p-6 rounded-md">
        <h3 className="text-xl text-white font-semibold mb-4">Uploaded Resources</h3>
        <table className="w-full table-auto text-white">
          <thead>
            <tr className="border-b border-[#475BE8]">
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Description</th>
              <th className="p-2 text-left">File Type</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <tr key={resource.id} className="border-b border-[#475BE8]">
                <td className="p-2">{resource.title}</td>
                <td className="p-2">{resource.description}</td>
                <td className="p-2">{resource.fileType.toUpperCase()}</td>
                <td className="p-2">
                  <a
                    href={resource.link}
                    download
                    className="px-4 py-2 bg-[#475BE8] text-white rounded hover:bg-[#FF5733] transition-colors duration-300"
                  >
                    Download
                  </a>
                  <button
                    onClick={() => handleDeleteResource(resource.id)}
                    className="ml-4 px-4 py-2 bg-[#FF5733] text-white rounded hover:bg-[#FF2C1F] transition-colors duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudyResources;
