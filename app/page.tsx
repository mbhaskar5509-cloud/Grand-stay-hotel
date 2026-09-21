import BookingForm from "./BookingForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-xl font-bold tracking-[0.2em]">
              GRAND<span className="text-yellow-500">STAY</span>
            </h1>

            <p className="text-[9px] tracking-[0.35em] text-gray-400">
              HOTEL & SUITES
            </p>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-gray-300 hover:text-yellow-500"
            >
              Home
            </a>

            <a
              href="#rooms"
              className="text-sm text-gray-300 hover:text-yellow-500"
            >
              Rooms
            </a>

            <a
              href="#facilities"
              className="text-sm text-gray-300 hover:text-yellow-500"
            >
              Facilities
            </a>

            <a
              href="#gallery"
              className="text-sm text-gray-300 hover:text-yellow-500"
            >
              Gallery
            </a>

            <a
              href="#booking"
              className="text-sm text-gray-300 hover:text-yellow-500"
            >
              Booking
            </a>

            <a
              href="#contact"
              className="text-sm text-gray-300 hover:text-yellow-500"
            >
              Contact
            </a>
          </div>

          <a
            href="#booking"
            className="rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-400"
          >
            Book Now
          </a>

        </div>
      </nav>


      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=90"
          alt="GrandStay Hotel"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">
          <div className="max-w-3xl">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.4em] text-yellow-400">
              Premium Hotel • Tirupati
            </p>

            <h2 className="text-5xl font-bold leading-tight md:text-7xl">
              Stay Comfortably.
              <br />
              <span className="text-yellow-400">
                Travel Beautifully.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-200">
              Experience premium rooms, modern facilities and warm
              hospitality at GrandStay Hotel in Tirupati.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#rooms"
                className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400"
              >
                Explore Rooms
              </a>

              <a
                href="#booking"
                className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-semibold backdrop-blur hover:bg-white/20"
              >
                Book Your Stay
              </a>

            </div>

          </div>
        </div>
      </section>


      {/* BOOKING BAR */}
      <section className="relative z-20 mx-auto -mt-10 max-w-6xl px-6">

        <div className="grid gap-4 rounded-2xl border border-white/10 bg-[#151515] p-5 shadow-2xl md:grid-cols-4">

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Check In
            </p>
            <p className="mt-2 font-medium">
              Select Date
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Check Out
            </p>
            <p className="mt-2 font-medium">
              Select Date
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Guests
            </p>
            <p className="mt-2 font-medium">
              2 Guests
            </p>
          </div>

          <a
            href="#booking"
            className="flex items-center justify-center rounded-xl bg-yellow-500 px-6 py-4 font-semibold text-black hover:bg-yellow-400"
          >
            Check Availability
          </a>

        </div>
      </section>


      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-28">

        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-yellow-500">
              Welcome to GrandStay
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              More than a stay,
              <br />
              an experience.
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Whether you're visiting Tirupati for pilgrimage, business or
              leisure, GrandStay offers a comfortable and relaxing stay with
              modern amenities and thoughtful hospitality.
            </p>

            <a
              href="#rooms"
              className="mt-7 inline-block border-b border-yellow-500 pb-2 text-sm font-semibold text-yellow-400"
            >
              Discover Our Rooms →
            </a>

          </div>


          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-7">
              <p className="text-4xl font-bold text-yellow-400">
                24/7
              </p>
              <p className="mt-2 text-gray-400">
                Front Desk
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-7">
              <p className="text-4xl font-bold text-yellow-400">
                50+
              </p>
              <p className="mt-2 text-gray-400">
                Premium Rooms
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-7">
              <p className="text-4xl font-bold text-yellow-400">
                4.8★
              </p>
              <p className="mt-2 text-gray-400">
                Guest Rating
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-7">
              <p className="text-4xl font-bold text-yellow-400">
                5+
              </p>
              <p className="mt-2 text-gray-400">
                Years Experience
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ROOMS */}
      <section
        id="rooms"
        className="bg-[#111111] px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-yellow-500">
                Accommodation
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Rooms & Suites
              </h2>

            </div>

            <p className="max-w-md text-gray-400">
              Designed for comfort, relaxation and a memorable stay.
            </p>

          </div>


          <div className="mt-12 grid gap-7 md:grid-cols-3">

            {/* DELUXE */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#181818]">

              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80"
                alt="Deluxe Room"
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <p className="text-sm text-yellow-500">
                  From ₹2,499 / night
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Deluxe Room
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Comfortable room with modern interiors and premium amenities.
                </p>

                <a
                  href="#booking"
                  className="mt-6 inline-block text-sm font-semibold text-yellow-400"
                >
                  Book This Room →
                </a>

              </div>

            </div>


            {/* PREMIUM */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#181818]">

              <img
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80"
                alt="Premium Room"
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <p className="text-sm text-yellow-500">
                  From ₹3,499 / night
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Premium Room
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Spacious accommodation with upgraded facilities and comfort.
                </p>

                <a
                  href="#booking"
                  className="mt-6 inline-block text-sm font-semibold text-yellow-400"
                >
                  Book This Room →
                </a>

              </div>

            </div>


            {/* FAMILY */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#181818]">

              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"
                alt="Family Suite"
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <p className="text-sm text-yellow-500">
                  From ₹4,999 / night
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Family Suite
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Large suite designed for families and longer stays.
                </p>

                <a
                  href="#booking"
                  className="mt-6 inline-block text-sm font-semibold text-yellow-400"
                >
                  Book This Room →
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* FACILITIES */}
      <section
        id="facilities"
        className="mx-auto max-w-7xl px-6 py-28"
      >

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-yellow-500">
            Hotel Facilities
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Everything you need
          </h2>

        </div>


        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3">

          {[
            ["Wi-Fi", "High-speed complimentary Wi-Fi"],
            ["Breakfast", "Fresh breakfast every morning"],
            ["Parking", "Safe and convenient parking"],
            ["Restaurant", "Delicious dining options"],
            ["Room Service", "24/7 room service"],
            ["Reception", "24/7 guest assistance"],
          ].map(([title, description]) => (

            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-[#151515] p-7"
            >

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500 text-xl font-bold text-black">
                ✓
              </div>

              <h3 className="text-xl font-semibold">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                {description}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* GALLERY */}
      <section
        id="gallery"
        className="bg-[#111111] px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
              Our Gallery
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Experience GrandStay
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Explore our comfortable rooms, elegant interiors and premium
              hospitality in Tirupati.
            </p>

          </div>


          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                image:
                  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
                title: "Luxury Exterior",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
                title: "Premium Room",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
                title: "Deluxe Bedroom",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
                title: "Hotel Interior",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
                title: "Elegant Stay",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
                title: "Relaxing Space",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl"
              >

                <img
                  src={item.image}
                  alt={`${item.title} - GrandStay Hotel Tirupati`}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">

                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* OFFER */}
      <section className="px-6 pb-28">

        <div className="mx-auto max-w-7xl rounded-3xl bg-yellow-500 p-10 text-black md:p-16">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.3em]">
                Special Offer
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Weekend Escape
              </h2>

              <p className="mt-4 max-w-xl text-black/70">
                Enjoy a comfortable weekend stay at GrandStay Hotel.
                Get up to 15% OFF on selected rooms.
              </p>

            </div>

            <a
              href="#booking"
              className="rounded-full bg-black px-8 py-4 text-center font-semibold text-white"
            >
              Book This Offer
            </a>

          </div>

        </div>

      </section>


      {/* BOOKING */}
      <section
        id="booking"
        className="bg-[#111111] px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-yellow-500">
              Reservations
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Book Your Stay
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Send us your stay details and our team will contact you shortly.
            </p>

          </div>

          <BookingForm />

        </div>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/10 bg-[#0b0b0b] px-6 py-28"
      >

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-yellow-500">
              Plan Your Stay
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-6xl">
              Your comfortable stay
              <br />
              starts here.
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-gray-400">
              Book your room today and experience warm hospitality in Tirupati.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* CONTACT DETAILS */}
            <div className="rounded-3xl border border-white/10 bg-[#151515] p-8">

              <h3 className="text-2xl font-bold">
                Contact GrandStay
              </h3>

              <div className="mt-7 space-y-5 text-gray-300">

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>
                  <p className="mt-1">
                    Tirupati, Andhra Pradesh
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Phone
                  </p>
                  <p className="mt-1">
                    +91 98765 43210
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>
                  <p className="mt-1">
                    stay@grandstayhotel.com
                  </p>
                </div>

              </div>


              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="#booking"
                  className="rounded-full bg-yellow-500 px-7 py-3 font-semibold text-black"
                >
                  Book Your Stay
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-7 py-3 font-semibold hover:bg-white/10"
                >
                  WhatsApp Us
                </a>

              </div>

            </div>


            {/* GOOGLE MAP */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#151515]">

              <iframe
                src="https://www.google.com/maps?q=Tirupati,Andhra+Pradesh&output=embed"
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">

          <div>

            <h3 className="font-bold tracking-[0.2em]">
              GRAND<span className="text-yellow-500">
                STAY
              </span>
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Premium Hotel & Suites • Tirupati
            </p>

          </div>

          <p className="text-sm text-gray-600">
            © 2026 GrandStay Hotel. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}