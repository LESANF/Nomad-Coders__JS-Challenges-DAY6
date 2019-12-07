// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const sel = document.querySelector("select");
const KEY_LS = "country";

function handleChange(e) {
  const value = e.target.value;
  localStorage.setItem(KEY_LS, value);
}

function saveOpsel() {
  const current = localStorage.getItem(KEY_LS);

  if (current !== null) {
    const opSel = document.querySelector(`select option[value=${current}]`);
    opSel.setAttribute("selected", "");
  }
}

function init() {
  sel.addEventListener("change", handleChange);
  saveOpsel();
}

init();
