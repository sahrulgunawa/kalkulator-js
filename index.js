const readline = require("readline-sync");

const angkaPertama = parseFloat(readline.question("Masukkan Angka Pertama: "));
const operator = readline.question("Masukkan Operator (+, -, *, /): ");
const angkaKedua = parseFloat(readline.question("Masukkan Angka Kedua: "));

if (isNaN(angkaPertama) || isNaN(angkaKedua)) {
    console.log("Inputan tidak sesuai !!!!!!");
} else {
    const hasil = execute(angkaPertama, angkaKedua, operator);
    if (hasil !== undefined) { // Pastikan hasil tidak undefined sebelum mencetak
        console.log(`Hasilnya adalah ${hasil}`);
    }
}

function execute(angkaPertama, angkaKedua, operator) {
    switch (operator) {
        case "+":
            return angkaPertama + angkaKedua;
        case "-":
            return angkaPertama - angkaKedua;
        case "*":
            return angkaPertama * angkaKedua;
        case "/":
            if (angkaKedua === 0) {
                console.log("Error: Tidak bisa dibagi nol");
                return; // Menghentikan fungsi jika ada error
            }
            return angkaPertama / angkaKedua;
        case "%":
            return angkaPertama % angkaKedua;
        default:
            console.log("Input tidak valid");
            return; // Menghentikan fungsi jika operator tidak valid
    }
}
