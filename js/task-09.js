function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  switchColorBtn: document.querySelector('.change-color'),
  bodyBg: document.querySelector('body'),
  colorName: document.querySelector('.color'),
};

const clickColorBtn = refs.switchColorBtn.addEventListener('click', () => {
  refs.bodyBg.style.backgroundColor = getRandomHexColor();
  refs.colorName.textContent = refs.bodyBg.style.backgroundColor;
});