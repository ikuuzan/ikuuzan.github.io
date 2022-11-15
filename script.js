const dataList = [];

function add(e) {
  let type = document.getElementById("type").value;
  let weight = document.getElementById("weight").value;

  dataList.push(setData(type, weight));

  showup();
}

function doEdit(id) {
  var newBerat = prompt("Edit Berat", dataList[id].berat);

  dataList[id] = setData(dataList[id].type, newBerat || dataList[id].berat);

  showup();
}

function doDelete(id) {
  dataList.splice(id, 1);
  showup();
}

function showup() {
  const list = document.getElementById("list");
  const totalFinal = document.getElementById("total_final");

  list.innerHTML = "";

  dataList.map((record, i) => {
    let actEdit = `<a href="#" onclick="doEdit(${i})">Edit</a>`;
    let actDelete = `<a href="#" onclick="doDelete(${i})">Delete</a>`;

    list.innerHTML += `<li>[${actDelete}|${actEdit}] ${record.type}(${record.weight}) ${record.total}</li>`;
  });

  totalFinal.innerHTML = dataList.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);
}

function setData(type, weight) {
  let total = 0;

  if (type == "pakaian") {
    total = weight * 12000;
  }

  if (type == "sprei") {
    total = weight * 50000;
  }

  if (type == "karpet") {
    total = weight * 100000;
  }

  return {
    type: type,
    weight: weight,
    total: total,
  };
}
