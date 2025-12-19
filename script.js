document.addEventListener("DOMContentLoaded", function () {

  // ===== SAVE TO BACKEND =====
  const saveBtn = document.getElementById("saveBtn");
  saveBtn.addEventListener("click", saveWork);

 async function saveWork() {
  const name = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const description = document.getElementById("description").value;

  if (!name || !author || !description) {
    alert("Please fill all fields");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/add-work", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, author, description })
    });

    const result = await response.json();

    if (response.ok) {
      alert("Saved successfully 🎉");
    } else {
      alert(result.error);
    }
  } catch (err) {
    alert("Backend not reachable");
  }
}


  // ===== POPUP LOGIC (UNCHANGED) =====
  var plus = document.querySelector(".addbtn");
  var box = document.querySelector(".popinfo");
  var dim = document.querySelector(".pop");
  var btn1 = document.querySelector(".btn1");
  var btn2 = document.querySelector(".btn2");
  var a = document.querySelector(".A1");
  var b = document.querySelector(".A2");
  var c = document.querySelector(".A3");
  var d = document.querySelector(".top");
  var xb = document.querySelector(".xb");

  plus.addEventListener("click", function () {
    box.style.display = "block";
    dim.style.display = "block";
  });

  btn1.addEventListener("click", function (event) {
    event.preventDefault();

    var bookName = a.value;
    var author = b.value;
    var desc = c.value;

    var v1 = document.createElement("div");
    v1.className = "container";
    v1.innerHTML = `
      <h2>${bookName}</h2>
      <h5>${author}</h5>
      <p>${desc}</p>
      <button class="xb" type="button">REMOVE</button>
    `;

    d.append(v1);

    v1.querySelector(".xb").addEventListener("click", function () {
      v1.remove();
    });

    box.style.display = "none";
    dim.style.display = "none";
    a.value = "";
    b.value = "";
    c.value = "";
  });

  btn2.addEventListener("click", function () {
    box.style.display = "none";
    dim.style.display = "none";
  });

  dim.addEventListener("click", function () {
    box.style.display = "none";
    dim.style.display = "none";
  });

  xb.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });

});
