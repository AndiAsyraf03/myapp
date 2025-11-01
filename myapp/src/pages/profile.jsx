export default function Profile() {
  return (
  <div className="bg-gray-50 font-sans antialiased">
      
      {/* ===== Hero Section ===== */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Teks */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Profil <span className="text-blue-600">MyWeb</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Kami adalah institusi terdepan yang berdedikasi untuk mendorong inovasi dan memberikan solusi kreatif di era digital. Dengan fondasi yang kuat pada keunggulan dan integritas, kami berkomitmen untuk menciptakan dampak positif bagi masyarakat.
            </p>
            <a href="#sejarah" className="mt-8 inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
              Selengkapnya
            </a>
          </div>

          {/* Kolom Gambar */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" 
              alt="Tim Profesional Bekerja" 
              className="rounded-xl shadow-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== Visi & Misi Section ===== */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Visi & Misi Kami</h2>
            <p className="text-gray-500 mt-2">Panduan yang mengarahkan setiap langkah kami.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Visi */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                {/* <FiEye className="text-3xl text-blue-500 mr-4" /> */}
                <span className="text-3xl mr-4">👁️</span>
                <h3 className="text-2xl font-semibold text-gray-900">Visi</h3>
              </div>
              <p className="text-gray-600">
                Menjadi pelopor global dalam inovasi teknologi yang memberdayakan individu dan organisasi untuk mencapai potensi maksimal mereka, menciptakan masa depan yang lebih cerdas dan terhubung.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                {/* <FiTarget className="text-3xl text-blue-500 mr-4" /> */}
                <span className="text-3xl mr-4">🎯</span>
                <h3 className="text-2xl font-semibold text-gray-900">Misi</h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Menyediakan produk dan layanan berkualitas tertinggi.</li>
                <li>Membangun budaya kerja yang kolaboratif dan inklusif.</li>
                <li>Berinvestasi dalam riset dan pengembangan berkelanjutan.</li>
                <li>Menjalankan bisnis dengan etika dan tanggung jawab sosial.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* ===== Sejarah Singkat Section ===== */}
      <section id="sejarah" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Perjalanan Kami</h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Didirikan pada tahun 2025, perjalanan kami dimulai dari sebuah ide sederhana: untuk membuat perbedaan. Berawal dari tim kecil yang penuh semangat, kami telah bertumbuh menjadi institusi yang diakui atas kontribusinya dalam industri. Setiap pencapaian adalah bukti dari kerja keras, dedikasi, dan komitmen kami terhadap visi yang kami emban sejak hari pertama.
          </p>
        </div>
      </section>
    </div>
  );
}