let daftarNilai = [];

function tambahNilai() {
  let nama = document.getElementById("nama").value;
  let nilai = parseFloat(document.getElementById("nilai").value);

  if (nama && !isNaN(nilai)) {
    daftarNilai.push({ nama, nilai });
    alert("Data ditambahkan!");
    document.getElementById("nama").value = "";
    document.getElementById("nilai").value = "";
  } else {
    alert("Harap isi nama dan nilai dengan benar.");
  }
}

function tampilkanNilai() {
  let output = "<h3>Daftar Nilai:</h3><ul>";
  daftarNilai.forEach(mhs => {
    output += `<li>${mhs.nama}: ${mhs.nilai}</li>`;
  });
  output += "</ul>";
  document.getElementById("output").innerHTML = output;
}

function hitungRataRata() {
  if (daftarNilai.length === 0) return alert("Tidak ada data.");
  let total = daftarNilai.reduce((sum, mhs) => sum + mhs.nilai, 0);
  let rata = total / daftarNilai.length;
  document.getElementById("output").innerHTML = `<p>Rata-rata nilai: ${rata.toFixed(2)}</p>`;
}

function nilaiTertinggi() {
  if (daftarNilai.length === 0) return alert("Tidak ada data.");
  let tertinggi = Math.max(...daftarNilai.map(mhs => mhs.nilai));
  let namaTertinggi = daftarNilai.find(mhs => mhs.nilai === tertinggi).nama;
  document.getElementById("output").innerHTML = `<p>Nilai tertinggi: ${tertinggi} oleh ${namaTertinggi}</p>`;
}

function jumlahLulus() {
  let lulus = daftarNilai.filter(mhs => mhs.nilai >= 60).length;
  document.getElementById("output").innerHTML = `<p>Jumlah mahasiswa lulus: ${lulus}</p>`;
}

function sortirNilai() {
  daftarNilai.sort((a, b) => b.nilai - a.nilai);
  tampilkanNilai();
}
