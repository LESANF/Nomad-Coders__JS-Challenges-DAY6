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
  const current = localStorage.getItem(KEY_LS);

  if (current !== null) {
    const opSel = document.querySelector(`select option[value=${current}]`);
    opSel.setAttribute("selected", "");
  }
}

sel.addEventListener("change", handleChange);

init();
