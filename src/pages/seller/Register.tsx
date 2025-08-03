import React, { useState } from "react";
import "../../App.css";

const SellerRegister: React.FC = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    storeName: "",
    businessType: "Individual",
    businessReg: "",
    storeDesc: "",
    address: "",
    state: "",
    city: "",
    country: "",
    bankName: "",
    accountName: "",
    accountNumber: "",
    idUpload: null as File | null,
    taxId: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked, files } = e.target as any;
    if (type === "checkbox") {
      setForm((f) => ({ ...f, [name]: checked }));
    } else if (type === "file") {
      setForm((f) => ({ ...f, [name]: files[0] }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1200);
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Registration Successful!</h2>
          <p className="text-gray-700 mb-4">Your seller account has been created. You can now log in and start selling.</p>
          <a href="/seller/login" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Go to Seller Login</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-8 px-2">
      
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 border border-blue-100 relative">
        {/* Back button row */}
        <div className="md:col-span-2 flex items-center mb-2">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-2 py-1 bg-white/80 hover:bg-blue-100 text-blue-600 rounded-lg shadow border border-blue-100 text-sm font-medium transition mr-2"
            aria-label="Go back"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <h2 className="flex-1 text-3xl font-extrabold text-slate-700 text-center tracking-tight">Seller Registration</h2>
        </div>
        {/* Personal Information */}
        <div className="md:col-span-2 text-lg font-semibold text-gray-700 mt-2 mb-1">Personal Information</div>
        <input name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Full Name" className="seller-input text-gray-900" />
        <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email Address" className="seller-input text-gray-900" />
        <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone Number" className="seller-input text-gray-900" />
        {/* Store/Business Information */}
        <div className="md:col-span-2 text-lg font-semibold text-gray-700 mt-2 mb-1">Store/Business Information</div>
        <input name="storeName" value={form.storeName} onChange={handleChange} required placeholder="Store Name" className="seller-input text-gray-900" />
        <select name="businessType" value={form.businessType} onChange={handleChange} className="seller-input text-gray-900">
          <option value="Individual">Individual</option>
          <option value="Company">Company</option>
        </select>
        <input name="businessReg" value={form.businessReg} onChange={handleChange} placeholder="Business Registration Number (optional)" className="seller-input text-gray-900" />
        <textarea name="storeDesc" value={form.storeDesc} onChange={handleChange} placeholder="Store Description" className="seller-input text-gray-900" rows={2} />
        {/* Address & Location */}
        <div className="md:col-span-2 text-lg font-semibold text-gray-700 mt-2 mb-1">Address & Location</div>
        <input name="address" value={form.address} onChange={handleChange} required placeholder="Business Address" className="seller-input text-gray-900" />
        <input name="state" value={form.state} onChange={handleChange} required placeholder="State/Region" className="seller-input text-gray-900" />
        <input name="city" value={form.city} onChange={handleChange} required placeholder="City" className="seller-input text-gray-900" />
        <input name="country" value={form.country} onChange={handleChange} required placeholder="Country" className="seller-input text-gray-900" />
        {/* Bank/Payment Details */}
        <div className="md:col-span-2 text-lg font-semibold text-gray-700 mt-2 mb-1">Bank/Payment Details</div>
        <input name="bankName" value={form.bankName} onChange={handleChange} required placeholder="Bank Name" className="seller-input text-gray-900" />
        <input name="accountName" value={form.accountName} onChange={handleChange} required placeholder="Account Name" className="seller-input text-gray-900" />
        <input name="accountNumber" value={form.accountNumber} onChange={handleChange} required placeholder="Account Number" className="seller-input text-gray-900"  />
        {/* Identification */}
        <div className="md:col-span-2 text-lg font-semibold text-gray-700 mt-2 mb-1">Identification</div>
        <input name="idUpload" type="file" accept="image/*,.pdf" onChange={handleChange} className="seller-input text-gray-900 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700" />
        <input name="taxId" value={form.taxId} onChange={handleChange} placeholder="Tax Identification Number (optional)" className="seller-input text-gray-900" />
        {/* Login Details */}
        <div className="md:col-span-2 text-lg font-semibold text-gray-700 mt-2 mb-1">Login Details</div>
        <input name="password" value={form.password} onChange={handleChange} required type="password" placeholder="Create Password" className="seller-input text-gray-900" />
        <input name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required type="password" placeholder="Confirm Password" className="seller-input text-gray-900" />
        {/* Agreement */}
        <div className="md:col-span-2 flex items-center mt-2">
          <input name="agree" type="checkbox" checked={form.agree} onChange={handleChange} required className="mr-2 accent-blue-500" />
          <span className="text-sm text-gray-600">I agree to the <a href="/terms" className="text-blue-500 underline">Terms & Conditions</a></span>
        </div>
        <button type="submit" disabled={submitting} className="md:col-span-2 w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg shadow hover:from-blue-600 hover:to-blue-700 transition mt-2 disabled:opacity-60">
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
              Registering...
            </span>
          ) : "Register as Seller"}
        </button>
      </form>
    </div>
  );
};

export default SellerRegister;
