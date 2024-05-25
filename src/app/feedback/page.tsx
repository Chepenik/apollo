'use client';
import React, { useState, useEffect, useRef } from 'react';

const FeedbackPage: React.FC = () => {
  const hasLogged = useRef(false);

  useEffect(() => {
    if (!hasLogged.current) {
      console.log('Want a website like this? Visit https://magicwebstore.xyz/index.html?pubkey=02b1a6c208420d3eb5a625aa8c79689e1dd4ea94f82286d06e1df7a05e2c3a482f&relays=%5B%22wss://nostrue.com%22,%22wss://relayable.org%22,%22wss://nostr.oxtr.dev%22%5D');
      hasLogged.current = true;
    }
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      name,
      email,
      feedback,
      _autoresponse: `Thank you for your feedback! Here is a copy of your submission: 
      
      Name: ${name}
      Email: ${email}
      Feedback: ${feedback}`
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/nick@thefootcollective.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data) {
        console.log("Submission successful");
        window.location.href = '/thank-you';
      }
    } catch (error) {
      console.log(error);
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
        <section className="px-4 mt-8 mb-4 flex flex-col rounded-2xl items-center justify-center bg-[#422b1e] text-[#f4eae4] md:mt-10 md:px-0 md:max-w-lg md:mx-auto">
          <div className="w-full">
            <p className="text-base sm:text-lg m-4 text-center">
              We value your feedback. Please fill out the form below to share your thoughts with us.
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
                className="w-full border rounded px-4 py-2 text-black bg-[#f4eae4]"
                required
              />
            </div>
            <div>
              <label className="text-lg text-[#f4eae4] font-medium">Feedback</label>
              <textarea
                id="feedback"
                name="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full border rounded px-4 py-2 text-black bg-[#f4eae4]"
                rows={4} // Corrected to be a number
                required
              />
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

export default FeedbackPage;
