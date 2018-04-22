var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  function processName(name) {
    name = name.split(' ');
    return name.map(function (str) {
      return (str[0].toUpperCase() + str.slice(1)).replace(/\./, '');
    }).join(' ').toString();
  }

  data.forEach(function (obj) {
    obj.name = processName(obj.name);
    obj.country = 'Canada';
  });

  return data;
}

console.log(processBands(bands));

// should return:
//[
//  { name: 'Sunset Rubdown', country: 'Canada', active: false },
//  { name: 'Women', country: 'Canada', active: false },
//  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
//]
