async function main() {
    const url = 'https://pokeapi.co/api/v2/pokemon/25/';
    console.log('a');
    const response = await fetch(url);
    const jsn = await response.json();
    //console.log(jsn);
    console.log('b');
}
main()
    .then(() => console.log('ok'))
    .catch(() => console.log('fail'));
console.log('c');
