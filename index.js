// pola perulangan 1
for (let a = 0; a < 5; a++) {
  let hasil = "";
  for (let b = 0; b < 5; b++) {
    hasil += "*";
  }
  console.log(hasil);
}

console.log("");

// pola perulangan 2
for (let a = 0; a < 5; a++) {
  let hasil = "";
  for (let b = 0; b <= a; b++) {
    hasil += "*";
  }
  console.log(hasil);
}
