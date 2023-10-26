'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4 text-green-500">Our Services</h1>
      <p className="text-lg">
        At our Ebook Store, we're dedicated to providing a wide range of services to enhance your reading experience. Whether you're a casual reader or a book enthusiast, we have something for everyone. Explore the services we offer:
      </p>

      <h2 className="text-xl font-semibold mt-4 text-green-500 ">1. Diverse eBook Collection</h2>
      <p className="text-lg">
        We offer a diverse collection of eBooks spanning various genres, from timeless classics to contemporary bestsellers. With thousands of titles at your fingertips, you'll never run out of reading options.
      </p>

      <h2 className="text-xl font-semibold mt-4 text-green-500">2. User-Friendly Platform</h2>
      <p className="text-lg">
        Our user-friendly platform is designed to make your eBook shopping experience as seamless as possible. Browse, search, and discover new titles with ease. Our intuitive interface ensures you can find your next great read without hassle.
      </p>

      <h2 className="text-xl font-semibold mt-4 text-green-500">3. Seamless Checkout Process</h2>
      <p className="text-lg">
        We've streamlined the checkout process to save you time and frustration. With just a few clicks, you can purchase and start reading your chosen eBooks. No complicated forms or hidden fees ? it's a hassle-free experience.
      </p>

      <h2 className="text-xl font-semibold mt-4 text-green-500">4. Compatibility Across Devices</h2>
      <p className="text-lg">
        Enjoy your eBooks on your preferred devices. Our eBooks are compatible with a wide range of platforms, including eReaders, tablets, smartphones, and desktop computers. You can switch between devices without losing your reading progress.
      </p>

      <h2 className="text-xl font-semibold mt-4 text-green-500">5. Book Recommendations</h2>
      <p className="text-lg">
        Looking for your next favorite book? Our recommendation system suggests titles based on your reading history and preferences. Discover hidden gems and popular reads tailored to your tastes.
      </p>

      <h2 className="text-xl font-semibold mt-4 text-green-500">6. Quality Customer Support</h2>
      <p className="text-lg">
        We're here to assist you every step of the way. If you have questions, encounter issues, or need assistance, our dedicated customer support team is ready to help. Your satisfaction is our priority.
      </p>

      <h2 className="text-xl font-semibold mt-4 text-green-500">7. Regular Updates</h2>
      <p className="text-lg">
        Stay in the know with our regular updates. We keep you informed about the latest eBook releases, promotions, and literary events. Be the first to discover exciting new reads.
      </p>

      <p className="text-lg mt-8">
        At our Ebook Store, we're committed to enhancing your reading journey. Explore our services, find your next adventure in the pages of a book, and make the most of your reading experience with us. Happy reading!
      </p>
    </div>
  );
}