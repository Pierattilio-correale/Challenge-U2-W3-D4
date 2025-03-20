// TRqDc8JVUsAUANm3pY4t1DhcLKXD7HKnBloKCvnFa7weEUksG0zTMstM

// https://api.pexels.com/v1/search?query=mountains URL DELLA PAGINA MONTAINS

const buttonAPI = document.getElementById("buttonAPI");

buttonAPI.addEventListener("click", function () {
  const myURL = "https://api.pexels.com/v1/search?query=mountains";

  fetch(myURL, {
    headers: {
      Authorization: "TRqDc8JVUsAUANm3pY4t1DhcLKXD7HKnBloKCvnFa7weEUksG0zTMstM",
    },
  })
    .then((response) => {
      console.log("Response:", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Qualcosa non è andato a buon fine");
      }
    })
    .then((data) => {
      console.log("Dati ricevuti:", data);
      const myRow2 = document.getElementById("bestRow2");

      data.photos.forEach((card) => {
        myRow2.innerHTML += `<div class="col-md-4 esplosione">
              <div class="card shadow-sm mb-4">
                 <a href="./index2.html">
  <img
    src="${card.src.medium}"
    class="card-img-top bd-placeholder-img"
    alt="Descrizione immagine"
  />
</a>
                <div class="card-body">
                  <h5 class="card-title">${card.photographer}</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-sm"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-edit btn-hide btn-outline-secondary btn-sm"
                      >
                     Hide
                      </button>
                    </div>
                    <small class="text-muted">${card.id}</small>
                  </div>
                </div>
              </div>
            </div>`;
        const hideCard = document.querySelectorAll(".btn-hide");
        hideCard.forEach((btn, i) => {
          btn.addEventListener("click", function () {
            const myCard = document.querySelectorAll(".esplosione");
            myCard[i].classList.add("d-none");
          });
        });
      });
    })
    .catch((err) => {
      console.log("Errore: non è stato trovato il database", err);
    });
});
// funzione al click
// del secondo bottone
const buttonAPI2 = document.getElementById("buttonAPI2");

buttonAPI2.addEventListener("click", function () {
  const myURL2 = "https://api.pexels.com/v1/search?query=kittens";

  fetch(myURL2, {
    headers: {
      Authorization: "TRqDc8JVUsAUANm3pY4t1DhcLKXD7HKnBloKCvnFa7weEUksG0zTMstM",
    },
  })
    .then((response) => {
      console.log("Response:", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Qualcosa non è andato a buon fine");
      }
    })
    .then((data) => {
      console.log("Dati ricevuti:", data);
      const myRow = document.getElementById("bestRow");

      data.photos.forEach((card) => {
        myRow.innerHTML += `<div class="col-md-4">
              <div class="card shadow-sm esplosione mb-4"">
         <a href="./index2.html">
  <img
    src="${card.src.medium}"
    class="card-img-top bd-placeholder-img"
    alt="Descrizione immagine"
  />
</a>
                <div class="card-body">
                  <h5 class="card-title">${card.photographer}</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-sm"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-edit btn-hide btn-outline-secondary btn-sm"
                      >
                     Hide
                      </button>
                    </div>
                    <small class="text-muted">${card.id}</small>
                  </div>
                </div>
              </div>
            </div>`;

        const hideCard = document.querySelectorAll(".btn-hide");
        hideCard.forEach((btn, i) => {
          btn.addEventListener("click", function () {
            const myCard = document.querySelectorAll(".esplosione");
            myCard[i].classList.add("d-none");
          });
        });
      });
    })
    .catch((err) => {
      console.log("Errore: non è stato trovato il database", err);
    });
});

const form = document.getElementById("event-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
