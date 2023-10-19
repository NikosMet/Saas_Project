'use client'
import React, { useState } from 'react';


const SignUpComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    // Handle user registration here.
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone:', phone);
    console.log('Address:', address);
    console.log('City:', city);
    console.log('ZIP Code:', zipCode);
    console.log('Username:', username);
    console.log('Date of Birth:', dob);
    console.log('Gender:', gender);
    console.log('Country:', country);
    console.log('Accept Terms:', acceptTerms);
    console.log('Privacy Consent:', consent);
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="w-2/3 max-w-4xl bg-white rounded-2xl shadow-2xl flex">
        <div className="w-1/2 p-5 text-black border-r border-gray-300">
          <div className="text-left font-bold">
            <span className="text-green-500">Ebook</span>Store
          </div>
          <h2 className="text-3xl font-bold text-green-500 mb-2">Sign Up for an Account</h2>
          <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
          <form onSubmit={handleSignup}>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <div className="bg-white w-64 p-2">
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full rounded border border-gray-300 p-2"
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="bg-white w-64 p-2">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    placeholder="Email"
                    className="w-full rounded border border-gray-300 p-2"
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="bg-white w-64 p-2">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    placeholder="Password"
                    className="w-full rounded border border-gray-300 p-2"
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="bg-white w-64 p-2">
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    placeholder="Phone"
                    className="w-full rounded border border-gray-300 p-2"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="w-1/2 p-5 text-black">
          <div className="mb-4">
            <div className="bg-white w-64 p-2">
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                autoComplete="street-address"
                placeholder="Address"
                className="w-full rounded border border-gray-300 p-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="bg-white w-64 p-2">
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                autoComplete="address-level2"
                placeholder="City"
                className="w-full rounded border border-gray-300 p-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="bg-white w-64 p-2">
              <input
                type="text"
                id="zipCode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                autoComplete="postal-code"
                placeholder="ZIP Code"
                className="w-full rounded border border-gray-300 p-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="bg-white w-64 p-2">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                placeholder="Username"
                className="w-full rounded border border-gray-300 p-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white rounded py-2 px-4 hover:bg-green-600 mt-4"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent