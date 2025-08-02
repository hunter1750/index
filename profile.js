/**
* light and dark mode
 */

const /** {NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;
let /** {Boolean | string} */ isDark = window.matchMedia("(prefers-color-scheme:dark)").
    matches;

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
}
else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

const changeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" :
        "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);

}

$themeBtn.addEventListener("click", changeTheme);


/**
 * TAB
 */

const /** {Nodelist} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /** {NodeElement} */[lastActiveTab] = document.querySelectorAll("[data-tab-content]");
let /** {NodeElement} */[lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach(item => {
    item.addEventListener("click", function () {

        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        const /** {NodeElement} */ $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
        $tabContent.classList.add("active");
        this.classList.add("active");

        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;

    });
});




// // ===== Theme Toggle =====
// const $themeBtn = document.querySelector("[data-theme-btn]");
// const $HTML = document.documentElement;
// const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// if (sessionStorage.getItem("theme")) {
//   $HTML.dataset.theme = sessionStorage.getItem("theme");
// } else {
//   $HTML.dataset.theme = isDark ? "dark" : "light";
//   sessionStorage.setItem("theme", $HTML.dataset.theme);
// }

// $themeBtn.addEventListener("click", () => {
//   const newTheme = $HTML.dataset.theme === "light" ? "dark" : "light";
//   $HTML.dataset.theme = newTheme;
//   sessionStorage.setItem("theme", newTheme);
// });

// // ===== Tabs =====
// const tabButtons = document.querySelectorAll("[data-tab-btn]");
// const tabContents = document.querySelectorAll("[data-tab-content]");

// tabButtons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     // Remove active from all
//     tabButtons.forEach(b => b.classList.remove("active"));
//     tabContents.forEach(c => c.classList.remove("active"));

//     // Add active to current
//     btn.classList.add("active");
//     const tabName = btn.getAttribute("data-tab-btn");
//     const content = document.querySelector('[data-tab-content="${tabName}"]');
//     content.classList.add("active");
//   });
// });