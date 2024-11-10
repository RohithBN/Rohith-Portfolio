"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Mystery-Message",
    description: "Unique Application allowing users to send anonymous messages",
    image: "/images/projects/MysteryMessage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RohithBN/Mystery-Message",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "BlogIt",
    description: "A dynamic  blog application that allows users to create, edit, and delete blog posts",
    image: "/images/projects/Blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RohithBN/Blog-React",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Issue Tracker",
    description:"Issue Tracker  allows users to report, manage, and track issues.",
    image:'/images/projects/issue-tracker.png',
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RohithBN/Issue-Tracker-NextJs",
    previewUrl: "/",

  },
  {
    id: 4,
    title: "MediaMind",
    description: "AI-powered SaaS platform that provides services such as video compression, image-background removal, and media management.",
    image: "/images/projects/media-mind.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RohithBN/cloudinary-saas",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Gym Tracker",
    description: "A web application that allows users to track their workouts progress. Also shows missed days and provides streak counter feature",
    image: "/images/projects/gym-tracker.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RohithBN/Gym-tracker",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Expense Tracker",
    description: "An  application that allows users to seamlessly track their expenses. The users can view their income and expenses easily on their dashboard",
    image: "/images/projects/Expense.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RohithBN/Expense-Tracker",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "SmartCareConnect",
    description: "A resource management System designed specifically for hospitals and vendors.",
    image: "/images/projects/SCC.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RohithBN/scc-2",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Notes Management App",
    description: "An  application that allows users to create, edit, and delete notes",
    image: "/images/projects/Notes.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RohithBN/Notes-management-app",
    previewUrl: "/",
  },{
    id: 9,
    title: "React Portfolio Website",
    description: "My Portfolio  Website built using React and  Tailwind CSS",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
             My Projects
            </span> 
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
