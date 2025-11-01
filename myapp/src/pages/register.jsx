import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Kolom Kiri: Gambar */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D&auto=format&fit=crop&w=1770&q=80"
            alt="Registrasi"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Kolom Kanan: Formulir */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center md:text-left">
            Daftar Member Baru
          </h2>
          <p className="mt-4 text-gray-600 text-center md:text-left">
            Selamat datang! Silakan isi data diri Anda.
          </p>

          <form className="mt-8 space-y-6" action="#" method="POST">
            {/* Nama */}
            <div>
              <label
                htmlFor="fnama"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                id="fnama"
                name="fnama"
                type="text"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="First Name"
              />
            </div>

            <div>
              <label
                htmlFor="lnama"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                id="lnama"
                name="lnama"
                type="text"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Last Name"
              />
            </div>

            {/* tgl lahir */}
            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                Date Of Birth
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="MM/DD/YYYY"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="anda@email.com"
              />
            </div>

            {/* No. HP */}
            <div>
              <label
                htmlFor="no_hp"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                id="no_hp"
                name="no_hp"
                type="tel"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="081234567890"
              />
            </div>

            {/* Tombol Submit */}
            <div className="flex items-center space-x-4">
              {/* Tombol Reset (Aksi Sekunder) */}
              <button
                type="reset"
                className="w-1/2 flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-gray-700 font-semibold bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
              >
                Reset
              </button>

              {/* Tombol Submit (Aksi Primer) - Diganti dari "Daftar Sekarang" */}
              <button
                type="submit"
                className="w-1/2 flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-white font-semibold bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
