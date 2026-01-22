import { useContext, useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from '../theme-context';
import KgnLogo from '../assets/kgnLogo.png';
import darkKgnLogo from '../assets/darkLogo.png';


const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const [activeMenu, setActiveMenu] = useState('home');
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    height: { xs: 64, md: 80 },
                    backdropFilter: 'blur(10px)',
                    backgroundColor:
                        theme.palette.mode === 'dark'
                            ? 'rgba(18,18,18,0.85)'
                            : 'rgba(255,255,255,0.9)',
                    borderBottom: '1px solid',
                    borderColor:
                        theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.08)'
                            : 'rgba(0,0,0,0.08)',
                    boxShadow:
                        theme.palette.mode === 'dark'
                            ? '0 4px 20px rgba(0,0,0,0.6)'
                            : '0 4px 20px rgba(0,0,0,0.1)',
                }}
            >
                <Toolbar sx={{ height: '100%' }}>
                    {/* LOGO */}
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        width: "100%", // ✅ REQUIRED
                    }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,

                                fontSize: {
                                    xs: '1.05rem',
                                    sm: '1.2rem',
                                    md: '1.4rem',
                                },

                                letterSpacing: {
                                    xs: '0.5px',
                                    md: '1px',
                                },

                                whiteSpace: 'nowrap',

                                background:
                                    theme.palette.mode === 'dark'
                                        ? 'linear-gradient(90deg,#90caf9,#e3f2fd)'
                                        : 'linear-gradient(90deg,#1976d2,#42a5f5)',

                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',

                                display: 'flex',
                                alignItems: 'center',
                                gap: 1, // space between logo & text
                            }}
                        >
                            <img
                                src={theme.palette.mode === "dark" ? darkKgnLogo : KgnLogo}
                                alt="KGN Logo"
                                style={{
                                    height: '80px',   // keeps it inline
                                    width: 'auto',
                                    objectFit: 'contain',
                                    borderRadius: 25,
                                }}
                            />
                            KGN CEILING WORKS
                        </Typography>



                        {/* DESKTOP MENU (WEB VIEW ONLY) */}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 2,
                            }}
                        >
                            {menuItems.map((item) => {
                                const isActive = activeMenu === item.id;
                                return (
                                    <Button
                                        key={item.id}
                                        onClick={() => {
                                            setActiveMenu(item.id);
                                            handleScroll(item.id);
                                        }}
                                        sx={{
                                            color: isActive
                                                ? theme.palette.primary.main
                                                : theme.palette.text.primary,
                                            fontWeight: isActive ? 600 : 400,
                                            position: 'relative',
                                            textTransform: 'none',
                                            fontSize: 16,
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 4,
                                                left: '50%',
                                                width: isActive ? '60%' : '0%',
                                                height: '2px',
                                                backgroundColor: theme.palette.primary.main,
                                                transition: '0.3s',
                                                transform: 'translateX(-50%)',
                                            },
                                            '&:hover::after': {
                                                width: '60%',
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                );
                            })}
                        </Box>

                        {/* THEME TOGGLE */}
                        <IconButton onClick={colorMode.toggleColorMode} sx={{ ml: 1 }}>
                            {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                        </IconButton>
                    </Box>

                    {/* MOBILE MENU ICON (MOBILE VIEW ONLY) */}
                    <IconButton
                        onClick={() => setMobileOpen(true)}
                        sx={{ display: { xs: 'flex', md: 'none' }, ml: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* MOBILE DROPDOWN DRAWER */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                PaperProps={{
                    sx: {
                        width: 260,
                        backgroundColor:
                            theme.palette.mode === 'dark' ? '#121212' : '#fff',
                    },
                }}
            >
                <List sx={{ mt: 2 }}>
                    {menuItems.map((item) => (
                        <ListItemButton
                            key={item.id}
                            selected={activeMenu === item.id}
                            onClick={() => {
                                setActiveMenu(item.id);
                                handleScroll(item.id);
                            }}
                        >
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{ fontWeight: 500 }}
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
