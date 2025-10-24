import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white font-sans">
      
      {/* ===== Hero Section ===== */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
          alt="Tim yang berkolaborasi" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="relative z-20 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Menciptakan Solusi Inovatif untuk Masa Depan
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Kami mengubah ide-ide brilian menjadi kenyataan melalui teknologi, kreativitas, dan kolaborasi.
          </p>
          <Link 
            to="/profile" 
            className="mt-8 inline-block bg-blue-600 text-white font-semibold py-3 px-10 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Tentang Kami
          </Link>
        </div>
      </section>

      {/* ===== Bagian Keunggulan (Features) ===== */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Keunggulan Kami</h2>
            <p className="text-gray-500 mt-2">Tiga pilar yang menjadi landasan kerja kami.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1: Inovasi */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Inovasi Terdepan</h3>
              <p className="mt-2 text-gray-600">Kami selalu mencari cara baru untuk memecahkan masalah dan menciptakan nilai.</p>
            </div>
            {/* Card 2: Kualitas */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-4">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Kualitas Terbaik</h3>
              <p className="mt-2 text-gray-600">Standar tinggi dalam setiap detail pekerjaan adalah komitmen kami.</p>
            </div>
            {/* Card 3: Kolaborasi */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Tim Kolaboratif</h3>
              <p className="mt-2 text-gray-600">Kami percaya hasil terbaik lahir dari kerja sama tim yang solid dan suportif.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Cuplikan Galeri ===== */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Momen Kami</h2>
          <p className="text-gray-500 mt-2">Sekilas dari kegiatan dan budaya kerja kami.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[50vh]">
          <div className="col-span-2 row-span-2 rounded-xl overflow-hidden"><img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" alt="Galeri 1"/></div>
          <div className="rounded-xl overflow-hidden"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" alt="Galeri 2"/></div>
          <div className="rounded-xl overflow-hidden"><img src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" alt="Galeri 3"/></div>
          <div className="col-span-2 rounded-xl overflow-hidden"><img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" alt="Galeri 4"/></div>
        </div>
        <div className="text-center mt-12">
           <Link to="/galeri" className="text-blue-600 font-semibold hover:underline">
              Lihat Semua Galeri &rarr;
            </Link>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="bg-gray-800">
        <div className="container mx-auto px-6 py-20 text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-white">Siap Memulai Proyek Anda?</h2>
           <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
             Mari berdiskusi bagaimana kami dapat membantu mewujudkan ide Anda. Hubungi kami untuk konsultasi tanpa biaya.
           </p>
           <Link 
            to="/contact" 
            className="mt-8 inline-block bg-white text-gray-900 font-semibold py-3 px-10 rounded-lg shadow-lg hover:bg-gray-200 transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>

    </div>
  );
}