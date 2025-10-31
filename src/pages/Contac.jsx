import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section 
    id="contac"
    className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left side: Contact info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold leading-tight">
            Get In Touch !
          </h2>
          <p className="text-gray-300">
            We’d love to hear from you. Whether you have a project idea, a
            partnership in mind, or just want to say hello — reach out and we’ll
            respond as soon as possible.
          </p>

          <div className="space-y-6">
            {/* Info cards */}
            <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
              <Mail className="w-8 h-8 text-yellow-400" />
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-gray-300">hello@smilesrilanka.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
              <Phone className="w-8 h-8 text-yellow-400" />
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-gray-300">+94 77 123 4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
              <MapPin className="w-8 h-8 text-yellow-400" />
              <div>
                <h4 className="font-semibold">Visit Us</h4>
                <p className="text-gray-300">123 Galle Road, Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Contact form */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10">
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
            Send Us a Message
          </h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                placeholder="Write your message..."
                rows="5"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
