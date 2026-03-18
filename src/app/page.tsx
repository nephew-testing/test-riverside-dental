import { siteConfig } from "@/lib/config";

export default function Home() {
  return (
    <main>
      <section className="bg-gray-50 px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight">Anxiety-Free Dental Care You'll Actually Love</h1>
          <p className="mt-4 text-xl text-gray-600">Experience the difference of gentle, modern dentistry with Dr. Sarah Chen. Our state-of-the-art technology and compassionate approach make every visit comfortable and stress-free.</p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="/contact" className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700">Book an Appointment</a>
            <a href="/services" className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium hover:bg-gray-50">Our Services</a>
          </div>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">What We Offer</h2>
          <p className="mt-2 text-center text-gray-600">Comprehensive dental services using the latest technology for your entire family.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border p-6"><h3 className="text-lg font-semibold">Preventive Care</h3><p className="mt-2 text-gray-600">Regular cleanings, exams, and digital X-rays to keep your smile healthy and catch issues early.</p></div>
            <div className="rounded-xl border p-6"><h3 className="text-lg font-semibold">Same-Day Crowns</h3><p className="mt-2 text-gray-600">Advanced CEREC technology allows us to create and place custom crowns in a single visit.</p></div>
            <div className="rounded-xl border p-6"><h3 className="text-lg font-semibold">Family Dentistry</h3><p className="mt-2 text-gray-600">Gentle dental care for patients of all ages, from children's first visits to senior oral health.</p></div>
            <div className="rounded-xl border p-6"><h3 className="text-lg font-semibold">Restorative Dentistry</h3><p className="mt-2 text-gray-600">Fillings, bridges, and implants to restore your smile's function and natural beauty.</p></div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="mt-4 text-gray-600">At Riverside Dental Care, we believe dental visits should be comfortable, not stressful. Dr. Sarah Chen has been proudly serving Portland families for over 12 years, building lasting relationships through gentle care and genuine compassion. Our modern practice combines cutting-edge technology with a warm, welcoming atmosphere that puts even the most anxious patients at ease. We're committed to making quality dental care accessible and comfortable for every member of your family. From routine cleanings to advanced restorative procedures, we use the latest innovations like digital X-rays and same-day crown technology to provide efficient, precise treatment. Our goal is simple: to help you achieve optimal oral health while feeling relaxed and confident in our care.</p>
        </div>
      </section>
      <section className="bg-black px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Ready for a Stress-Free Dental Experience?</h2>
        <p className="mt-2 text-gray-300">Schedule your appointment today and discover why Portland families trust Dr. Chen for their dental care.</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="tel:(503) 555-8900" className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-100">Call (503) 555-8900</a>
          <a href="/contact" className="rounded-lg border border-white px-6 py-3 text-sm font-medium text-white hover:bg-white/10">Contact Us</a>
        </div>
      </section>
    </main>
  );
}
