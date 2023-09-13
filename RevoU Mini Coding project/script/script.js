function calculate() {
    const sisi = parseFloat(document.getElementById("sisi").value);
    
    const luas = sisi * sisi;
    const keliling = 4 * sisi;

    document.getElementById("luas").textContent = luas;
    document.getElementById("keliling").textContent = keliling;
}
