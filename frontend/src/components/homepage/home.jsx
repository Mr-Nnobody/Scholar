import React from "react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Scholar</h1>
          <nav>
            <a
              href="#features"
              className="text-gray-600 hover:text-blue-600 mx-3"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-blue-600 mx-3"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 mx-3"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section
        className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-24 overflow-hidden h-[80vh]"
        style={{
          backgroundImage: `url('https://dreambridgehub.com/wp-content/uploads/2025/11/Whisk_345cf176cf4e409a2f84dd1f6e42ab98dr-1024x559.jpeg')`, // African‑looking student in graduation cap
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get Into Your Dream University Abroad
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Scholar helps African students and others apply to universities in
            the USA, UK, and Europe with confidence—by guiding you through
            programs, admissions, and funding.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/register"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-medium shadow-lg"
            >
              Get Started for Free
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="py-16 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Students Love Scholar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`, // student in library / studying
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(255,255,255,0.9)",
              }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                Targeted University Advice
              </h3>
              <p className="text-gray-600">
                Ask Scholar which universities in the USA, UK, or Europe match
                your grades, budget, and field of study, and get tailored
                recommendations.
              </p>
            </div>

            <div
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`, // student working on laptop / applying
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(255,255,255,0.9)",
              }}
            >
              <h3 className="text-xl font-semibold mb-3 text-green-800">
                Scholarships for International Students
              </h3>
              <p className="text-gray-600">
                Discover scholarships and funding options specifically for
                African and international students applying to universities
                abroad.
              </p>
            </div>

            <div
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`, // student with books / guidance
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(255,255,255,0.9)",
              }}
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-800">
                Prepare Strong Applications
              </h3>
              <p className="text-gray-600">
                Save your chats with Scholar to reuse answers for SOPs, CVs, and
                application forms, and track which universities you’re
                targeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How Scholar Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Tell Us About You</h3>
              <p className="text-gray-600 text-sm">
                Share your country, current level of study, and where you want
                to study (USA, UK, Europe).
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Ask About Universities</h3>
              <p className="text-gray-600 text-sm">
                Get guidance on which universities fit your profile, entry
                requirements, and deadlines.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">
                Find Programs & Scholarships
              </h3>
              <p className="text-gray-600 text-sm">
                Browse programs and scholarships abroad, then save your top
                choices.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Submit Strong Applications</h3>
              <p className="text-gray-600 text-sm">
                Use Scholar’s advice to prepare documents, meet deadlines, and
                increase your chances of getting into your desired university.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-blue-600 text-white py-16 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1587656656108-992f39691c58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`, // student working / applying
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Study Abroad?</h2>
          <p className="text-blue-100 mb-8">
            Join African and international students using Scholar to plan their
            journey to universities in the USA, UK, and Europe.
          </p>
          <a
            href="/register"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-semibold shadow-lg"
          >
            Start for Free
          </a>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">Scholar</h3>
          <p className="text-gray-300 mb-4">
            AI‑powered guidance for African and international students choosing
            universities abroad.
          </p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Scholar App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
