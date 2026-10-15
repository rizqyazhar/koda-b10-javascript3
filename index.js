// pola perulangan 1

/*

*****
*****
*****
*****
*****

*/

for (let a = 0; a < 5; a++) {
  let hasil = "";
  for (let b = 0; b < 5; b++) {
    hasil += "*";
  }
  console.log(hasil);
}

console.log("");

// pola perulangan 2

/*

*
**
***
****
*****

*/

for (let a = 0; a < 5; a++) {
  let hasil = "";
  for (let b = 0; b <= a; b++) {
    hasil += "*";
  }
  console.log(hasil);
}

console.log("");

// pola perulangan 3

/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

for (let a = 0; a < 5; a++) {
  let hasil = "";
  for (let b = 4; b >= a; b--) {
    hasil += " ";
  }

  for (let c = 0; c < a * 2 + 1; c++) {
    if (c % 2 == 0) {
      hasil += "*";
    } else {
      hasil += " ";
    }
  }

  console.log(hasil);
}

console.log("");

// pola perulangan 4

/*

*****
*   * 
*   * 
*   * 
*****

*/

for (let a = 0; a < 5; a++) {
  let hasil = "";
  for (let b = 0; b < 5; b++) {
    const kondisi = a > 0 && a < 4 && b > 0 && b < 4;
    if (kondisi) {
      hasil += " ";
    } else {
      hasil += "*";
    }
  }

  console.log(hasil);
}
