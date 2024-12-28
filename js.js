info = [
  { title: "40 كلمة مهمة باللغة الألمانية - مستوى A1", pictur: "0.png" },
  {
    title:
      "أهم 20 عبارة في الألمانية | استمع واحفظ العبارات الألمانية الهمة-تعلم الألمانية بسهولة ومن الصفر",
    pictur: "1.png",
  },
];

for (let i = 0; i < info.length; i++) {
  document.getElementById(`videos`).innerHTML += `
    <div id="${i}" class="video">
        <img src="./img/${info[i].pictur}">
        <h4>${info[i].title}</h4>
    </div>
    `;
}

for (let i = 0; i < info.length; i++) {
  document.getElementById(i).addEventListener("click", () => {
      window.location = `./index1.html?id=${i}`;
  });
}
