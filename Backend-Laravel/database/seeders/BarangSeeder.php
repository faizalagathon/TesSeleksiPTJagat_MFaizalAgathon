<?php

namespace Database\Seeders;

use App\Models\Barang;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BarangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Barang::create([
            'nama_barang' => 'Susu Etawalin',
            'harga_barang' => '120000',
            'diskon_barang' => '100000',
            'gambar_barang' => 'etawalin.png',
        ]);
        Barang::create([
            'nama_barang' => 'Generos',
            'harga_barang' => '450000',
            'diskon_barang' => '400000',
            'gambar_barang' => 'generos.png',
        ]);
        Barang::create([
            'nama_barang' => 'Generos',
            'harga_barang' => '450000',
            'diskon_barang' => '400000',
            'gambar_barang' => 'generos.png',
        ]);
        Barang::create([
            'nama_barang' => 'Susu Etawalin',
            'harga_barang' => '120000',
            'diskon_barang' => '100000',
            'gambar_barang' => 'etawalin.png',
        ]);
        Barang::create([
            'nama_barang' => 'Generos',
            'harga_barang' => '450000',
            'diskon_barang' => '400000',
            'gambar_barang' => 'generos.png',
        ]);
        Barang::create([
            'nama_barang' => 'Generos',
            'harga_barang' => '450000',
            'diskon_barang' => '400000',
            'gambar_barang' => 'generos.png',
        ]);
        Barang::create([
            'nama_barang' => 'Susu Etawalin',
            'harga_barang' => '120000',
            'diskon_barang' => '100000',
            'gambar_barang' => 'etawalin.png',
        ]);
        Barang::create([
            'nama_barang' => 'Generos',
            'harga_barang' => '450000',
            'diskon_barang' => '400000',
            'gambar_barang' => 'generos.png',
        ]);
        Barang::create([
            'nama_barang' => 'Generos',
            'harga_barang' => '450000',
            'diskon_barang' => '400000',
            'gambar_barang' => 'generos.png',
        ]);
    }
}
