import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

import { useForm } from '../../hooks'
import { startCreatingUserWithEmailPassword } from '../../store/auth'
import { HomeNavbar } from '../../journal/components/HomeNavbar'

const formData = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener una @'],
  password: [(value) => value.length >= 6, 'La contraseña debe de tener más de 6 caracteres'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {
  const dispatch = useDispatch()
  const { status, errorMessage } = useSelector((state) => state.auth)
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  const [formSubmitted, setFormSubmitted] = useState(false)

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations)

  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)

    if (!isFormValid) return

    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  return (
    <div>
      <HomeNavbar />
      <AuthLayout title='Register'>
        <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Nombre completo'
                type='text'
                placeholder='Kevin Sandoval'
                fullWidth
                name='displayName'
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Correo'
                type='email'
                placeholder='correo@gmail.com'
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Contraseña'
                type='password'
                placeholder='contraseña'
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>

              <Grid item xs={12}>
                <Button disabled={isCheckingAuthentication} variant='contained' fullWidth type='submit'>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </div>
  )
}
