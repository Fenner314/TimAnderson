import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  toolbar: theme.mixins.toolbar,
  layout: {
    marginTop: '5%',
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  divider: {
    margin: '20px 0',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAccent: {
      backgroundColor: 'var(--main-accent)',
      '&:hover': {
          backgroundColor: 'var(--accent-dark)'
      }
  },
  buttonBack: {
    position: 'absolute',
    bottom: '36px',
    borderColor: 'var(--main-accent)',
    color: 'var(--main-white)',
    left: '50%',
    transform: 'translateX(-50%)',
    '&:hover': {
        backgroundColor: 'hsla(105, 65%, 40%, .1)'
    }
  },
  sendButton: {
    backgroundColor: 'var(--accent-dark)',
    color: 'var(--main-white)',
    '&:hover': {
        backgroundColor: 'var(--accent-darker)',
        color: 'var(--main-white)',
    }
  },
  thanksButton: {
    borderColor: 'var(--main-accent)',
    color: 'var(--main-white)',
    padding: '15px',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: 'hsla(105, 65%, 40%, .1)'
    }
  }
}));