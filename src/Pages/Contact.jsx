import { useState, useRef, useEffect } from 'react';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane, FaRobot, FaSpinner } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [aiMessages, setAiMessages] = useState([]);
  const [isAiTyping, setIsAiTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [aiMessages]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getAIResponse = async (userMessage) => {
    setIsAiTyping(true);
    
    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conversation: [
            {
              role: 'system',
              content: 'You are a helpful contact form assistant. Help users craft better messages. Keep responses under 2 sentences.'
            },
            {
              role: 'user',
              content: userMessage
            }
          ]
        })
      });

      if (!response.ok) throw new Error('AI response failed');
      
      const data = await response.json();
      setAiMessages(prev => [...prev, {
        sender: 'ai',
        text: data.message,
        timestamp: new Date().toLocaleTimeString()
      }]);
    } catch (error) {
      setAiMessages(prev => [...prev, {
        sender: 'ai',
        text: "Sorry, I'm having trouble connecting. Please try submitting your message anyway.",
        timestamp: new Date().toLocaleTimeString()
      }]);
    } finally {
      setIsAiTyping(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add user message to chat
    setAiMessages(prev => [...prev, {
      sender: 'user',
      text: formData.message,
      timestamp: new Date().toLocaleTimeString()
    }]);

    // Get AI response
    await getAIResponse(formData.message);

    // Simulate form submission
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Submission failed');
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setAiMessages(prev => [...prev, {
        sender: 'ai',
        text: "The form submission failed. Please check your connection and try again.",
        timestamp: new Date().toLocaleTimeString()
      }]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            AI Contact Assistant
          </h1>
          <p className="text-xl text-gray-600">
            Our AI will help you craft the perfect message
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-b from-purple-600 to-indigo-600 p-6 flex flex-col">
              <div className="flex items-center mb-6">
                <div className="bg-purple-400 rounded-full p-3 mr-3">
                  <FaRobot className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white">AI Assistant</h3>
              </div>
              
              <div className="flex-1 overflow-y-auto max-h-96 pr-2">
                <AnimatePresence>
                  {aiMessages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`mb-4 flex ${msg.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`max-w-xs rounded-lg px-4 py-2 ${msg.sender === 'ai' ? 'bg-purple-100 text-gray-800' : 'bg-indigo-600 text-white'}`}>
                        <p>{msg.text}</p>
                        <p className={`text-xs mt-1 ${msg.sender === 'ai' ? 'text-purple-600' : 'text-indigo-200'}`}>
                          {msg.timestamp}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {isAiTyping && (
                  <div className="flex justify-start mb-4">
                    <div className="bg-purple-100 rounded-lg px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg 
                      className="h-6 w-6 text-green-600" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                  <p className="text-gray-600">We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 transition duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 transition duration-300"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                      <FaComment className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 transition duration-300"
                      placeholder="Type your message here..."
                      required
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="animate-spin mr-2" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="mr-2" />
                          Send with AI Help
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Our AI assistant analyzes messages only to improve communication. Your data remains private.</p>
        </div>
      </div>
    </div>
  );
}