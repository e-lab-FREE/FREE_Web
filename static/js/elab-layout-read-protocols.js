
URL = 'http://localhost:8000/api/v1/experiments'

// https://stackoverflow.com/questions/15164655/generate-html-table-from-2d-javascript-array
function getCells(data, type) {
  return data.map(cell => `<${type}>${cell}</${type}>`).join('');
}

function createBody(json) {
  const data = [];
  let url = '';
  Object.values(json).forEach((elem) => {
    // console.log('Body elem :', elem);
    if (elem.name !== undefined && elem.name !== null) {
      url = elem.name.toLowerCase();
    }
    
    const row = [];
    Object.values(elem).forEach((item)  => {
      // console.log('Body item :', item, typeof item);
      if (typeof item === 'object') {
        const jsonToHTMLString = JSON.stringify(item, null, 4).replace(/\n( *)/g, function (match, p1) {
                                                                              return '<br>' + '&nbsp;'.repeat(p1.length);
                                                                              });
        const jsonString = '<pre><code> ' + JSON.stringify(item, null, 4) + ' </code></pre>';                                                                     
        row.push(jsonString);
      } else {
        row.push(item);
      }
    });


    const url_new = url + '_new';
    const state = `
          <div class="ui buttons">
            <a href=${url}><button class="ui positive button">Go</button></a>
            <div class="or" data-text="or"></div>
            <a href=${url_new}><button class="ui negative button">New</button></a>
          </div>
        `;
    row.push(state);

    data.push(row);
  });

  return data.map(row => `<tr>${getCells(row, 'td')}</tr>`).join('');
}

function createTable(data) {

  if (data.length > 0 ) {
    const headings = Object.keys(data[0])
  
    headings.push('state');

    return `
        <thead>${getCells(headings, 'th')}</thead>
        <tbody>${createBody(data)}</tbody>
    `;
  }

  return '';
}

const fetchUsers = () => {
  axios.get(URL)
      .then(response => {
          // console.log('read-protocols', response.data);
          const experiments = response.data;
          console.log(`GET experiments list`, experiments);
          const table = createTable(experiments);
          console.log(`GET experiments table`, table);
          let elem = document.getElementById("experiments");
          elem.innerHTML = table;
      })
      .catch(error => console.error(error));
};

fetchUsers();