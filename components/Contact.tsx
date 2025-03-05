"use client"
import { useState } from "react";
import { MessageSquare, Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "e3221aa9-3f96-4ab6-af85-9414c72016c4", // Replace with your Web3Forms access key
        ...formData,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setStatus("Message Sent!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container max-w-[90%] mx-auto px-4">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
        </div>

        {/* Form & Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <Card className="w-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your name" required value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="Your email" required value={formData.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={5} required value={formData.message} onChange={handleChange} />
                </div>

                <Button className="w-full" type="submit">Send Message</Button>
                {status && <p className="text-sm text-center mt-2">{status}</p>}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="mb-6">
              Feel free to connect with me! I'm always open to new projects, ideas, and collaborations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="">pranavkerkar04@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span className="">+91 8857990312</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="https://github.com/pranavkerkar31" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="w-12 h-12">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>

                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="w-12 h-12">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>

                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="w-12 h-12">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </a>

                <a href="https://instagram.com/pranav_kerkar" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="w-12 h-12">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
