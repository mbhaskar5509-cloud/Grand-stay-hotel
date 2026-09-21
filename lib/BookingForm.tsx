"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const { error } = await supabase.from("bookings").insert({
      name,
      phone,
      check_in: checkIn,
      check_out: checkOut,
      guests: Number(guests),
      message,
    });

    setLoading(false);

    if (error) {
      setError("Booking failed. Please try again.");
      console.error(error);
      return;
    }

    setSuccess("Booking enquiry submitted successfully! 🎉");

    setName("");
    setPhone("");
    setCheckIn("");
    setCheckOut("");
    setGuests("2");
    setMessage("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#151515] p-6 shadow-2xl md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Full Name
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Phone Number
          </label>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="9876543210"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Check In
          </label>
          <input
            required
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Check Out
          </label>
          <input
            required
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-500"
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6 Guests</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Message
          </label>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Any special request?"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
        </div>

      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-xl bg-yellow-500 px-6 py-4 font-bold text-black transition hover:bg-yellow-400 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Booking Enquiry"}
      </button>

      {success && (
        <p className="mt-4 text-center text-sm text-green-400">
          {success}
        </p>
      )}

      {error && (
        <p className="mt-4 text-center text-sm text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}