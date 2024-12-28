const urlparam = new URLSearchParams(window.location.search);
const id = urlparam.get("id");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formspree");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const submitButton = document.getElementById("btn");

  form.addEventListener("submit", (event) => {
    // منع الإرسال الافتراضي للنموذج
    event.preventDefault();

    // التحقق من صحة البريد الإلكتروني
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!email) {
      alert("يرجى إدخال بريدك الإلكتروني.");
      return;
    }

    if (!message) {
      alert("يرجى إدخال رقم عملية التحويل (ID).");
      return;
    }

    // إرسال البيانات إذا كانت صحيحة
    fetch(form.action, {
      method: form.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        message: message,
        id: id,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("تم إرسال المعلومات بنجاح!");
          form.reset(); // إعادة تعيين النموذج
        } else {
          alert("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");
      });
  });
});
