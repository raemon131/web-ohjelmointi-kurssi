// base class Henkilo
class Henkilo {
    constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
        this.etunimet = etunimet;
        this.sukunimi = sukunimi;
        this.kutsumanimi = kutsumanimi;
        this.syntymavuosi = syntymavuosi;
    }
    tulostaHenkilo() {
        console.log(`${this.kutsumanimi} ${this.sukunimi}, syntynyt ${this.syntymavuosi}`);
    }
}
// class Urheilija from Henkilo
class Urheilija extends Henkilo {
    constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi, kuva, paino, laji, saavutukset) {
        super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
        this.kuva = kuva;
        this.paino = paino;
        this.laji = laji;
        this.saavutukset = saavutukset;
    }
    getKuva() {
        return this.kuva;
    }
    getPaino() {
        return this.paino;
    }
    getLaji() {
        return this.laji;
    }
    getSaavutukset() {
        return this.saavutukset;
    }
    setKuva(uusiKuva) {
        this.kuva = uusiKuva;
    }
    setPaino(uusiPaino) {
        this.paino = uusiPaino;
    }
    setLaji(uusiLaji) {
        this.laji = uusiLaji;
    }
    setSaavutukset(uudetSaavutukset) {
        this.saavutukset = uudetSaavutukset;
    }
    // tulostaa kaikki urheilijan tiedot
    tulostaUrheilija() {
        console.log('Urheilijan tiedot');
        console.log(`Nimi: ${this.etunimet} ${this.sukunimi}`);
        console.log(`Kutsumanimi: ${this.kutsumanimi}`);
        console.log(`Syntymävuosi: ${this.syntymavuosi}`);
        console.log(`Paino: ${this.paino} kg`);
        console.log(`Laji: ${this.laji}`);
        console.log(`Saavutukset: ${this.saavutukset}`);
        console.log(`Kuva: ${this.kuva}`);
    }
}
const urheilija1 = new Urheilija(
    'Paavo Johannes',
    'Nurmi',
    'Paavo',
    1897,
    'https://example.com/nurmi.jpg',
    70,
    'Juoksu',
    '9 olympiakultaa, useita maailmanennätyksiä'
);
const urheilija2 = new Urheilija(
    'Kaisa Marja',
    'Mäkäräinen',
    'Kaisa',
    1983,
    'https://example.com/makarainen.jpg',
    65,
    'Ampumahiihto',
    'Maailmanmestari 2011, 2013, 2015'
);
const urheilija3 = new Urheilija(
    'Teemu Selänne',
    'Teemu',
    'Teemu',
    1970,
    'https://example.com/selanne.jpg',
    90,
    'Jääkiekko',
    'Olympiakulta 2006, NHL-ura'
);
urheilija1.tulostaUrheilija();
urheilija2.tulostaUrheilija();
urheilija3.tulostaUrheilija();