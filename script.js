// # Rules Rumus
// Rumus Ideal Pria : (Tinggi Badan - 100) - (Tinggi Badan - 100) * 10%
// Rumus Ideal Wanita : (Tinggi Badan - 100) - (Tinggi Badan - 100) * 15%

// class Ideal
class Ideal {
  constructor(weight, height) {
    this.weight = weight;
    this.height = height;
  }
  rumus() {
    const gender = document.querySelectorAll(".gender input");
    if (gender[0].checked == true) {
      let result = this.height - 100 - ((this.height - 100) * 10) / 100;
      // console.info(gender[0].value);
      return result;
    } else {
      let result = this.height - 100 - ((this.height - 100) * 15) / 100;
      // console.info(gender[1].value);
      return result;
    }
  }
}

const beratBadan = document.getElementById("weight");
const tinggiBadan = document.getElementById("height");
const headerResult = document.querySelector("header .nama");
const weightReview = document.querySelectorAll(".card .kg");
const resultReview = document.querySelector("section.result");
const reviewDetail = document.querySelector(".result figcaption");
const modulo = document.querySelector(".modulo h3");
const inputName = document.getElementById("name");
const resultAnimation = document.querySelector(".result .animation");
const saran = document.querySelector("details p");

const start = document.getElementById("start");
start.addEventListener("click", () => {
  resultReview.classList.toggle("modalBox");
  setTimeout(() => {
    resultAnimation.classList.add("load");
  }, 1000);
  setTimeout(() => {
    resultAnimation.classList.remove("load");
    reviewDetail.classList.add("modalBox");
  }, 5000);
  const bmi = new Ideal(beratBadan.value, tinggiBadan.value);
  headerResult.innerHTML = inputName.value;
  weightReview[0].innerHTML = parseInt(bmi.weight);
  weightReview[1].innerHTML = bmi.rumus();
  let selisih = parseInt(bmi.rumus()) - parseInt(bmi.weight);
  if (bmi.weight == bmi.rumus()) {
    modulo.innerHTML = `Berat Badan Kamu Proporsional`;
    saran.innerHTML =
      "Berat dan tinggi kamu sudah proporsional. Jaga terus kesehatanmu dengan mngkonsumsi makanan sehat, air putih, protein serta olah raga yang teratur. Bagikan tips sehatmu kepada orang lain ya.";
  } else if (bmi.weight < bmi.rumus()) {
    modulo.innerHTML = `Berat Badan Kamu Kurang ${selisih}Kg (Tidak Proporsional)`;
    saran.innerHTML =
      "Berat badanmu jika dibandingkan dengan tinggi badan, masih kurang proporsional. Mulai perbanyak makanan bernutrisi dan berprotein untuk meningkatkan masa otot. Imbangi dengan olah raga yang teratur dan istirahat yang cukup.";
  } else {
    modulo.innerHTML = `Berat Badan Kamu Melebihi ${bmi.rumus()}Kg (Tidak Proporsional Segera Diet)`;
    saran.innerHTML =
      "Berat badanmu jika dibandingkan dengan tinggi badan, melebihi proporsional. Mulai lakukan diet untuk mengembalikan berat sesuai dengan proporsional tubuh kita. Semakin berat maka tulang dan otot akan berkurang fungsinya. Kontrol makanan dengan perbanyak serat dan protein, kurangi makanan karbohidrat berlebih, imbangi dengan rajin berpuasa dan olah raga dan istirahat yang cukup. Kamu bisa memulai dengan sarapan yang ringan, ganti makan siang porsi seimbang (4 Sehat 5 Sempurna), dan ganti makan malam dengan serat berupa buah atau sayur.";
  }
  //   console.info(bmi.rumus());
});

const closeHeader = document.querySelector("header button");
closeHeader.addEventListener("click", () => {
  resultReview.classList.toggle("modalBox");
  window.location.reload();
});
