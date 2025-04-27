var checkbox = document.querySelector('input[name=theme]');

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.setAttribute("data-theme", "dark");
  checkbox.checked = true;
} else {
  document.documentElement.setAttribute("data-theme", "light");
  checkbox.checked = false;
}

checkbox.addEventListener('change', function() {
    if(this.checked) {
        document.documentElement.classList.add("transition");
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.theme = "dark";
    } else {
        document.documentElement.classList.add("transition");
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.theme = "light";
    }
})