function inputData(event) {
    event.preventDefault();

    let note = document.getElementById("note").value;
    let label = document.getElementById("label").value;

    let data = {
        note: note,
        label: label
    };

    let dataArray = JSON.parse(localStorage.getItem("data")) || [];

    dataArray.push(data);

    localStorage.setItem("data", JSON.stringify(dataArray));

    document.getElementById("note").value = "";
    document.getElementById("label").value = "";

    tampilkanData();
}


// Menampilkan data
function tampilkanData() {

    let dataTampil = document.getElementById("data-tampil");

    let dataArray = JSON.parse(localStorage.getItem("data")) || [];

    dataTampil.innerHTML = "";

    dataArray.forEach(function(data, index) {

        dataTampil.innerHTML += `
            <li>
                <strong>${data.note}</strong>
                <br>
                Keterangan: ${data.label}
                <br>

                <button type="button" onclick="hapusData(${index})">
                    Hapus
                </button>
            </li>
        `;

    });
}


    // Hapus satu data
function hapusData(index) {

    let konfirmasi = confirm("Apakah kamu yakin ingin menghapus data ini?");

    if (konfirmasi) {

        let dataArray = JSON.parse(localStorage.getItem("data")) || [];

        dataArray.splice(index, 1);

        localStorage.setItem("data", JSON.stringify(dataArray));

        tampilkanData();

        alert("Data berhasil dihapus!");
    }
}


    // Hapus semua data
function hapusSemuaData() {

    let konfirmasi = confirm("Apakah kamu yakin ingin menghapus semua data?");

    if (konfirmasi) {

        localStorage.removeItem("data");

        tampilkanData();

        alert("Semua data berhasil dihapus!");
    }
}


// Tampilkan data saat halaman dibuka
tampilkanData();