import React, { useState, useContext, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles } from '@material-ui/core/styles'
import { AppContext } from '../utils/context'

const useStyles = makeStyles((theme) => ({
	addButton: {
		backgroundColor: 'var(--accent-dark)',
		color: 'var(--main-white)',
		'&:hover': {
			backgroundColor: 'var(--accent-darker)',
			color: 'var(--main-white)',
		},
	},
	stepperBox: {
		border: '1px solid var(--accent-dark) !important',
		color: 'var(--main-white) !important',
		'&:hover': {
			backgroundColor: 'hsla(105, 65%, 20%, .25)',
		},
	},
}))

export default function Product({ product }) {
	const [inCart, setInCart] = useState(false)

	const classes = useStyles()

	const { handleAddToCart, commerceCart } = useContext(AppContext)

	useEffect(() => {
		if (commerceCart.line_items) {
			commerceCart.line_items.map((item) => {
				if (item.product_id === product.id) {
					setInCart(true)
				}
			})
		}
	}, [commerceCart])

	const handleToggleButton = () => {
		setInCart(!inCart)
	}

	return (
		<>
			<div className='product-card-container'>
				<div
					className='product-card'
					style={{ backgroundImage: `url(${product.image.url})` }}
				>
					<div className='card-info'>
						<h2>{product.name}</h2>
						<p>${product.price.formatted}</p>
						<p
							dangerouslySetInnerHTML={{ __html: product.description }}
							className='product-desc'
						/>
						<div className='add-container'>
							<ButtonGroup
								size='small'
								className={classes.stepper}
							></ButtonGroup>
							<Button
								variant='contained'
								size='small'
								disabled={inCart}
								className={classes.addButton}
								onClick={() => {
									handleToggleButton()
									handleAddToCart(product.id, 1)
								}}
							>
								{inCart ? 'Added To Cart' : 'Add To Cart'}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
