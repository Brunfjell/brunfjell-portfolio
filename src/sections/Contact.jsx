import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, loading: true, error: '' });

    try {
      const response = await fetch('src/pages/api/sendEmail.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send');
      
      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ loading: false, success: false, error: error.message });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="I'd love to hear from you" 
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-medium mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <FiMail className="text-orange-600 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">luistroyparaiso@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FiMapPin className="text-orange-600 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">Quezon City, Philippines</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FiPhone className="text-orange-600 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+63 916-280-2772</p>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 py-3 px-3 bg-stone-800 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-white block mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-white block mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="text-white block mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                value={formData.subject}
                onChange={handleChange}
                className="bg-white w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="text-white block mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                className="bg-white w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status.loading}
              className={`bg-green-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors ${
                status.loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
            {status.error && (
              <p className="text-red-500">{status.error}</p>
            )}
            {status.success && (
              <p className="text-green-500">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;