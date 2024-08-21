const comingSoonItems = [
    { title: 'Mortal Kombat', date: '20 April', age: '18+', language1: 'Ru', language2: 'En', image: 'coming-1.png' },
    { title: 'Bliss', date: '20 April', age: '16+', language1: 'Ru', language2: '', image: 'coming-2.png' },
    { title: 'After the Rain', date: '20 April', age: '18+', language1: 'Ru', language2: 'En', image: 'coming-3.png' },
    { title: 'Up from Slavery', date: '20 April', age: '18+', language1: 'Ru', language2: 'En', image: 'coming-4.png' },
    { title: 'Game of Thrones', date: '20 April', age: '18+', language1: 'Ru', language2: 'En', image: 'coming-5.png' },
    { title: 'Bliss', date: '20 April', age: '12+', language1: 'Ru', language2: '', image: 'coming-6.png' },
    { title: 'After the Rain', date: '20 April', age: '12+', language1: 'Ru', language2: 'En', image: 'coming-7.png' },
    { title: 'Howls Moving Castle', date: '23 April', age: '12+', language1: 'Ru', language2: 'En', image: 'coming-8.png' },
    { title: 'Tom & Jerry', date: '24 April', age: '6+', language1: 'Ru', language2: 'En', image: 'coming-1.png' },
    { title: 'Bliss', date: '20 April', age: '16+', language1: 'Ru', language2: '', image: 'coming-2.png' },
    { title: 'After the Rain', date: '20 April', age: '18+', language1: 'Ru', language2: 'En', image: 'coming-3.png' },
    { title: 'Up from Slavery', date: '20 April', age: '18+', language1: 'Ru', language2: 'En', image: 'coming-4.png' },
    { title: 'Attack on Titan', date: '25 April', age: '16+', language1: 'Ru', language2: 'En', image: 'coming-5.png' },
    { title: 'News of the World', date: '25 April', age: '16+', language1: 'Tr', language2: 'En', image: 'coming-6.png' },
    { title: 'Oglan evi: 2', date: '23 April', age: '16+', language1: 'Tr', language2: 'Az', image: 'coming-7.png' },
    { title: 'Mortal Kombat', date: '20 April', age: '18+', language1: 'Ru', language2: 'En', image: 'coming-8.png' }
  ];
  
  function createComingSoonItem({ title, date, age, language1, language2, image }) {
    return `
      <div class="coming-soon-item">
        <div class="overlay"><img src="${image}" alt="${title}"></div>
        <div class="coming-soon">
          <h3>${title}</h3>
          <p>${date}</p>
          <p>${age}</p>
          <div class="language">
            <p>${language1}</p>
            <p>${language2}</p>
          <div/>
        </div>
      </div>
    `;
  }
  
  function renderComingSoon() {
    const container = document.getElementById('coming-soon-container');
    comingSoonItems.forEach(item => {
      container.innerHTML += createComingSoonItem(item);
    });
  }
  
  document.addEventListener('DOMContentLoaded', renderComingSoon);
  