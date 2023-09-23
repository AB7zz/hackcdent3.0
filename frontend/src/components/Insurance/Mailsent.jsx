import React from 'react';

function MailSent() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto text-center text-green-500">
        <h1 className="text-4xl font-semibold mb-4">Thank You for Submitting Your Claim!</h1>
        <p className="text-lg mb-8">
          We have received your claim and have forwarded it to the respective authority.
        </p>
        <p className="text-lg mb-8">
          Our team is diligently reviewing your submission, and we will get back to you with updates
          as soon as possible.
        </p>
      </div>
    </div>
  );
}

export default MailSent;
