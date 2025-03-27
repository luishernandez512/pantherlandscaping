"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const serviceOptions = ["Landscaping", "Hardscaping", "Others"];

const ContactUs = () => {
  // Optional form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  // Multi-select services
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Dropdown open/close state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Reference to close the dropdown if user clicks outside
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", formData);
    console.log("Selected Services:", selectedServices);
  };

  // Toggle a service in the selected list
  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  // Remove a service tag
  const removeService = (service: string) => {
    setSelectedServices((prev) => prev.filter((s) => s !== service));
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primeColor mb-4">
              Contact
            </h2>
            <p className="text-gray-600 mb-6">
              Office: 111 Jalisco Ct <br />
              Del Valle, Texas 78617
            </p>
            <p className="text-gray-600 mb-6">
              <span className="font-semibold">Office Hours: </span> <br />
              Mon - Sat 9am - 7pm
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Phone:</span> (512) 450-2610
            </p>
            <p className="text-gray-600 mb-6">
              <span className="font-semibold">Email:</span>{" "}
              <Link
                href="mailto:info@highlandslandscaping.com"
                className="text-[#B1D27B] hover:underline"
              >
                info@highlandslandscaping.com
              </Link>
            </p>

            {/* Social Icons (optional) */}
            <div className="flex items-center gap-4 text-[#B1D27B]">
              <Link href="#">
                <svg
                  className="w-6 h-6 hover:text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Example icon path */}
                  <path d="M..." />
                </svg>
              </Link>
              <Link href="#">
                <svg
                  className="w-6 h-6 hover:text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Another icon path */}
                  <path d="M..." />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Work With Us Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primeColor mb-4">
              Work With Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Row */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-700 font-semibold mb-1">
                    Name <span className="text-gray-500">(required)</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="
                      w-full
                      bg-transparent
                      border-0 border-b
                      border-gray-300
                      py-2
                      placeholder-gray-500
                      focus:outline-none
                      focus:border-b-2
                      focus:border-[#B1D27B]
                    "
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-700 font-semibold mb-1">
                    &nbsp;
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="
                      w-full
                      bg-transparent
                      border-0 border-b
                      border-gray-300
                      py-2
                      placeholder-gray-500
                      focus:outline-none
                      focus:border-b-2
                      focus:border-[#B1D27B]
                    "
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Phone <span className="text-gray-500">(required)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 555-5555"
                  className="
                    w-full
                    bg-transparent
                    border-0 border-b
                    border-gray-300
                    py-2
                    placeholder-gray-500
                    focus:outline-none
                    focus:border-b-2
                    focus:border-[#B1D27B]
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Email <span className="text-gray-500">(required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@domain.com"
                  className="
                    w-full
                    bg-transparent
                    border-0 border-b
                    border-gray-300
                    py-2
                    placeholder-gray-500
                    focus:outline-none
                    focus:border-b-2
                    focus:border-[#B1D27B]
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Message <span className="text-gray-500">(required)</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="How can we help you?"
                  className="
                    w-full
                    bg-transparent
                    border-0 border-b
                    border-gray-300
                    py-2
                    placeholder-gray-500
                    focus:outline-none
                    focus:border-b-2
                    focus:border-[#B1D27B]
                  "
                />
              </div>

              {/* Services Needed (Custom Multi-Select) */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-gray-700 font-semibold mb-1">
                  Services Needed
                </label>

                {/* Display selected services as "tags" */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedServices.map((service) => (
                    <div
                      key={service}
                      className="flex items-center bg-[#B1D27B] text-white px-3 py-1 rounded-full"
                    >
                      <span className="text-sm">{service}</span>
                      <button
                        type="button"
                        className="ml-2 text-sm font-bold"
                        onClick={() => removeService(service)}
                      >
                        x
                      </button>
                    </div>
                  ))}
                </div>

                {/* The "single line" that toggles the dropdown */}
                <div
                  className="
                    w-full
                    bg-transparent
                    border-0 border-b
                    border-gray-300
                    py-2
                    placeholder-gray-500
                    focus:outline-none
                    focus:border-b-2
                    focus:border-[#B1D27B]
                    cursor-pointer
                    select-none
                  "
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {selectedServices.length === 0
                    ? "Choose service"
                    : "Click to edit services"}
                </div>

                {/* Instead of absolute, we use a normal block so it reflows the layout */}
                {isDropdownOpen && (
                  <div className="border border-gray-300 rounded-md mt-2 p-4 shadow-md bg-white">
                    {serviceOptions.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 mb-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(option)}
                          onChange={() => toggleService(option)}
                          className="accent-[#B1D27B]"
                        />
                        <span className="text-gray-700 text-sm">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="
                  bg-[#B1D27B]
                  text-white
                  px-6
                  py-2
                  rounded-md
                  font-semibold
                  hover:bg-[#9CBD66]
                  transition-colors
                  duration-300
                "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;





