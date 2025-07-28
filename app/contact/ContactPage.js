"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(form)
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
    <section className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded h-32"
        />
        <button
          type="submit"
          className="flex items-center gap-2 text-white px-4 py-2 rounded bg-black"
        >
          {loading ? "Sending..." : "Send Message"} <Send size={16} />
        </button>
        {status && <p className="text-sm mt-2">{status}</p>}
      </form>
    </section>
  );
}
