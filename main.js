const BOT_TOKEN = '8328125073:AAEWoSW-yjqgPLq4uLPEKGyemwa2lr47x6I';
const CHAT_ID   = '-4935605017';

// Elementlar
const openModal = document.getElementById('openModal');
const formModal = document.getElementById('makon-modal');
const closeModal = document.getElementById('closeModal');
const makonForm = document.getElementById('makonForm');
const successModal = document.getElementById('successModal');

// Modalni ochish
openModal.addEventListener('click', () => {
  formModal.style.display = 'flex';
});

// Modalni yopish
closeModal.addEventListener('click', () => {
  formModal.style.display = 'none';
});

// Formani yuborish
makonForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!name || !phone) {
    alert("Iltimos, barcha maydonlarni to‘ldiring!");
    return;
  }

  const message = `📝 Yangi so‘rov:\n👤 Ism: ${name}\n📞 Telefon: ${phone}\n🌐 Sayt: 2 oq sayt`;

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });

    formModal.style.display = 'none';
    successModal.style.display = 'flex';
    makonForm.reset();
  } catch (error) {
    alert("Xatolik yuz berdi, qayta urinib ko‘ring!");
    console.error(error);
  }
});
 










// Modalni ochish
openModal.addEventListener('click', () => {
  formModal.classList.add('show');  // 'show' klassini qo'shish
});

// Modalni yopish
closeModal.addEventListener('click', () => {
  formModal.classList.remove('show'); // 'show' klassini olib tashlash
});
