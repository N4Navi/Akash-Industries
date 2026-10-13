import React, { useState } from 'react';

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  RotateCcw,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function Contact({ prefilledSubject = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const [prevPrefilled, setPrevPrefilled] = useState(prefilledSubject);
  if (prefilledSubject !== prevPrefilled) {
    setPrevPrefilled(prefilledSubject);
    setFormData((prev) => ({
      ...prev,
      subject: prefilledSubject ? `Inquiry regarding: ${prefilledSubject}` : '',
    }));
  }


  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g., name@company.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter an inquiry subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters long.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message or requirements.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide more details (minimum 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate brief client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold tracking-wider uppercase border border-slate-300">
            <Mail className="w-3.5 h-3.5 text-orange-600" />
            Connect With Our Engineering Desk
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Request a Technical Consultation or Quote
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Send us your drawing files, production quantities, or general inquiries. Our technical staff will review and get back with recommendations.
          </p>
        </div>

        {/* Contact Layout: Form + Information Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
            
            {isSubmitted ? (
              <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto border border-green-200">
                  <CheckCircle className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Inquiry Recorded Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-slate-800">{submittedData?.name}</span>. Your demonstration inquiry has been validated and captured locally in this browser session.
                  </p>
                </div>

                {/* Captured submission details summary */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left text-xs max-w-lg mx-auto space-y-2">
                  <div className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span className="text-slate-500">Contact Email:</span>
                    <span className="font-semibold text-slate-800">{submittedData?.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span className="text-slate-500">Subject:</span>
                    <span className="font-semibold text-slate-800">{submittedData?.subject}</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 block mb-1">Message Preview:</span>
                    <p className="text-slate-700 bg-white p-2.5 rounded border border-slate-200 italic">
                      "{submittedData?.message}"
                    </p>
                  </div>
                </div>

                {/* Explicit Disclaimer */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800 max-w-md mx-auto flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-left">
                    Demo Mode Notice: No email or network transmission occurred. This form operates client-side for validation testing and layout demonstration.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Please fill out the form below. All fields marked with * are required.
                  </p>
                </div>

                {/* Form Alert / Notice */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>
                    Interactive demonstration form with client-side field validation.
                  </span>
                </div>

                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe or Tech Procurement Lead"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-400 bg-red-50/30'
                        : 'border-slate-300 focus:border-orange-500 focus:ring-orange-500/20'
                    }`}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@company.com"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-400 bg-red-50/30'
                        : 'border-slate-300 focus:border-orange-500 focus:ring-orange-500/20'
                    }`}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Subject / Component Category <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. RFQ for CNC Turned Pins (500 units)"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? 'border-red-500 focus:ring-red-400 bg-red-50/30'
                        : 'border-slate-300 focus:border-orange-500 focus:ring-orange-500/20'
                    }`}
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Project Message & Specifications <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please specify materials, expected tolerances, monthly quantities, and any specific requirements..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-all resize-y ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-400 bg-red-50/30'
                        : 'border-slate-300 focus:border-orange-500 focus:ring-orange-500/20'
                    }`}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-sm hover:shadow transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Validating Form...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry Request</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

          {/* Right Column: Contact Information & Factory Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Details Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-sm space-y-6">
              <h3 className="text-xl font-bold tracking-tight text-white border-b border-slate-800 pb-4">
                Manufacturing Plant & Headquarters
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-orange-400 flex items-center justify-center shrink-0 border border-slate-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Plant Location
                    </span>
                    <p className="text-slate-200 mt-0.5 leading-snug">
                      {COMPANY_INFO.contact.address}
                    </p>
                    <p className="text-slate-400 text-xs">
                      {COMPANY_INFO.contact.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-orange-400 flex items-center justify-center shrink-0 border border-slate-700">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-white hover:text-orange-400 transition-colors font-medium"
                    >
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-orange-400 flex items-center justify-center shrink-0 border border-slate-700">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Engineering Inquiries
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="text-white hover:text-orange-400 transition-colors font-medium break-all"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-orange-400 flex items-center justify-center shrink-0 border border-slate-700">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Shop Floor Operating Hours
                    </span>
                    <p className="text-slate-200 mt-0.5">
                      {COMPANY_INFO.contact.hours}
                    </p>
                    <p className="text-xs text-orange-400 mt-1 font-mono">
                      {COMPANY_INFO.contact.emergencySupport}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Procurement Checklist Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                RFQ Submission Recommendations
              </h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1 shrink-0" />
                  <span>Attach 2D PDF drawings with critical tolerances specified.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1 shrink-0" />
                  <span>Provide 3D CAD files (.STEP / .IGES) for rapid CAM cycle estimation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1 shrink-0" />
                  <span>Indicate batch volumes (sample prototypes vs. recurring deliveries).</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
