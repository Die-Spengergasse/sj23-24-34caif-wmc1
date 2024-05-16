const pr = new Promise((resolve, reject) => {
    console.log('before settimeout');
    // console.log('in settimeout');
    setTimeout(() => {
        resolve(7);
        // reject(new Error('mein Fehler!'));
    }, 3000);
    console.log('after settimeout');
});
async function main() {
    try {
        erg = await pr;
        console.log('Erfolg: ' + erg);
    } catch (e) {
        console.log(`Gefangen: ${e.message}`);
    }
    throw new Error('mein Fehler!');
    return 'main fertig';
}
x = main()
    .then((e) => console.log(e))
    .catch((e) => console.log('catch', e.message));
