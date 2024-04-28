import alessi from '../img/alessi.png'
import willTimmons from '../img/WillTimmons.jpg'
import katieThigpen from '../img/KatieThigpen.jpg'
import russZokaites from '../img/RussZokaites.jpg'
import louisSetzer from '../img/LouisSetzer.jpeg'
import jacobElkin from '../img/JacobElkin.jpg'
import jordanJacobson from '../img/JordanJacobson.jpg'
import austinMotley from '../img/AustinMotley.jpg'
import evanHatter from '../img/EvanHatter.jpg'
import jettWalker from '../img/JettWalker.jpg'
import jonathanTang from '../img/jonathanHeadshot.jpg'
import chad from '../img/chad.jpg'
import brett from '../img/brett.jpg'
import nathan from '../img/nathan.jpg'
import TimImageBio from '../img/TimLookingRightNarrow.jpg'
import TimParallax from '../img/TimSitting.jpg'
import courtoisLogo from '../img/courtoisLogo.png'
import UCLogo from '../img/CCMLogo.svg'
import daytonPhilLogo from '../img/dayton-performing-arts-alliance-logo-web.svg'

const UCSite = 'https://ccm.uc.edu/admissions-and-aid.html'
const daytonPhilSite = 'https://daytonperformingarts.org/'
const courtoisSite = 'https://www.a-courtois.com/en/artist'

const details = {
	id: 1,
	name: "Travel'r",
	price: 20,
	img: 'img/travlr.png',
	desc: "here's the description",
	inCart: false,
	count: 0,
	total: 0,
}

const products = [
	{
		id: 1,
		name: "Travel'r",
		price: 25,
		img: 'img/travlr.png',
		desc:
			"here's the description here's the description here's the description here's the description",
		inCart: false,
		count: 1,
		total: 0,
	},
	{
		id: 2,
		name: 'Ex Libris',
		price: 25,
		img: 'img/ExLibrisCover.png',
		desc:
			"here's the description here's the description here's the description here's the description here's the description",
		inCart: false,
		count: 1,
		total: 0,
	},
]

const shipping = 6

export {
	alessi,
	jonathanTang,
	willTimmons,
	katieThigpen,
	russZokaites,
	louisSetzer,
	jacobElkin,
	jordanJacobson,
	austinMotley,
	evanHatter,
	jettWalker,
	chad,
	brett,
	nathan,
	TimImageBio,
	TimParallax,
	UCLogo,
	UCSite,
	daytonPhilLogo,
	daytonPhilSite,
	courtoisLogo,
	courtoisSite,
	details,
	products,
	shipping,
}
