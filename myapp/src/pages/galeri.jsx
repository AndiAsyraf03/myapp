import React from 'react';

// Data untuk item galeri. Menggunakan array seperti ini membuat kode lebih rapi
// dan mudah dikelola. Anda cukup mengubah isi array ini untuk mengganti gambar.
const galleryItems = [
  {
    id: 1,
    title: 'Diskusi Tim Kreatif',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Tim sedang berdiskusi di depan laptop',
  },
  {
    id: 2,
    title: 'Sesi Workshop',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Peserta workshop sedang berkolaborasi',
  },
  {
    id: 3,
    title: 'Presentasi Proyek',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    alt: 'Seorang profesional sedang melakukan presentasi',
  },
  {
    id: 4,
    title: 'Lingkungan Kerja Modern',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Suasana lingkungan kerja yang modern dan kolaboratif',
  },
  {
    id: 5,
    title: 'Perayaan Pencapaian',
    imageUrl: 'https://images.unsplash.com/photo-1529119361813-9a512417567c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Tim merayakan pencapaian bersama',
  },
  {
    id: 6,
    title: 'Inovasi Digital',
    imageUrl: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
    alt: 'Setup meja kerja dengan teknologi canggih',
  },
];

export default function Galeri() {
  return (
    <div className="bg-white">

      {/* ===== Header Section ===== */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">Galeri Kegiatan</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Momen-momen berharga yang terekam dalam perjalanan dan kolaborasi kami.
        </p>
      </section>

      {/* ===== Image Grid Section ===== */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Mapping data gambar ke komponen */}
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              {/* Gambar */}
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              {/* Overlay yang muncul saat hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 ease-in-out">
                <div className="flex items-end justify-start h-full p-6">
                  <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}