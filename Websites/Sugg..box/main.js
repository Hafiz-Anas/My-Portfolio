const countries = [
    {name: 'USA'},
    {name: 'UAE'},
    {name: 'Pakistan'},
    {name: 'India'},
    {name: 'Australia'},
    {name: 'Argentina'},
    {name: 'Canada'},
    {name: 'Armenia'}
];
const searchInput = document.querySelector('.Search-input');
const suggestionsPanel = document.querySelector('.sugg');
searchInput.addEventListener('keyup', function() {
    const input = searchInput.value;
    suggestionsPanel.innerHTML = '';
    const suggestions = countries.filter(function(country) {
      return country.name.toLowerCase().startsWith(input);
    });
    suggestions.forEach(function(suggested) {
      const div = document.createElement('div');
      div.innerHTML = suggested.name;
      suggestionsPanel.appendChild(div);
    });
    if (input === '') {
      suggestionsPanel.innerHTML = '';  
    }
    
  });
  