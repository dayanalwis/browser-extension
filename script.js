const toggleBtn = document.getElementById("changeTheme");
const themeIcon = toggleBtn.querySelector("img");

toggleBtn.addEventListener("click",() => {
    document.body.classList.toggle("day");


    if (document.body.classList.contains("day")) {
        themeIcon.src = "./assets/images/icon-moon.svg";
        themeIcon.alt = "Switch to night theme"
    } else {
        themeIcon.src = "./assets/images/icon-sun.svg"; 
        themeIcon.alt = "Switch to night theme";
    }
});

document.querySelectorAll('.btn#remove').forEach(button => {
  button.addEventListener('click', ()=> {
    const box = button.closest('.box');
    if (box) box.remove();
  });
});

document.querySelectorAll('toggleSwitch').forEach(switchEl => {
    switchEl.addEventListener('change',() => {
        const box = switchEl.closest('.box');
        box.classList.toggle('active');
    });
});


document.querySelectorAll('.toggleSwitch').forEach(switchEl => {
  switchEl.addEventListener('change', () => {
    const box = switchEl.closest('.box');
    box.classList.toggle('active', switchEl.checked); 
  });
});

document.querySelectorAll('.toggleSwitch').forEach(switchEl => {
  const box = switchEl.closest('.box');


  switchEl.checked ? box.classList.add('active') : box.classList.add('inactive');

  switchEl.addEventListener('change', () => {
    if (switchEl.checked) {
      box.classList.add('active');
      box.classList.remove('inactive');
    } else {
      box.classList.remove('active');
      box.classList.add('inactive');
    }
  });
});


document.getElementById('all').addEventListener('click', () => {
  document.querySelectorAll('.box').forEach(box => {
    box.style.display = 'flex'; 
  });
});

document.getElementById('active').addEventListener('click', () => {
  document.querySelectorAll('.box').forEach(box => {
    box.style.display = box.classList.contains('active') ? 'flex':'none'; 
  });
});

document.getElementById('inactive').addEventListener('click', () => {
  document.querySelectorAll('.box').forEach(box => {
    box.style.display = box.classList.contains('inactive') ? 'flex':'none'; 
  });
});
