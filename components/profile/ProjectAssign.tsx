import React from "react";

const ProjectAssign = () => {
  return (
    <div>
      {" "}
      <section
        id="tasks_projects"
        className="bg-neutral-800/50 backdrop-blur-xl p-6 border border-neutral-700 rounded-2xl shadow-md m-6 space-y-8"
      >
        {/* Projects Assigned Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            📂 Projects Assigned
          </h3>
          <hr className="border-t-2 border-neutral-700 mb-6 w-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Project Alpha",
                deadline: "Dec 10, 2024",
                teammates: ["John Doe", "Jane Smith"],
              },
              {
                title: "Project Beta",
                deadline: "Jan 5, 2025",
                teammates: ["Alice Brown", "Bob White"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-neutral-800 p-6 rounded-lg shadow-sm border border-neutral-700/50 relative hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-neutral-400 mb-2">
                  <span className="font-medium text-neutral-200">
                    Deadline:
                  </span>{" "}
                  {project.deadline}
                </p>
                <div className="text-sm text-neutral-400">
                  <span className="font-medium text-neutral-200">
                    Teammates:
                  </span>{" "}
                  {project.teammates.join(", ")}
                </div>
                <button className="absolute bottom-4 right-4 text-sm text-primary hover:underline">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectAssign;
