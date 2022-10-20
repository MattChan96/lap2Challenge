const navLinks = document.querySelectorAll("a.navlink");
const main = document.querySelector("main");

window.addEventListener("hashchange", updateContent);

function updateNav(hash) {
  const updateLink = (link) => {
    link.classList =
      (link.textContent == "Add Secret" && hash.includes("new")) ||
      hash.includes(link.textContent)
        ? ["navlink", "current"]
        : ["navlink"];
  };
  navLinks.forEach(updateLink);
}

function updateMain(hash) {
  main.innerHTML = "";
  if (hash) {
    let [secrets, id] = hash.split("/");
    id ? loadModalFor(secrets, id) : loadIndexFor(secrets);
  } else {
    const header = document.createElement("h1");
    header.className = "title";
    header.textContent = "Welcome to the Secret Room";
    main.appendChild(header);
  }
}

async function loadIndexFor(secrets){
    modal.style.display = 'none';
    const data = await getAll(secrets);
    console.log(data)
    data.data.forEach(a => renderPost(a, secrets));
}

function renderPost(data, secrets){
    let link = document.createElement('a');
    let post = document.createElement('div');
    post.className = 'post';
    link.href = `#${secrets}/${data.id}` 
    post.textContent = data.name || data.title;
    link.appendChild(post);
    main.appendChild(link);
}

function updateContent(){
    let hash = window.location.hash.substring(1);
    updateNav(hash);
    updateMain(hash);
}
