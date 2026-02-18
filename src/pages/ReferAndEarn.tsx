import React, { useState } from 'react';
import { Button } from '../components/ui/button';

export function ReferAndEarn() {
  const [form, setForm] = useState({ name: '', location: '', phone: '' });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [coupon, setCoupon] = useState<string | null>(null);

  const validate = () => {
    const e: { [k: string]: string } = {};
    if (!form.name) e.name = 'Name is required';
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.location.trim()) e.location = 'Location is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';

    if (form.phone && !/^\+?[0-9\s-]{7,20}$/.test(form.phone)) {
      e.phone = 'Enter a valid phone number';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const generateCoupon = () => `TW-REF-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

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
  <section className="w-full">
    {/* HERO SECTION */}
    <div
      className="min-h-screen flex items-center px-10 py-24 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dyxjqw88z/image/upload/v1770648740/Gemini_Generated_Image_jhvwl9jhvwl9jhvw_bvrfv7.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT : HOW IT WORKS */}
        <div className="text-black">
          <h2 className="text-4xl font-bold mb-10">✨How it's Works✨</h2>

          <div className="space-y-8">
            {[
              { step: 1, text: 'Fill out the referral form.' },
              { step: 2, text: 'Share your unique coupon code.' },
              { step: 3, text: 'Earn rewards when friends join.' },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-md-10 shadow-xl rounded-2xl p-7 border transition hover:shadow-2xl"
              >
                <div className="w-10 h-10 rounded-full gradient-primary text-white flex items-center justify-center font-bold shrink-0">
                  {item.step}
                </div>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT : FORM CARD (UNCHANGED) */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-100 max-w-[360px] bg-card rounded-3xl shadow-xl p-8 lg:p-7">
            <h1 className="text-3xl font-bold text-center mb-2">
              Refer & Earn
            </h1>
            <p className="text-foreground text-center mb-8">
              Invite friends and unlock exclusive rewards
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full mt-1 rounded-xl bg-[var(--input-background)] px-4 py-3 border border-gray-600 outline-none focus:ring-2 focus:ring-[var(--ring)]"
                />
                {errors.name && (
                  <p className="error-text text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="text-sm font-medium">Location</label>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  className="w-full mt-1 rounded-xl bg-[var(--input-background)] px-4 py-3 border border-gray-300 outline-none focus:ring-2 focus:ring-[var(--ring)]"
                />
                {errors.location && (
                  <p className="error-text text-sm mt-1">{errors.location}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full mt-1 rounded-xl bg-[var(--input-background)] px-4 py-3 border border-gray-300 outline-none focus:ring-2 focus:ring-[var(--ring)]"
                />
                {errors.phone && (
                  <p className="error-text text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <Button className="w-full gradient-yellow rounded-xl py-3 font-semibold text-black">
                Generate Coupon
              </Button>
            </form>

            {coupon && (
              <div className="mt-8 p-6 rounded-2xl gradient-primary text-white">
                <p className="font-medium mb-2">Your Coupon Code</p>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-lg truncate">{coupon}</span>
                  <Button
                    onClick={() => navigator.clipboard.writeText(coupon)}
                    className="bg-black text-white"
                  >
                    Copy
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>

    {/* BAAKI SECTIONS AS-IT-IS */}


    {/* HOW IT WORKS */}
    {/* <div className="py-32 text-center">
      <h2 className="text-3xl font-bold mb-8">How it Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          { step: 1, text: 'Fill out the referral form.' },
          { step: 2, text: 'Share your unique coupon code.' },
          { step: 3, text: 'Earn rewards when friends join.' },
        ].map((item) => (
          <div
            key={item.step}
            className="rounded-2xl p-6 border transition hover:shadow-xl"
          >
            <div className="w-10 h-10 mx-auto mb-4 rounded-full gradient-primary text-white flex items-center justify-center font-bold">
              {item.step}
            </div>
            <p className="text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </div> */}

    {/* BENEFITS */}
    <div className="py-3 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Benefits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[
          'Earn rewards per referral',
          'Fast & simple sharing',
          'Live referral tracking',
          'Exclusive bonuses',
        ].map((benefit, i) => (
          <div key={i} className="rounded-3xl p-8 border">
            <div className="text-3xl mb-3">✨</div>
            <p className="text-lg">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

}

export default ReferAndEarn;