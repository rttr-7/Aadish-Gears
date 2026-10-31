import React, { useState } from 'react';
import MainBanner from './MainBanner';
import { COUNTRIES } from '../data/countries';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'India',
    requirement: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
      if (!scriptUrl) {
        throw new Error('VITE_GOOGLE_APPS_SCRIPT_URL is not set at build time');
      }

      await fetch(
        scriptUrl,
        {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'text/plain'
          }
        }
      );

      // With no-cors mode, we can't read the response, so assume success
      setSubmitStatus({ type: 'success', message: 'Thank you! Your enquiry has been sent successfully. We will get back to you soon.' });
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        country: 'India',
        requirement: '',
      });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Error submitting form. Please try again.' });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const productImages = [
    { id: 1, src: "/Aadish-Gears/images/Gallery/AGTPL%20765%20KVA%20ES%20GEARBOX.png", alt: "AGTPL 765 KVA ES Gearbox" },
    { id: 2, src: "/Aadish-Gears/images/Gallery/EV%20GEARBOX.png", alt: "EV Gearbox" },
    { id: 3, src: "/Aadish-Gears/images/Gallery/AGTPL%20765%20KVA%20MS%20GEARBOX.png", alt: "AGTPL 765 KVA MS Gearbox" },
    { id: 4, src: "/Aadish-Gears/images/Gallery/Gears.JPG", alt: "Precision Gears" },
    { id: 5, src: "/Aadish-Gears/images/Gallery/HELICAL%20GEARS.png", alt: "Helical Gears" },
    { id: 6, src: "/Aadish-Gears/images/Gallery/ISO%200.5%20H.P%20GEARBOX.png", alt: "ISO 0.5 H.P Gearbox" },
    { id: 7, src: "/Aadish-Gears/images/Gallery/INLINE%20HELICAL%20GEARBOX.png", alt: "Inline Helical Gearbox" },
    { id: 8, src: "/Aadish-Gears/images/Gallery/ISO%201.0%20H.P%20GEARBOX.png", alt: "ISO 1.0 H.P Gearbox" },
    { id: 9, src: "/Aadish-Gears/images/Gallery/NIKTISH%20ASM%20GEARBOX.png", alt: "Niktish Assembly Gearbox" },
  ];

  return (
    <div className="bg-white text-navy">
      {/* Hero Header Section */}
      <MainBanner
        subHeader="Get in touch with us"
        header="Are you ready with your enquiry?"
        description="Send us your requirement below and our team will get back with a quote."
      />

      {}
      {/* Main Form & Contact Details Section */}
      <section className="page-container py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:items-start">
          
          {/* Left Column: Compact Form & Product Grid */}
          <div>
            <h2 className="mb-1 font-display text-3xl font-bold text-navy sm:text-4xl">
              Send us your requirement
            </h2>
            <p className="mb-5 text-xs text-slate">
              <span className="font-semibold text-navy">*</span> indicates a required field
            </p>

            {/* Compact Form */}
            <form className="grid gap-x-3 gap-y-3 sm:grid-cols-2 md:w-4/5" onSubmit={handleSubmit}>
              <label className="block text-xs font-semibold text-navy">
                <span className="mb-1 block">Full Name *</span>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-slate bg-white px-3 py-2 text-xs text-navy outline-none transition-colors focus:border-action focus:ring-1 focus:ring-action"
                />
              </label>

              <label className="block text-xs font-semibold text-navy">
                <span className="mb-1 block">Company Name</span>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-slate bg-white px-3 py-2 text-xs text-navy outline-none transition-colors focus:border-action focus:ring-1 focus:ring-action"
                />
              </label>

              <label className="block text-xs font-semibold text-navy">
                <span className="mb-1 block">Email Address *</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-slate bg-white px-3 py-2 text-xs text-navy outline-none transition-colors focus:border-action focus:ring-1 focus:ring-action"
                />
              </label>

              <label className="block text-xs font-semibold text-navy">
                <span className="mb-1 block">Phone Number *</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-slate bg-white px-3 py-2 text-xs text-navy outline-none transition-colors focus:border-action focus:ring-1 focus:ring-action"
                />
              </label>

              <label className="block text-xs font-semibold text-navy sm:col-span-2">
                <span className="mb-1 block">Country *</span>
                <div className="relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full appearance-none rounded-md border border-slate bg-white py-2 pl-3 pr-10 text-xs text-navy outline-none transition-colors focus:border-action focus:ring-1 focus:ring-action"
                  >
                    {COUNTRIES.map((country) => <option key={country}>{country}</option>)}
                  </select>
                  <span className="material-symbols-rounded pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xl text-slate" aria-hidden="true">
                    expand_more
                  </span>
                </div>
              </label>

              <label className="block text-xs font-semibold text-navy sm:col-span-2">
                <span className="mb-1 block">Your Requirement *</span>
                <textarea
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full rounded-md border border-slate bg-white px-3 py-2 text-xs text-navy outline-none transition-colors focus:border-action focus:ring-1 focus:ring-action"
                  placeholder="Tell us what you need — product type, specs or drawing reference, and quantity."
                />
              </label>

              {submitStatus && (
                <div className={`mt-3 rounded-md p-3 text-xs font-semibold sm:col-span-2 ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="mt-1 sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-action px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-action-hover disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
              </div>
            </form>

            {/* Product Image Grid (3x3 matching target design) */}
            <div className="mt-8 grid w-full max-w-[380px] grid-cols-3 gap-2">
              {productImages.map((product) => (
                <div key={product.id} className="flex aspect-[1.1] items-center justify-center bg-white">
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Details Sidebar */}
          <aside className="space-y-10 pt-1 md:pt-14 md:pl-4">
            {/* Call Us */}
            <div className="flex flex-col items-start gap-2">
              <span className="material-symbols-rounded text-xl text-navy" aria-hidden="true">call</span>
              <div>
                <h3 className="font-display text-base font-bold text-navy">Call Us</h3>
                <p className="mt-0.5 text-xs text-slate font-medium">+91 92256 43290</p>
                <p className="text-xs text-slate font-medium">+91 74990 50575</p>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex flex-col items-start gap-2">
              <span className="material-symbols-rounded text-xl text-navy" aria-hidden="true">mail</span>
              <div>
                <h3 className="font-display text-base font-bold text-navy">Email Us</h3>
                <p className="mt-0.5 text-xs text-slate font-medium">aadishgears@yahoo.co.in</p>
                <p className="text-xs text-slate font-medium">sales@aadishgears.com</p>
              </div>
            </div>

            {/* Courier & Logistics */}
            <div className="flex flex-col items-start gap-2">
              <span className="material-symbols-rounded text-xl text-navy" aria-hidden="true">local_shipping</span>
              <div>
                <h3 className="font-display text-base font-bold text-navy">Courier &amp; Logistics</h3>
                <p className="mt-0.5 text-xs leading-5 text-slate">
                  Both Trackon Couriers and DTDC operate offices right in Narhe (411041), so sample and material dispatch to and from our facility is straightforward.
                </p>
              </div>
            </div>

            {/* Factory & Office */}
            <div className="flex flex-col items-start gap-2">
              <span className="material-symbols-rounded text-xl text-navy" aria-hidden="true">location_on</span>
              <div>
                <h3 className="font-display text-base font-bold text-navy">Factory &amp; Office</h3>
                <p className="mt-0.5 text-xs leading-5 text-slate">
                  Sr. No. 23/3/1, Milkat No. 28/2, Shed No 2 Wadekar Industrial Estate, Near Siddhi Chowk, Narhe, Pune 411041, MH, India
                </p>
              </div>
            </div>

            {/* Map of the shop */}
            <div className="mt-5">
              <div className="relative overflow-hidden rounded-xl border border-line shadow-sm">
                <a
                  href="https://www.google.com/maps/dir//Aadish+Gears+%26+Transmission+Pvt+Ltd+-+Transmission+Products+Manufacturer,+S.+No.+23%2F3%2F1+Mikat+No.+28%2F2+Wadekar+Industrial+Estate,+near+Siddhi+Chowk,+Narhe,+Pune,+Maharashtra+411041/@18.4480217,73.8307512,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2958fcb83f527:0x6c04d3d87819ea42!2m2!1d73.8259301!2d18.4380014"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Aadish Gears location and directions in Google Maps"
                  className="absolute inset-0 z-10"
                />
                <iframe
                  title="Aadish Gears Shop Location"
                  src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s18.4380258,73.8256733!6i17"
                  className="h-[220px] w-full border-0 sm:h-[210px]"
                  loading="eager"
                  allowFullScreen=""
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}