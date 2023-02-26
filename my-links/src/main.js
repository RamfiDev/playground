const links = document.querySelector('#links');

const createCategory = (name, links) => {
  return `
    <div id="link">
      <h3>${name}</h3>

      <ul>
        ${links}
      </ul>
    </div>
  `;
};

const createLink = (title, link) => {
  return `
    <li>
      <a href="${link}" target="_blank">
        ${title} <img src="./assets/icons/external-link.svg"/>
      </a>
      <p>${link}</p>
    </li>
  `;
};

links.innerHTML =
  createCategory(
    'Links úteis',
    createLink('Tailwind Color Palette', 'https://tailwindcolor.com/') +
      createLink('Lucide Icons', 'https://lucide.dev/') +
      createLink('Phosphor Icons', 'https://phosphoricons.com/') +
      createLink('Can I Use', 'https://caniuse.com/') +
      createLink('CSS-Tricks', 'https://css-tricks.com/') +
      createLink('TabNews', 'https://www.tabnews.com.br/')
  ) +
  createCategory(
    'Outros links',
    createLink('daily.dev', 'https://www.daily.dev/')
  );
