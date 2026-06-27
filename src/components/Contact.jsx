import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="py-32 bg-white dark:bg-slate-950 px-6 md:px-12 border-t border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-16 flex flex-col md:items-center text-center">
          <div className="flex items-center gap-3 mb-4 md:justify-center">
            <span className="h-px w-8 bg-blue-600"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">Get In Touch</span>
            <span className="h-px w-8 bg-blue-600 hidden md:block"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Whether you have a question, a project in mind, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-300"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-900 dark:text-slate-200">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  placeholder="John Doe"
                  className="px-5 py-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all dark:text-white dark:placeholder-slate-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-900 dark:text-slate-200">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  placeholder="john@example.com"
                  className="px-5 py-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all dark:text-white dark:placeholder-slate-600"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-900 dark:text-slate-200">Your Message</label>
              <textarea 
                id="message"
                required
                rows="5"
                placeholder="Hello Praneash, I would like to discuss..."
                className="px-5 py-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none dark:text-white dark:placeholder-slate-600"
              />
            </div>

            <button 
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'idle' && <><Send size={18} /> Send Message</>}
              {status === 'loading' && <span className="animate-pulse">Sending...</span>}
              {status === 'success' && <><CheckCircle size={18} /> Sent Successfully!</>}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
