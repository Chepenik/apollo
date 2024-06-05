'use client';

import React, { useState, FC } from 'react';

const ContactSection: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [credentials, setCredentials] = useState('');
  const [company, setCompany] = useState('');
  const [referrer, setReferrer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      name,
      email,
      profession,
      credentials,
      company,
      referrer,
      _replyto: email, // Add the _replyto field
      _subject: 'Thank you for your submission',
      _next: 'https://yourdomain.co/thanks.html', // Custom thank you page
      _autoresponse: `Hi ${name},\n\nThank you for reaching out to us! We have received your submission and will be in touch with you shortly.\n\nBest regards,\nThe Apollo Team`, // Custom message
      _template: 'table', // Optional: Choose a template style
    };

    try {
      console.log("Starting fetch request", formData); // Log form data before fetch
      const response = await fetch("https://formsubmit.co/ajax/nick@thefootcollective.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log("Fetch request completed with status:", response.status); // Log status

      const data = await response.json();
      console.log("Response data received: ", data); // Log response data

      if (response.ok) {
        console.log("Submission successful");
        window.location.href = '/thankyou';
      } else {
        console.error("Submission failed with response data:", data);
        window.location.href = '/error';
      }
    } catch (error) {
      console.error("Submission failed", error);
      // Log the full error object for better debugging
      console.error(error);
      window.location.href = '/error';
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        body {
          background-color: #5a3825;
          margin: 0;
        }
      `}</style>
      <div className="min-h-screen text-[#f4eae4]">
        {isLoading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#301f13] bg-opacity-75">
            <div className="bg-[#301f13] rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-[#f4eae4]">Your submission is being processed and you will be redirected once we confirm a successful submission.</h3>
            </div>
          </div>
        )}
        <section className="px-4 mt-8 mx-4 flex flex-col rounded-2xl items-center justify-center bg-[#422b1e] text-[#f4eae4] md:mt-10 md:px-0 md:max-w-lg md:mx-auto">
          <div className="w-full">
            <p className="text-base sm:text-lg m-2 text-center">
              Running Apollo is a health protocol
            </p>
          </div>
          <div className="w-full">
            <p className="text-base sm:text-lg m-2 text-center">
              We&apos;re on a mission to help others improve their foot health so they can lead happier lives.
            </p>
          </div>
          <div className="w-full">
            <p className="text-base sm:text-lg m-2 text-center">
              To formally endorse best practices, please submit the form below:
            </p>
          </div>
        </section>

        <section className="px-4 mb-4 flex flex-col items-center justify-center min-h-screen bg-[#5a3825] text-[#f4eae4]">
          <form
            onSubmit={handleSubmit}
            className="max-w-md sm:max-w-lg mx-auto w-full flex flex-col space-y-6 sm:space-y-4"
          >
            <div>
              <label className="text-lg text-[#f4eae4] font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded px-4 py-2 text-black bg-[#f4eae4]"
                required
              />
            </div>
            <div>
              <label className="text-lg text-[#f4eae4] font-medium">Email (not made public, used to verify)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded px-4 py -2 text-black bg-[#f4eae4]"
                required
              />
            </div>
            <div>
              <label className="text-lg text-[#f4eae4] font-medium">Profession</label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="w-full border rounded px-4 py-2 text-black bg-[#f4eae4]"
              />
            </div>
            <div>
              <label className="text-lg text-[#f4eae4] font-medium">Credentials</label>
              <input
                type="text"
                id="credentials"
                name="credentials"
                value={credentials}
                onChange={(e) => setCredentials(e.target.value)}
                className="w-full border rounded px-4 py-2 text-black bg-[#f4eae4]"
              />
            </div>
            <div>
              <label className="text-lg text-[#f4eae4] font-medium">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full border rounded px-4 py-2 text-black bg-[#f4eae4]"
              />
            </div>
            <div>
              <label className="text-lg text-[#f4eae4] font-medium">Who sent you here?</label>
              <select
                value={referrer}
                onChange={(e) => setReferrer(e.target.value)}
                className="w-full border rounded px-4 py-2 text-black bg-[#f4eae4]"
                required
              >
                <option value="">Select an option</option>
                <option value="health professional">Health professional</option>
                <option value="university">University</option>
                <option value="the foot collective">The Foot Collective</option>
                <option value="other">Other</option>
                <option value="Google Search">Google Search</option>
                <option value="Professional Association">Professional Association</option>
                <option value="Patient">Patient</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-1/2 mx-auto mb-8 bg-[#422b1e] hover:bg-black text-[#f4eae4] py-2 px-6 rounded-full"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default ContactSection;
