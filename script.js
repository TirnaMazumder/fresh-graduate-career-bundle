const PAYMENT_URL = 'PAYMENT_URL_HERE';
const DOWNLOAD_URL = 'DOWNLOAD_URL_HERE';

function openPaymentLink() {
  if (PAYMENT_URL === 'PAYMENT_URL_HERE') {
    alert('Payment URL not configured yet. Replace PAYMENT_URL_HERE in script.js with your real checkout URL.');
    return;
  }

  window.location.href = PAYMENT_URL;
}

function openDownloadLink() {
  if (DOWNLOAD_URL === 'DOWNLOAD_URL_HERE') {
    alert('Download URL not configured yet. Replace DOWNLOAD_URL_HERE in script.js with your real file URL.');
    return;
  }

  window.location.href = DOWNLOAD_URL;
}

document.addEventListener('DOMContentLoaded', function () {
  const paymentButtons = document.querySelectorAll('[data-payment-link]');
  paymentButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      openPaymentLink();
    });
  });

  const downloadButton = document.querySelector('a[href="DOWNLOAD_URL_HERE"]');
  if (downloadButton) {
    downloadButton.addEventListener('click', function (event) {
      event.preventDefault();
      openDownloadLink();
    });
  }

  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function (question) {
    question.addEventListener('click', function () {
      const answer = question.nextElementSibling;
      const isOpen = question.classList.contains('active');

      faqQuestions.forEach(function (otherQuestion) {
        otherQuestion.classList.remove('active');
        const otherAnswer = otherQuestion.nextElementSibling;
        if (otherAnswer) {
          otherAnswer.classList.remove('active');
        }
      });

      if (!isOpen) {
        question.classList.add('active');
        if (answer) {
          answer.classList.add('active');
        }
      }
    });
  });
});
