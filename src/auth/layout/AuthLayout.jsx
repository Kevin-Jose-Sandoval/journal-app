import { Grid, Typography } from '@mui/material'

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='end'
      justifyContent='center'
      sx={{
        minHeight: '100vh',
        padding: '100px',
        backgroundImage:
          'url("https://res.cloudinary.com/kevinsandoval/image/upload/v1670114651/journal/bg-home_bdqvuk.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bo',
        backgroundSize: 'cover',
      }}
    >
      <Grid
        item
        className='box-shadow'
        xs={3}
        sx={{ width: { sm: 450 }, backgroundColor: 'white', padding: 3, borderRadius: 2 }}
      >
        <Typography variant='h5' sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  )
}
