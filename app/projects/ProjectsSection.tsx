"use client";
import React, { useState, useEffect } from 'react';
import { projects, Project } from '@/data/projectData';
import Image from 'next/image';
import Link from 'next/link';
import { HoverBorderGradient } from '@/components/ui/HoverBorderGradient';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Globe, Database, Smartphone, BarChart3 } from 'lucide-react';

// Category icons mapping
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Full Stack Web App':
      return <Globe className="w-4 h-4 mr-2" />;
    case 'Frontend Web App':
      return <Code className="w-4 h-4 mr-2" />;
    case 'Backend System':
      return <Database className="w-4 h-4 mr-2" />;
    case 'Mobile App':
      return <Smartphone className="w-4 h-4 mr-2" />;
    case 'Data Analysis Tool':
      return <BarChart3 className="w-4 h-4 mr-2" />;
    default:
      return <Globe className="w-4 h-4 mr-2" />;
  }
};

// Extract unique project types for filter categories
const categories = ['All', ...Array.from(new Set(projects.map(project => project.projectType)))];

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    setIsFiltering(true);

    const filterTimer = setTimeout(() => {
      if (selectedCategory === 'All') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => project.projectType === selectedCategory));
      }
      setIsFiltering(false);
    }, 300);

    return () => clearTimeout(filterTimer);
  }, [selectedCategory]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">

      <div className="flex justify-center mb-5">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="div"
          className="bg-black/50 backdrop-blur-sm text-white px-4 py-1"
        >
          <span className="text-sm">Browse My Work</span>
        </HoverBorderGradient>
      </div>
      {/* Filter Categories */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex items-center px-4 py-2 rounded-full text-sm sm:text-base transition-all duration-300 ${selectedCategory === category
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-md hover:shadow-purple-500/10'}`}
          >
            {category !== 'All' ? getCategoryIcon(category) : null}
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="min-h-[500px]">
        {isFiltering ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-[400px] rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 animate-pulse">
                <div className="h-48 bg-gray-800 rounded-t-xl"></div>
                <div className="p-5">
                  <div className="h-6 bg-gray-800 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-800 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-800 rounded w-5/6 mb-4"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 w-16 bg-gray-800 rounded"></div>
                    <div className="h-6 w-16 bg-gray-800 rounded"></div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <div className="h-10 bg-gray-800 rounded flex-1"></div>
                    <div className="h-10 bg-gray-800 rounded flex-1"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <h3 className="text-xl text-gray-400">No projects found in this category</h3>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  View All Projects
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col h-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-purple-500/10"
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-all duration-300"></div>
      </div>

      {/* Project Status Badge */}
      <div className="absolute top-3 left-3">
        <span className={`text-xs px-2 py-1 rounded-full ${project.status === 'Completed' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
          {project.status}
        </span>
      </div>

      {/* Project Type Badge */}
      <div className="absolute top-3 right-3">
        <HoverBorderGradient
          containerClassName="rounded-full"
          className="bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 flex items-center"
        >
          {getCategoryIcon(project.projectType)}
          <span>{project.projectType}</span>
        </HoverBorderGradient>
      </div>


      {/* Project Content */}
      <div className="flex flex-col flex-grow p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">{project.title}</h3>
        <p className="text-gray-400 text-sm sm:text-base mb-4 flex-grow">{project.description}</p>

        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-sm text-gray-500 mb-2 flex items-center">
            <Code className="w-4 h-4 mr-1" /> Tech Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech, index) => (
              <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md border border-gray-700 hover:border-purple-500/30 transition-colors duration-300">
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md border border-gray-700">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto pt-2">
          <Link href={`/projects/${project.slug}`} className="flex-1">
            <button className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm transition-all duration-300 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30">
              View Details
            </button>
          </Link>
          {project.liveDemo && (
            <Link href={project.liveDemo} target="_blank" className="flex-1">
              <button className="w-full py-2 rounded-lg bg-transparent border border-purple-600 hover:bg-purple-600/10 text-purple-400 text-sm transition-all duration-300 hover:text-purple-300">
                Live Demo
              </button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;