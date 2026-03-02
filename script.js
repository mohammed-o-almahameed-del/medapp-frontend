document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  try {
    const response = await fetch("https://your-backend-url/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, age })
    });

    const result = await response.json();

    if (result.success) {
      alert("✅ تم تسجيل الدخول بنجاح! رقم المستخدم: " + result.userId);
      document.getElementById("uploadSection").style.display = "block";
    } else {
      alert("❌ فشل تسجيل الدخول: " + result.message);
    }
  } catch (error) {
    alert("⚠️ خطأ في الاتصال بالسيرفر");
    console.error(error);
  }
});

document.getElementById("uploadBtn").addEventListener("click", async function() {
  const file = document.getElementById("fileInput").files[0];
  if (!file) {
    alert("⚠️ الرجاء اختيار ملف أولاً");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("https://your-backend-url/api/upload", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      alert("✅ تم رفع الملف بنجاح: " + result.fileName);
    } else {
      alert("❌ فشل رفع الملف: " + result.message);
    }
  } catch (error) {
    alert("⚠️ خطأ في الاتصال بالسيرفر");
    console.error(error);
  }
});
