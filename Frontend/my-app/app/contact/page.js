import React from 'react'

const page = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4 text-green-500">Contact Us</h1>
      <p className="text-lg">
        Have questions, suggestions, or just want to get in touch? We'd love to hear from you. Feel free to reach out using one of the methods below.
      </p>

      <h2 className="text-xl font-semibold mt-4 text-green-500">Contact Information</h2>
      <p className="text-lg">
        <strong>Email:</strong> contact@Ebookstore.com
      </p>
      <p className="text-lg">
        <strong>Phone:</strong> +1 (123) 456-7890
      </p>

      <h2 className=" text-green-500">Office Address</h2>
      <p className="text-lg">
        Ebook Store<br />
        123 Main Street<br />
        Heraklion, 71601<br />
        Greece
      </p>

    
    </div>
  );
}

export default page