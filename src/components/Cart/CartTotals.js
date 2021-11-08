import React, { useEffect, useContext } from 'react'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { AppContext } from '../../utils/context'

const useStyles = makeStyles((theme) => ({
	clearButton: {
		backgroundColor: 'var(--main-red)',
		color: 'var(--main-white)',
		marginBottom: '10px',
		'&:hover': {
			backgroundColor: 'var(--dark-red)',
		},
	},
	checkoutButton: {
		backgroundColor: 'var(--accent-dark)',
		color: 'var(--main-white)',
		marginBottom: '10px',
		'&:hover': {
			backgroundColor: 'var(--accent-darker)',
		},
	},
}))

export default function CartTotals(props) {
	const classes = useStyles()
	// const {history} = props;

	const { cartTotal, commerceCart, addCartTotal, handleEmptyCart } =
		useContext(AppContext)

	useEffect(() => {
		addCartTotal(commerceCart.subtotal.raw)
	}, [commerceCart])

	let form = () => (
		<form>
			<input type='hidden' name='name' value='flabbab' />
		</form>
	)
	console.log(commerceCart)
	return (
		<div className='container totals-box'>
			<div className='row'>
				<div
					className='col-10 mt-2 mb-4 ml-sm-5 ml-md-auto col-sm-8 d-flex flex-column align-items-end'
					style={{ width: '160px' }}
				>
					<Button
						variant='contained'
						className={classes.clearButton}
						startIcon={<DeleteIcon />}
						onClick={handleEmptyCart}
					>
						Clear Cart
					</Button>
					<h5 className='text-title' style={{ marginBottom: '10px' }}>
						<span>Total:&nbsp;</span>
						<strong>${commerceCart.subtotal.formatted}</strong>
					</h5>
					{/* <h5 className='text-title' >
						<span>Total:&nbsp;</span>
						<strong>${cartTotal}</strong>
					</h5> */}
					<Link to='/checkout'>
						<Button
							variant='contained'
							className={classes.checkoutButton}
							startIcon={<LocalMallIcon />}
							onClick={handleEmptyCart}
						>
							Checkout
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
