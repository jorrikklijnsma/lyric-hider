import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className='flex justify-center my-4'>
      
    <div className='flex flex-col gap-5 text-left max-w-lg'>
      <h1 className="text-3xl font-bold mb-4 text-center">The developer</h1>
      <section className='flex flex-col gap-2'>
      <p className="mb-4">This tool was developed by <a href="https://www.jorrikklijnsma.com">Jorrik Klijnsma</a>.</p>
      <p className="mb-4">I am a front-end engineer who is hughely passionate about web development and AI.</p>
      </section>

      <h2 className="text-xl font-semibold mb-2 text-center">About the tool</h2>
      <section className='flex flex-col gap-2'>
      <p className="mb-4">For years my mind was overflowing with ideas and during the last year large language models gave me the opportunity to bring some of these ideas to life.</p>
      <p className="mb-4">If you would like to know more about how you can turn your ideas into reality, feel free to reach out.</p>
      <ul className="mb-4 list-none">
        <li>Personal website: <a href="https://www.jorrikklijnsma.com" target='_blank' className='group text-violet-600 inline-flex items-center' rel="noreferrer">more about me<ChevronRight size={16} className='inline-block transition-transform group-hover:translate-x-2' /></a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/jorrik-klijnsma/" target='_blank' className='group text-violet-600 inline-flex items-center' rel="noreferrer">for connecting<ChevronRight size={16} className='inline-block transition-transform group-hover:translate-x-2' /></a></li>
        <li>Codepen: <a href="https://codepen.io/jorrikklijnsma" target='_blank' className='group text-violet-600 inline-flex items-center' rel="noreferrer">Small code snippets<ChevronRight size={16} className='inline-block transition-transform group-hover:translate-x-2' /></a></li>
        <li>GitHub: <a href="https://www.github.com/jorrikklijnsma" target='_blank' className='group text-violet-600 inline-flex items-center' rel="noreferrer">Nerdy stuff<ChevronRight size={16} className='inline-block transition-transform group-hover:translate-x-2' /></a></li>
      </ul>
      </section>

      <section className='flex flex-col gap-2'>
      <h2 className="text-xl font-semibold mb-2 text-center">About the tool</h2>
      <p className="mb-4">This tool was built to create an easy way of making lyrics bypass copyright detection. I got stuck during my research of music prompting. This tool is the (Successful) result of solving that part of research.</p>
      <p className="mb-4">I hope you enjoy using this tool as much as I enjoyed building it.</p>
      </section>

      <section className='flex flex-col gap-2'>
      <h2 className="text-xl font-semibold mb-2">Questions or Feedback</h2>
      <p className="mb-4">If you have any questions or feedback, please don't hesitate to reach out.</p>
      <p className="mb-4">Here is a link to a <a href="https://forms.gle/dhco5asaUTrkoCPYA">Contact Form</a></p>
      </section>
    </div>
    </div>
  );
}