// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const sel = document.querySelector("select");
const KEY_LS = "country";

function handleChange(e) {
  const value = e.target.value;
  localStorage.setItem(KEY_LS, value);
}

function init() {
  sel.addEventListener("change", handleChange);
}

init();
