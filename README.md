Read Journey – Readme
📚 Read Journey

Read Journey, kullanıcıların kitap okuma alışkanlıklarını takip edebildiği, okuma ilerlemesini görselleştiren ve kişisel kütüphane yönetimi sağlayan modern bir React + Redux uygulamasıdır. Proje, Figma tasarımına birebir uygun olarak geliştirilmiştir.

🚀 Canlı Özellikler

🔐 Yetkilendirme (Authentication)

Register (/register) ve Login (/login) sayfaları

react-hook-form + Yup ile form doğrulama

Backend üzerinden JWT token alınması

Token ile otomatik yetkilendirme

Başarılı giriş/kayıt sonrası /recommended yönlendirmesi

🧭 Yetkili Kullanıcı Alanı

Ortak Main Layout

Header içinde:

Logo

User Navigation (/recommended, /library)

Kullanıcı bilgisi

Logout (backend + client-side temizleme)

Mobil ve tablet için burger menu

📖 Recommended Page (/recommended)

Dashboard paneli

Filtreleme formu (2 input + submit)

Statik bilgilendirme ve alıntı (quote)

Server-side pagination

Kitap kartları

Kitap detayı için modal

"Add to library" özelliği

📚 My Library Page (/library)

Kullanıcıya ait kitapların listelenmesi

Yeni kitap ekleme formu

Kitap silme

Kitap detay modalı

Okumaya başlama yönlendirmesi

📘 Reading Page (/reading)

Okuma başlatma / durdurma (Start / Stop)

Okunan sayfanın backend’e kaydı

Diary: Günlük okuma kayıtları (silme dahil)

Statistics: Grafik (Chart.js) ile ilerleme takibi

Kitap tamamlandığında otomatik modal

🧱 Kullanılan Teknolojiler

React + Vite

Redux Toolkit

Redux Persist

React Router DOM

Axios

react-hook-form

Yup

Chart.js + react-chartjs-2

📁 Proje Yapısı
src/
├── api/ # Redux store
├── components/ # Reusable UI components
├── pages/ # Route-based pages
├── redux/ # API servisleri (axios)
├── routes/ # Yönlendiriciler
├── styles/ # Global ve responsive stiller

🎨 Responsive Tasarım

Mobile: 320px – 375px+

Tablet: 768px+

Desktop: 1440px+

Figma tasarımına uygun responsive yapı uygulanmıştır.

⚙️ Kurulum & Çalıştırma
npm install
npm run dev

Backend: https://readjourney.b.goit.study/api-docs/

🧪 Validasyon & UX

Tüm formlar doğrulanmaktadır

Geçersiz girişlerde backend isteği gönderilmez

Backend hataları kullanıcıya popup notification olarak gösterilir

Modal pencereler:

Backdrop click

Close butonu

ESC tuşu

✅ Task Uyumluluğu

👤 Geliştirici Notu

Bu proje, verilen teknik şartname ve tasarım doğrultusunda bireysel olarak geliştirilmiştir. Kod yapısı okunabilirlik, sürdürülebilirlik ve ölçeklenebilirlik göz önünde bulundurularak oluşturulmuştur.

🙌 Teşekkürler

Bu projeyi incelemeye zaman ayırdığınız için teşekkür ederim.

💻 Developer by

Özgen Güler
