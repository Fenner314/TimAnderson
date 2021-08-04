import alessi from '../img/alessi.png';
import courtoisLogo from '../img/courtoisLogo.png';
import UCLogo from '../img/CCMLogo.svg';

const UCSite = 'https://ccm.uc.edu/admissions-and-aid/admissions.html';
const daytonPhilLogo = 'https://daytonperformingarts.org/wp-content/themes/Newspaper-child/parts/header/Dayton_Philharmonic_Logo_042519.svg';
const daytonPhilSite = 'https://daytonperformingarts.org/';
const courtoisSite = 'https://www.a-courtois.com/en/artist';

const details = {
    id: 1,
    name: 'Travel\'r',
    price: 20,
    img: 'img/travlr.png',
    desc: 'here\'s the description',
    inCart: false,
    count: 0,
    total: 0
}

const products = [
    {
        id: 1,
        name: 'Travel\'r',
        price: 25,
        img: 'img/travlr.png',
        desc: 'here\'s the description here\'s the description here\'s the description here\'s the description',
        inCart: false,
        count: 1,
        total: 0
    },
    {
        id: 2,
        name: 'Ex Libris',
        price: 25,
        img: 'img/ExLibrisCover.png',
        desc: 'here\'s the description here\'s the description here\'s the description here\'s the description here\'s the description',
        inCart: false,
        count: 1,
        total: 0
    },
]

const shipping = 6;

export {alessi, UCLogo, UCSite, daytonPhilLogo, daytonPhilSite, courtoisLogo, courtoisSite, details, products, shipping}