import { projects } from "@/data/projectData";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Github, ExternalLink, CheckCircle, Award} from "lucide-react";
import React from "react";

const ProjectDetailPage = async ({ params }) => {
    const slug = params.slug; 
    const project = projects.find((proj) => proj.slug === slug);
    
    if (!project) return notFound();

    return (
        <main className="max-w-7xl mx-auto my-28 px-6 py-12 text-white grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Section */}
            <section className="lg:col-span-8">
                {/* Title & Description */}
                <div className="mb-8">
                    <h1 className="text-5xl font-extrabold gradient-text">{project.title}</h1>
                    <p className="text-lg text-gray-300 mt-4 max-w-2xl">{project.description}</p>
                </div>

                {/* Cover Image */}
                <div className="mb-10 overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
                    <Image
                        src={project.coverImage}
                        alt={`${project.title} Cover Image`}
                        width={1200}
                        height={500}
                        className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                        priority
                    />
                </div>

                {/* Overview */}
                <div className="mb-6">
                    <h2 className="text-3xl font-semibold mb-4">Overview</h2>
                    <p className="text-gray-300">{project.overview}</p>
                </div>

                {/* Problem Statement */}
                <div className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4">🧩 Problem Statement</h2>
                    <p className="text-gray-300">{project.problemStatement}</p>
                </div>

                {/* Key Features */}
                <div className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4">✨ Key Features</h2>
                    <ul className="space-y-3 text-gray-300">
                        {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="text-green-500 mt-1 w-5 h-5" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Achievements */}
                {project.achievements && (
                    <div className="mb-10">
                        <h2 className="text-3xl font-semibold mb-4">🏆 Achievements</h2>
                        <ul className="space-y-3 text-green-300">
                            {project.achievements.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Award className="text-yellow-400 mt-1 w-5 h-5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Screenshots */}
                <div className="mb-10">
                    <h2 className="text-3xl font-semibold mb-6">🖼️ Screenshots</h2>
                    <div className="grid md:grid-cols-2 gap-6 ">
                        {project.imageUrls?.map((imgUrl, idx) => (
                            <div key={idx} className="rounded-xl overflow-hidden shadow-lg border border-gray-700">
                                <Image
                                    src={imgUrl}
                                    alt={`Screenshot ${idx + 1}`}
                                    width={800}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4 sticky top-40 self-start bg-[#111111] border border-gray-800 rounded-2xl shadow-2xl p-6 space-y-8">
                {/* Meta Info */}
                <div className="space-y-2">
                    <div className="text-sm text-gray-400">
                        <span className="font-medium text-white">Role:</span> {project.role}
                    </div>
                    <div className="text-sm text-gray-400">
                        <span className="font-medium text-white">Duration:</span> {project.duration}
                    </div>
                    <div className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="font-medium text-white">Status:</span>
                        <span
                            className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                                project.status === "Completed"
                                    ? "bg-green-700 text-white"
                                    : project.status === "In Progress"
                                    ? "bg-yellow-600 text-black"
                                    : "bg-gray-600 text-white"
                            }`}
                        >
                            {project.status}
                        </span>
                    </div>
                </div>

                {/* Tech Stack */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">🛠 Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech, i) => (
                            <span
                                key={i}
                                className="bg-indigo-800/30 px-3 py-1 rounded-full text-sm border border-indigo-400 text-white"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-[#1f1f1f] hover:bg-[#333] rounded-md text-sm font-medium"
                        >
                            <Github size={18} />
                            View on GitHub
                        </a>
                    )}
                    {project.liveDemo && (
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-md text-sm font-medium"
                        >
                            <ExternalLink size={18} />
                            Live Demo
                        </a>
                    )}
                </div>
            </aside>
        </main>
    );
};

export default ProjectDetailPage;
