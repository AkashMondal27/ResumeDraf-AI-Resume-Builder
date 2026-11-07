import React from 'react'
import Title from './Title'
import { Contact2Icon } from 'lucide-react';
import { useForm, ValidationError } from "@formspree/react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6"

const socialLinks = [
  { name: "GitHub", icon: <FaGithub />, href: "https://github.com/AkashMondal27" },
  { name: "LinkedIn", icon: <FaLinkedin />, href: "hhttps://www.linkedin.com/in/akashmondal27/" },
  { name: "X", icon: <FaXTwitter />, href: "https://x.com/akashmondal27" },
  { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com/akash__diaries" },
  { name: "Email", icon: <FaEnvelope />, href: "akashmondal102003@gmail.com" },
];


const Contact = () => {
    const [state, handleSubmit] = useForm("xbggeojv");
  return (
    <>
       <div id="contact"
      className=' flex flex-col justify-center items-center mt-20 my-10 scroll-mt-12'>
      {/* // Badge  */}
      <div className="flex items-center gap-2 text-sm text-orange-800 bg-orange-400/10  rounded-full ">
        <Contact2Icon className='sizw-4.5 stroke-green-600' />
        <span>Get in touch</span>
      </div>

      {/* title & description */}
      <Title title="Have feedback or a suggestion?"
        description="I’d love to hear from you. If you have a question or want to get in touch, 
                    send me a message using the form below."/>

    </div>

 <div className="mx-auto w-full max-w-6xl mb-6">
        

        <div className="grid gap-5 md:grid-cols-[1.15fr_1fr] md:items-stretch md:gap-10">
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-lg md:p-6">
              <h3 className="mb-5 text-center text-lg font-semibold text-orange-500">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:+10000000000"
                  className="flex items-center gap-4 text-sm text-slate-600 hover:text-orange-600"
                >
                  <FaPhone className="shrink-0" />
                  <span>
                    <strong className="block">+1 000 000 0000</strong>
                    <span className="text-slate-400">Phone</span>
                  </span>
                </a>

                <a
                  href="mailto:YOUR_EMAIL@gmail.com"
                  className="flex items-center gap-4 text-sm text-gray-700 hover:text-orange-300"
                >
                  <FaEnvelope className="shrink-0" />
                  <span>
                    <strong className="block">akashmondal102003@gmail.com</strong>
                    <span className="text-slate-400">Email</span>
                  </span>
                </a>

                <div className="flex items-center gap-4 text-sm text-gray-700">
                  <FaLocationDot className="shrink-0" />
                  <span>
                    <strong className="block">Dubrajpur,Birbhum,731123</strong>
                    <span className="text-slate-400">Location</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/[0.06] p-5 shadow-lg md:p-6">
              <h3 className="mb-4 text-center text-lg font-semibold text-orange-300">
                My Social Media
              </h3>

              <div className="flex flex-wrap justify-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name === "Email" ? undefined : "_blank"}
                    rel={social.name === "Email" ? undefined : "noreferrer"}
                    aria-label={social.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-black/30 px-3 py-2 text-sm text-gray-700 transition hover:border-orange-400 hover:bg-orange-500"
                  >
                    {social.icon}
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-lg md:p-6">
            <h3 className="mb-4 text-lg font-semibold text-orange-500">
              Feel free to connect
            </h3>

            {state.succeeded ? (
              <div className="rounded-lg bg-emerald-500/10 p-4 text-emerald-300">
                Message sent successfully. Thank you for reaching out!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="contact-name" className="mb-1 block text-sm">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1 block text-sm">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-1 block text-sm text-red-300"
                  />
                </div>

              

                <div>
                  <label htmlFor="contact-message" className="mb-1 block text-sm">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-y rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-1 block text-sm text-red-300"
                  />
                </div>

                <ValidationError
                  errors={state.errors}
                  className="block text-sm text-red-300"
                />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full rounded-lg bg-orange-300 px-4 py-3 text-sm font-semibold transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {state.submitting ? "Sending..." : "✉ Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>




    </>
  )
}

export default Contact
