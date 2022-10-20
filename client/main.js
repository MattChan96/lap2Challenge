// const data = document.getElementById("form");
// const publish = document.getElementById("publish");

// for (const el of data.children) {
//   if (el.classList.contains("empty")) {
//     el.textContent = el.dataset.placeholder;
//   }
// }

// publish.addEventListener('click', postSecret)

// REQUESTS

async function getAll(secrets) {
  try {
    const response = await fetch(`http://localhost:3000/${secrets}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function getById(secrets, id) {
  try {
    const response = await fetch(`http://localhost:3000/${secrets}/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function postSecret(e) {
  e.preventDefault();

  // const inputData = []

  // for (const el of data.children) {
  //   inputData.push([el.dataset.label, el.textContent])
  // }

  // console.log("Post secret: ", inputData)

  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };

    const response = await fetch("http://localhost:3000/secrets", options);
    const { id, err } = await response.json();
    if (err) {
      throw Error(err);
    } else {
      window.location.hash = `#secrets/${id}`;
    }
  } catch (err) {
    console.warn("Frontend error: ", err);
  }
}
