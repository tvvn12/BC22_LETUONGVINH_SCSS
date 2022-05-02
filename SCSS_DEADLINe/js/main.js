let ser = new Service();

function getData() {
  ser
    .fetchData()
    .then((data) => {
      renderHMTL(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
getData();

function renderHMTL(data) {
  //  let data = data.filter((e) => e.school == "UIT");
  let con = "";

  for (let i = 0; i < data.length; i++) {
    if (data[i].loaiND == "GV") {
      con += `
        <div style="padding-bottom: 31px;" class="text-center col-12 col-md-3">
        <div class="card sapce">
        <img
          class="card-img-top"
          src="./asset/img/${data[i].hinhAnh}"
          alt="Card image"
        />
        <div class="card-body">
        <p class="render">${data[i].ngonNgu}</p>
          <h4 class="card-title">${data[i].hoTen}</h4>
          <p class="card-text">${data[i].moTa}</p>
          
          </div>
        </div>
      </div>`;
    }
  }

  document.getElementById("proLists").innerHTML = con;
}
