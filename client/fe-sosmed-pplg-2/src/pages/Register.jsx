import Stack from '@mui/material/Stack'
import MuiCard from '@mui/material/Card'
import { InputLabel, MenuItem, Select, styled  } from '@mui/material'
import {  Box,
    Button,
    FormControl,
    FormLabel,
    Grid,
    TextField,
    Typography } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { Link } from "react-router-dom"

export const CardRegister = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '800px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

export const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

export const SignInContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));
const Register = () => {
  return (
    <>
    <CssBaseline enableColorScheme />
    <SignInContainer direction="column" justifyContent="space-between">
        <CardRegister variant="outlined">
            <Typography
                component="h1"
                variant="h4"
                sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
                Sign Up
            </Typography>
            <Box
                component="form"
                // onSubmit={handleSubmit}
                noValidate
                sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2, }}
            >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                    <Grid size={6}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="username">Username</FormLabel>
                            <TextField
                                // error={emailError}
                                // helperText={emailErrorMessage}
                                id="username"
                                type="text"
                                name="username"
                                placeholder="Username"
                                autoComplete="username"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                            // color={emailError ? 'error' : 'primary'}
                            />
                        </FormControl>
                    </Grid>
                    <Grid size={6}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <TextField
                                // error={passwordError}
                                // helperText={passwordErrorMessage}
                                name="password"
                                placeholder="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                            // color={passwordError ? 'error' : 'primary'}
                            />
                        </FormControl>
                    </Grid>
                    <Grid size={6}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextField
                                // error={emailError}
                                // helperText={emailErrorMessage}
                                id="emil"
                                type="text"
                                name="email"
                                placeholder="Email"
                                autoComplete="email"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                            // color={emailError ? 'error' : 'primary'}
                            />
                        </FormControl>
                    </Grid>
                    <Grid size={6}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="firstName">First Name</FormLabel>
                            <TextField
                                // error={emailError}
                                // helperText={emailErrorMessage}
                                id="firstName"
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                autoComplete="firstName"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                            // color={emailError ? 'error' : 'primary'}
                            />
                        </FormControl>
                    </Grid>
                    <Grid size={6}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="lastName">Last Name</FormLabel>
                            <TextField
                                // error={emailError}
                                // helperText={emailErrorMessage}
                                id="lastName"
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                autoComplete="lastName"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                            // color={emailError ? 'error' : 'primary'}
                            />
                        </FormControl>
                    </Grid>
                    <Grid size={6}>
                        <FormControl fullWidth style={{ marginTop: 23 }}>
                            <InputLabel id="demo-simple-select-label">Classes</InputLabel>
                            <Select
                                labelId="demo-simple-select-label-major"
                                id="demo-simple-select"
                                // value={age}
                                label="Classes"
                            // onChange={handleChange}
                            >
                                <MenuItem value={"X"}>X</MenuItem>
                                <MenuItem value={"XI"}>XI</MenuItem>
                                <MenuItem value={"XII"}>XII</MenuItem>
                                <MenuItem value={"XIII"}>XIII</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={6}>
                        <FormControl fullWidth style={{ marginTop: 23 }}>
                            <InputLabel id="demo-simple-select-label-major">Majors</InputLabel>
                            <Select
                                labelId="demo-simple-select-label-major"
                                id="demo-simple-select"
                                // value={age}
                                label="Major"
                            // onChange={handleChange}
                            >
                                <MenuItem value={"PPLG"}>PPLG</MenuItem>
                                <MenuItem value={"TM"}>TM</MenuItem>
                                <MenuItem value={"MPLB"}>MPLB</MenuItem>
                                <MenuItem value={"TJKT"}>TJKT</MenuItem>
                                <MenuItem value={"TSM"}>TSM</MenuItem>
                                <MenuItem value={"TKR"}>TKR</MenuItem>
                                <MenuItem value={"HR"}>HR</MenuItem>
                                <MenuItem value={"DKV"}>DKV</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={6}>
                        <FormControl fullWidth style={{ marginTop: 23 }}>
                            <InputLabel id="demo-simple-select-label-gender">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label-gender"
                                id="demo-simple-select"
                                // value={age}
                                label="Gender"
                            // onChange={handleChange}
                            >
                                <MenuItem value={"M"}>Male</MenuItem>
                                <MenuItem value={"F"}>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                //   onClick={validateInputs}
                >
                    Sign Up
                </Button>
                <center>
                    <Link to={"/login"}>
                        Have account?
                    </Link>
                </center>
            </Box>
        </CardRegister>
    </SignInContainer>
</>
  )
}

export default Register