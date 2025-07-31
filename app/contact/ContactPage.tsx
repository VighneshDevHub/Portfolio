"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Send, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(form);
    setStatus("");

    const serviceID = "your_service_id";       // ✅ replace with your EmailJS service ID
    const templateID = "your_template_id";     // ✅ replace with your EmailJS template ID
    const publicKey = "your_public_key";       // ✅ replace with your EmailJS public key

    try {
      const result = await emailjs.send(serviceID, templateID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, publicKey);

      if (result.status === 200) {
        setStatus("Message sent successfully.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong. Check your internet or try later.");
    }

    setLoading(false);
  };

  return (
    <section className="relative py-16 overflow-hidden">
      <BackgroundBeams className="z-0" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-white">Get In Touch</h2>
            <p className="text-gray-300 mb-8">Feel free to reach out for collaborations, opportunities, or just a friendly chat.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Mail className="text-purple-400 h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-gray-400">youremail@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Phone className="text-purple-400 h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Phone</h3>
                  <p className="text-gray-400">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <MapPin className="text-purple-400 h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Location</h3>
                  <p className="text-gray-400">Your City, Country</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-purple-500/20 p-3 rounded-full hover:bg-purple-500/40 transition-colors">
                <Linkedin className="text-purple-400 h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-purple-500/20 p-3 rounded-full hover:bg-purple-500/40 transition-colors">
                <Github className="text-purple-400 h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div id="contact-form" className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/5 border border-purple-500/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  suppressHydrationWarning
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/5 border border-purple-500/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  suppressHydrationWarning
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-white/5 border border-purple-500/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  suppressHydrationWarning
                />
              </div>
              
              <div>
                <HoverBorderGradient 
                  as="div"
                  className="px-6 py-3 text-base"
                >
                  <button
                    type="submit"
                    className="flex items-center gap-2 text-white font-medium"
                    disabled={loading}
                    suppressHydrationWarning
                  >
                    {loading ? "Sending..." : "Send Message"} <Send size={16} />
                  </button>
                </HoverBorderGradient>
                {status && (
                  <p className={`text-sm mt-3 ${status.includes("success") ? "text-green-400" : "text-red-400"}`}>
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}