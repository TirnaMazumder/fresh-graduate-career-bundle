/* ===== EDIT THESE FOUR VALUES ===== */
const PAYMENT_URL   = "PAYMENT_URL_HERE";   // your payment gateway link, e.g. "https://pay.example.com/abc123"
const PRICE         = "PRICE_HERE";         // e.g. "₹499"
const DOWNLOAD_URL  = "DOWNLOAD_URL_HERE";  // full eBook link, e.g. "https://.../ebook.pdf" (or "ebook.pdf" if uploaded next to this page)
const CONTACT_EMAIL = "CONTACT_EMAIL_HERE"; // support email (thank-you page)
/* ================================== */
function wire(sel, url, name, newTab){
  document.querySelectorAll(sel).forEach(a => {
    if (url.includes("_HERE")) {            // placeholder not replaced yet
      a.href = "#";
      a.addEventListener("click", e => { e.preventDefault(); alert("Set " + name + " in script.js first (it still says " + url + ")."); });
      return;
    }
    a.href = url;
    if (newTab) { a.target = "_blank"; a.rel = "noopener"; }
  });
}
wire("[data-pay]", PAYMENT_URL, "PAYMENT_URL", false);
wire("[data-download]", DOWNLOAD_URL, "DOWNLOAD_URL", true);
document.querySelectorAll("[data-price]").forEach(e => e.textContent = PRICE);
document.querySelectorAll("[data-email]").forEach(a => { a.href = "mailto:" + CONTACT_EMAIL; a.textContent = CONTACT_EMAIL; });
