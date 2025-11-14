(function(){
  // Sample data for each group. Replace or extend with real data as needed.
  const data = {
    dogs: [
      { id: 1, name: 'Milo', breed: 'Beagle', age: '2 years', emoji: '🐶' },
      { id: 2, name: 'Roxy', breed: 'Pug', age: '3 years', emoji: '🐶' },
      { id: 3, name: 'Zeus', breed: 'Labrador', age: '1 year', emoji: '🐶' },
      { id: 4, name: 'Milo', breed: 'Beagle', age: '2 years', emoji: '🐶' },
      { id: 5, name: 'Roxy', breed: 'Pug', age: '3 years', emoji: '🐶' },
      { id: 6, name: 'Zeus', breed: 'Labrador', age: '1 year', emoji: '🐶' },
      { id: 7, name: 'Milo', breed: 'Beagle', age: '2 years', emoji: '🐶' },
      { id: 8, name: 'Roxy', breed: 'Pug', age: '3 years', emoji: '🐶' },
      { id: 9, name: 'Zeus', breed: 'Labrador', age: '1 year', emoji: '🐶' }

    ],
    cats: [
      { id: 11, name: 'Luna', breed: 'Siamese', age: '1 year', emoji: '🐱' },
      { id: 12, name: 'Simba', breed: 'Maine Coon', age: '4 years', emoji: '🐱' },
      { id: 13, name: 'Nala', breed: 'Domestic Shorthair', age: '6 months', emoji: '🐱' },
      { id: 14, name: 'Luna', breed: 'Siamese', age: '1 year', emoji: '🐱' },
      { id: 15, name: 'Simba', breed: 'Maine Coon', age: '4 years', emoji: '🐱' },
      { id: 16, name: 'Nala', breed: 'Domestic Shorthair', age: '6 months', emoji: '🐱' },
      { id: 17, name: 'Luna', breed: 'Siamese', age: '1 year', emoji: '🐱' },
      { id: 18, name: 'Simba', breed: 'Maine Coon', age: '4 years', emoji: '🐱' },
      { id: 19, name: 'Nala', breed: 'Domestic Shorthair', age: '6 months', emoji: '🐱' }
    ],
    rabbits: [
      { id: 21, name: 'Thumper', breed: 'Dutch', age: '9 months', emoji: '🐰' },
      { id: 22, name: 'BunBun', breed: 'Lionhead', age: '2 years', emoji: '🐰' },
      { id: 23, name: 'Thumper', breed: 'Dutch', age: '9 months', emoji: '🐰' },
      { id: 24, name: 'BunBun', breed: 'Lionhead', age: '2 years', emoji: '🐰' },
      { id: 25, name: 'Thumper', breed: 'Dutch', age: '9 months', emoji: '🐰' },
      { id: 26, name: 'BunBun', breed: 'Lionhead', age: '2 years', emoji: '🐰' },
      { id: 27, name: 'Thumper', breed: 'Dutch', age: '9 months', emoji: '🐰' },
      { id: 28, name: 'BunBun', breed: 'Lionhead', age: '2 years', emoji: '🐰' },
      { id: 29, name: 'BunBun', breed: 'Lionhead', age: '2 years', emoji: '🐰' }
    ]
  };

  const animalsEl = document.getElementById('animals');
  const selector = document.querySelector('.selector');

  function renderList(type){
    const list = data[type] || [];
    animalsEl.innerHTML = '';
    if(list.length === 0){
      animalsEl.innerHTML = '<p>No animals found in this category.</p>';
      return;
    }

    for(const a of list){
      const card = document.createElement('div');
      card.className = 'animal';

      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.textContent = a.emoji || '🐾';

      const meta = document.createElement('div');
      meta.className = 'meta';
      const h3 = document.createElement('h3');
      h3.textContent = a.name;
      const p = document.createElement('p');
      p.textContent = a.breed + ' • ' + a.age;
      meta.appendChild(h3);
      meta.appendChild(p);

      const actions = document.createElement('div');
      actions.className = 'actions';
      const btnAdopt = document.createElement('button');
      btnAdopt.className = 'btn-adopt';
      btnAdopt.textContent = 'Adopt';
      btnAdopt.addEventListener('click', ()=>{
        alert('You clicked Adopt for ' + a.name + '. Implement adoption flow here.');
      });
      const btnDetails = document.createElement('button');
      btnDetails.className = 'btn-details';
      btnDetails.textContent = 'Details';
      btnDetails.addEventListener('click', ()=>{
        alert(a.name + '\nBreed: ' + a.breed + '\nAge: ' + a.age);
      });
      actions.appendChild(btnAdopt);
      actions.appendChild(btnDetails);

      card.appendChild(avatar);
      card.appendChild(meta);
      card.appendChild(actions);

      animalsEl.appendChild(card);
    }
  }

  // Initialize with dogs selected
  renderList('dogs');

  // Handle selector clicks
  selector.addEventListener('click', (e)=>{
    const btn = e.target.closest('button[data-type]');
    if(!btn) return;
    const type = btn.getAttribute('data-type');
    // update active
    selector.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderList(type);
  });

})();
