import React from 'react';

const Resources = () => {
  // Dummy data for resources
  const resources = [
    {
      id: 1,
      title: "Math Notes - Chapter 1",
      description: "Detailed notes on Chapter 1 of Math.",
      fileType: "pdf", // Can be pdf, link, or other
      url: "https://example.com/math-chapter-1.pdf", // URL to the resource
    },
    {
      id: 2,
      title: "Science Project Guidelines",
      description: "Guidelines for the Science project.",
      fileType: "pdf",
      url: "https://example.com/science-project.pdf",
    },
    {
      id: 3,
      title: "History Video: World War II",
      description: "Watch this video on World War II for additional context.",
      fileType: "link",
      url: "https://example.com/history-video.mp4",
    },
    {
      id: 4,
      title: "English Essay Template",
      description: "Template for writing your English essay.",
      fileType: "pdf",
      url: "https://example.com/english-essay-template.pdf",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#2E2E48] rounded-lg shadow-lg">
      <h2 className="text-white text-3xl font-bold mb-6">Study Resources</h2>

      <div className="space-y-6">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-[#383854] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-white text-xl font-semibold">{resource.title}</h3>
            <p className="text-white mb-4">{resource.description}</p>

            {/* Display download link or button based on resource type */}
            {resource.fileType === "pdf" ? (
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#475BE8] text-white rounded-lg inline-block"
              >
                Download PDF
              </a>
            ) : resource.fileType === "link" ? (
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#475BE8] text-white rounded-lg inline-block"
              >
                Watch Video
              </a>
            ) : (
              <span className="text-gray-400">No download available</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
