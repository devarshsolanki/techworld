import React, { useState } from 'react';
import { Button } from './ui/button';

export function ReferAndEarn() {
  const [form, setForm] = useState({ name: '', location: '', phone: '' });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [coupon, setCoupon] = useState<string | null>(null);

  const validate = () => {
    const e: { [k: string]: string } = {};

    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.location.trim()) e.location = 'Location is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';

    if (form.phone && !/^\+?[0-9\s-]{7,20}$/.test(form.phone)) {
      e.phone = 'Enter a valid phone number';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const generateCoupon = () => {
    const rand = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `TW-REF-${rand}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setCoupon(generateCoupon());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: '' }));
  };

  return (
    <section
      className="min-h-[90vh] flex items-center justify-center px-6 py-16 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dyxjqw88z/image/upload/v1770027173/vivid-blurred-colorful-wallpaper-background_c1jcis.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl p-8 relative z-10">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          Refer & Earn
        </h1>
        <p className="text-gray-600 mb-8">
          Invite your friends and earn exciting rewards.
        </p>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-xl bg-white border px-4 py-3 focus:ring-2 focus:ring-[var(--accent-blue-end)]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
            
          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Enter your location"
              className="w-full rounded-xl bg-white border px-4 py-3 focus:ring-2 focus:ring-[var(--accent-blue-end)]"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full rounded-xl bg-white border px-4 py-3 focus:ring-2 focus:ring-[var(--accent-blue-end)]"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition"
          >
            Generate Your Coupon Code
          </Button>
        </form>

        {/* Coupon */}
        {coupon && (
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
            <h2 className="text-lg font-semibold mb-2">
              🎉 Your Coupon Code
            </h2>
            <div className="flex items-center justify-between gap-4">
              <span className="text-xl font-mono tracking-wider">
                {coupon}
              </span>
              <Button
                onClick={() => navigator.clipboard.writeText(coupon)}
                className="bg-white text-black px-4 py-2 rounded-lg"
              >
                Copy
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ReferAndEarn;
