import { useRef } from 'react';
import {
    Box, Typography, Container, useTheme,
    Card,
    CardContent,
    Grid,
    Avatar,
    Rating,
    IconButton, Tooltip,
    Button, Stack, Divider, CardMedia
} from '@mui/material';
import contactQrCode from '../assets/contactQr.jpeg';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DownloadIcon from "@mui/icons-material/Download";
import CeilingIcon from "@mui/icons-material/BorderStyle";
import LightIcon from "@mui/icons-material/LightMode";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
 

// Swipper Images
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.webp";
import Image4 from "../assets/image4.jpg";
import Image5 from "../assets/image5.jpg";
import Image6 from "../assets/image6.jpg";
import Image7 from "../assets/image7.png";
import Image8 from "../assets/image8.jpeg";
import Image9 from "../assets/image9.jpeg";
import Image10 from "../assets/image10.webp";
import Image11 from "../assets/image11.jpg";
import Image12 from "../assets/image12.jpg";
import Image13 from "../assets/image13.jpeg";
import Image14 from "../assets/image14.jpeg";
import Image15 from "../assets/image15.jpeg";
import Image16 from "../assets/image16.jpeg";
import Image17 from "../assets/image17.jpeg";



const Section = ({ id }) => {
    const theme = useTheme();
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const handleDownload = (item) => {
        fetch(item.src)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.blob();
            })
            .then((blob) => {
                const fileURL = URL.createObjectURL(blob);

                const a = document.createElement("a");
                a.href = fileURL; // ✅ USE blob URL
                a.download = item.title ? `${item.title}.jpg` : "image.jpg";

                document.body.appendChild(a);
                a.click();

                document.body.removeChild(a);
                URL.revokeObjectURL(fileURL); // cleanup
            })
            .catch((error) => {
                console.error("Error downloading file:", error);
            });
    };


    const imageSources = [
        Image1, Image6, Image11, Image16,
        Image2, Image7, Image12, Image17,
        Image3, Image8, Image13,
        Image4, Image9, Image14,
        Image5, Image10, Image15,
    ];
    const images = imageSources.map((src, index) => ({
        id: index + 1,
        src,
        title: "KGN Ceiling Work",
    }));


    const arrowStyle = {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        width: 44,
        height: 44,
        borderRadius: "50%",
        backdropFilter: "blur(6px)",
        backgroundColor:
            theme.palette.mode === "dark"
                ? "rgba(0,0,0,0.6)"
                : "rgba(255,255,255,0.9)",
        border:
            theme.palette.mode === "dark"
                ? "1px solid rgba(255,255,255,0.15)"
                : "1px solid rgba(0,0,0,0.12)",
        transition: "all 0.25s ease",
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            transform: "translateY(-50%) scale(1.1)",
        },
    };

    const services = [
        {
            title: "POP False Ceiling",
            description:
                "Smooth finish and elegant POP ceiling designs suitable for living rooms and bedrooms.",
            icon: <CeilingIcon />,
        },
        {
            title: "Gypsum Ceiling",
            description:
                "Modern and lightweight gypsum ceilings ideal for residential and commercial spaces.",
            icon: <ViewQuiltIcon />,
        },
        {
            title: "PVC Ceiling",
            description:
                "Waterproof, durable, and low-maintenance ceilings perfect for kitchens and bathrooms.",
            icon: <WaterDropIcon />,
        },
        {
            title: "Grid Ceiling",
            description:
                "Strong and functional grid ceilings commonly used in offices and shops.",
            icon: <HomeWorkIcon />,
        },
        {
            title: "Lighting & Cove Work",
            description:
                "LED lighting, spotlights, and cove lighting to enhance your interior look.",
            icon: <LightIcon />,
        },
    ]

    return (
        <Box
            id={id}
            component="section"
            sx={{
                py: id === "home" ? 0 : 8,
                minHeight: '60vh',
                borderBottom: id === "contact" ? 0 : 1,
                borderColor: 'divider',
                scrollMarginTop: '80px'
            }}
        >
            {
                id === "home" ? (
                    <Box
                        id="home"
                        sx={{
                            position: "relative",
                            overflow: "hidden",
                            background: (theme) =>
                                theme.palette.mode === "dark"
                                    // DARK MODE – deep premium gradient
                                    ? "linear-gradient(180deg, #0f2027 0%, #203a43 50%, #2c5364 100%)"
                                    // LIGHT MODE – soft professional gradient (NOT blue-heavy)
                                    : "linear-gradient(180deg, #f8fafc 0%, #eef3ff 50%, #e6ecff 100%)",

                            color: (theme) =>
                                theme.palette.mode === "dark" ? "#ffffff" : "#1e293b",

                            borderTop: (theme) =>
                                theme.palette.mode === "light"
                                    ? "1px solid rgba(0,0,0,0.08)"
                                    : "1px solid rgba(255,255,255,0.08)",

                            transition: "background 0.4s ease",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                inset: 0,
                                background:
                                    "radial-gradient(circle at top right, rgba(0,229,255,0.15), transparent 40%)",
                                pointerEvents: "none",
                            },
                        }}
                    >

                        <Container maxWidth="lg">
                            <Grid
                                container
                                spacing={6}
                                alignItems="center"
                                sx={{ minHeight: "80vh" }}
                            >
                                {/* LEFT CONTENT */}
                                <Grid item size={{ xs: 12, md: 6 }}>
                                    <Stack spacing={3} textAlign={{ xs: "center", md: "left" }}>
                                        <Typography
                                            variant="h3"
                                            fontWeight={800}
                                            sx={{
                                                lineHeight: 1.2,
                                                background: (theme) =>
                                                    theme.palette.mode === "dark"
                                                        ? "linear-gradient(90deg,#00e5ff,#80d8ff)"
                                                        : "linear-gradient(90deg,#1976d2,#42a5f5)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}
                                        >
                                            KGN Ceiling Works
                                        </Typography>

                                        <Typography
                                            variant="h6"
                                            sx={{
                                                maxWidth: 650,
                                                color: "text.secondary",
                                                lineHeight: 1.8,
                                            }}
                                        >
                                            Professional POP, Gypsum, PVC & Grid ceiling solutions in
                                            <strong> Nandigama</strong>. We deliver modern designs, quality
                                            craftsmanship, and affordable pricing for homes & commercial spaces.
                                        </Typography>

                                        <Stack
                                            direction={{ xs: "column", sm: "row" }}
                                            spacing={2}
                                            justifyContent={{ xs: "center", md: "flex-start" }}
                                        >
                                            <Button
                                                variant="contained"
                                                size="large"
                                                onClick={() => handleScroll("contact")}
                                                sx={{
                                                    px: 4,
                                                    borderRadius: 3,
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Get Free Consultation
                                            </Button>

                                            <Button
                                                variant="outlined"
                                                size="large"
                                                onClick={() => handleScroll("gallery")}
                                                sx={{
                                                    px: 4,
                                                    borderRadius: 3,
                                                    fontWeight: 600,
                                                }}
                                            >
                                                View Our Work
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </Grid>

                                {/* RIGHT IMAGE */}
                                <Grid item size={{ xs: 12, md: 6 }}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            borderRadius: 4,
                                            overflow: "hidden",
                                            boxShadow: (theme) =>
                                                theme.palette.mode === "dark"
                                                    ? "0 20px 40px rgba(0,0,0,0.7)"
                                                    : "0 20px 40px rgba(0,0,0,0.2)",
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={Image7}
                                            alt="Ceiling Work"
                                            sx={{
                                                width: "100%",
                                                height: { xs: 260, sm: 320, md: 420 },
                                                objectFit: "cover",
                                                borderRadius: 10,
                                            }}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>

                    </Box>


                ) : (
                    <Container>
                        {
                            id === "services" ? (
                                <Box
                                    id="services"
                                >
                                    <Box sx={{ textAlign: "center", wordBreak: "break-all" }}>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                textAlign: "center",
                                                fontWeight: 700,

                                                /* Responsive font size */
                                                fontSize: {
                                                    xs: "30px",   // mobile
                                                    sm: "24px",   // tablet
                                                    md: "35px",   // desktop
                                                },

                                                /* Allow wrapping on mobile */
                                                whiteSpace: {
                                                    xs: "normal",
                                                    md: "nowrap",
                                                },

                                                background:
                                                    theme.palette.mode === "dark"
                                                        ? "linear-gradient(90deg,#90caf9,#e3f2fd)"
                                                        : "linear-gradient(90deg,#1976d2,#42a5f5)",

                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",

                                                lineHeight: 1.3,
                                            }}
                                        >
                                            Our Services
                                        </Typography>

                                        <Typography sx={{ mt: 1.5, fontWeight: 500 }} variant='h6'>    We provide high-quality false ceiling and lighting solutions tailored to
                                            your space and budget.</Typography>
                                    </Box>

                                    <Grid container spacing={3} mt={3}>
                                        {services.map((service, index) => (
                                            <Grid item size={{ xs: 12, md: 6 }} key={index}>
                                                <Card
                                                    sx={{
                                                        position: "relative",
                                                        overflow: "hidden",
                                                        height: "100%",
                                                        borderRadius: 3,

                                                        backgroundColor:
                                                            theme.palette.mode === "dark" ? "#1e1e1e" : "#ffffff",

                                                        border: theme.palette.mode === "dark"
                                                            ? "1px solid rgba(255,255,255,0.08)"
                                                            : "1px solid rgba(0,0,0,0.08)",

                                                        boxShadow:
                                                            theme.palette.mode === "dark"
                                                                ? "0 8px 24px rgba(0,0,0,0.6)"
                                                                : "0 8px 24px rgba(0,0,0,0.12)",

                                                        transition: "all 0.3s ease",

                                                        "&::before": {
                                                            content: '""',
                                                            position: "absolute",
                                                            top: 0,
                                                            left: 0,
                                                            width: "100%",
                                                            height: 3,
                                                            backgroundColor:
                                                                theme.palette.mode === "light"
                                                                    ? theme.palette.primary.main
                                                                    : "#00e5ff",
                                                            transform: "scaleX(0)",
                                                            transformOrigin: "left",
                                                            transition: "transform 0.35s ease",
                                                        },

                                                        "&::after": {
                                                            content: '""',
                                                            position: "absolute",
                                                            bottom: 0,
                                                            left: 0,
                                                            width: "100%",
                                                            height: 3,
                                                            backgroundColor:
                                                                theme.palette.mode === "light"
                                                                    ? theme.palette.primary.main
                                                                    : "#00e5ff",
                                                            transform: "scaleX(0)",
                                                            transformOrigin: "right",
                                                            transition: "transform 0.35s ease",
                                                        },

                                                        "&:hover::before": {
                                                            transform: "scaleX(1)",
                                                        },

                                                        "&:hover::after": {
                                                            transform: "scaleX(1)",
                                                        },

                                                        "&:hover": {
                                                            transform: "translateY(-6px)",
                                                        },
                                                    }}

                                                >
                                                    <CardContent sx={{ textAlign: "center", p: 4 }}>
                                                        <Box
                                                            sx={{
                                                                mb: 2,
                                                                fontSize: 44,
                                                                color: "primary.main",
                                                            }}
                                                        >
                                                            {service.icon}
                                                        </Box>

                                                        <Typography variant="h6" fontWeight={600} gutterBottom>
                                                            {service.title}
                                                        </Typography>

                                                        <Typography variant="body2" color="text.secondary">
                                                            {service.description}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            ) : id === "about" ? (
                                <Box
                                    id="about"
                                >
                                    <Box sx={{ textAlign: "center", wordBreak: "break-all" }}>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                textAlign: "center",
                                                fontWeight: 700,

                                                /* Responsive font size */
                                                fontSize: {
                                                    xs: "30px",   // mobile
                                                    sm: "24px",   // tablet
                                                    md: "35px",   // desktop
                                                },

                                                /* Allow wrapping on mobile */
                                                whiteSpace: {
                                                    xs: "normal",
                                                    md: "nowrap",
                                                },

                                                background:
                                                    theme.palette.mode === "dark"
                                                        ? "linear-gradient(90deg,#90caf9,#e3f2fd)"
                                                        : "linear-gradient(90deg,#1976d2,#42a5f5)",

                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",

                                                lineHeight: 1.3,
                                            }}
                                        >
                                            About
                                        </Typography>

                                        <Typography sx={{ mt: 1.5, fontWeight: 500 }} variant='h6'>KGN Ceiling delivers modern, stylish false ceiling solutions <br /> That enhance the beauty and comfort of homes and commercial spaces.</Typography>
                                    </Box>

                                    <Grid container spacing={4} mt={3}>
                                        <Grid item size={{ xs: 12, md: 6 }}>
                                            <Card
                                                sx={{
                                                    height: "100%",
                                                    p: 4,
                                                    borderRadius: 3,
                                                    position: "relative",
                                                    backgroundColor: (theme) =>
                                                        theme.palette.mode === "dark"
                                                            ? "rgba(30,30,30,0.9)"
                                                            : "#ffffff",
                                                    border: (theme) =>
                                                        theme.palette.mode === "dark"
                                                            ? "1px solid rgba(255,255,255,0.08)"
                                                            : "1px solid rgba(0,0,0,0.08)",
                                                    boxShadow: (theme) =>
                                                        theme.palette.mode === "dark"
                                                            ? "0 10px 30px rgba(0,0,0,0.7)"
                                                            : "0 10px 30px rgba(0,0,0,0.15)",
                                                    transition: "all 0.3s ease",
                                                    "&:hover": {
                                                        borderColor: theme.palette.primary.main,
                                                        boxShadow:
                                                            theme.palette.mode === "dark"
                                                                ? "0 10px 30px rgba(0,0,0,0.7)"
                                                                : "0 10px 30px rgba(0,0,0,0.15)",
                                                    },
                                                }}
                                            >
                                                <Typography variant="h6" fontWeight={700} gutterBottom>
                                                    Who We Are
                                                </Typography>
                                                <Typography color="text.secondary" lineHeight={1.8}>
                                                    KGN Ceiling Works is a professional ceiling service provider in
                                                    Nandigama specializing in POP, Gypsum, PVC, and Grid ceiling
                                                    solutions. We focus on quality craftsmanship, premium materials,
                                                    and flawless finishing for every project.
                                                </Typography>
                                            </Card>
                                        </Grid>

                                        <Grid item size={{ xs: 12, md: 6 }}>
                                            <Card
                                                sx={{
                                                    height: "100%",
                                                    p: 4,
                                                    borderRadius: 3,
                                                    position: "relative",
                                                    backgroundColor: (theme) =>
                                                        theme.palette.mode === "dark"
                                                            ? "rgba(30,30,30,0.9)"
                                                            : "#ffffff",
                                                    border: (theme) =>
                                                        theme.palette.mode === "dark"
                                                            ? "1px solid rgba(255,255,255,0.08)"
                                                            : "1px solid rgba(0,0,0,0.08)",
                                                    boxShadow: (theme) =>
                                                        theme.palette.mode === "dark"
                                                            ? "0 10px 30px rgba(0,0,0,0.7)"
                                                            : "0 10px 30px rgba(0,0,0,0.15)",
                                                    transition: "all 0.3s ease",
                                                    "&:hover": {
                                                        borderColor: theme.palette.primary.main,
                                                        boxShadow:
                                                            theme.palette.mode === "dark"
                                                                ? "0 10px 30px rgba(0,0,0,0.7)"
                                                                : "0 10px 30px rgba(0,0,0,0.15)",
                                                    },
                                                }}
                                            >
                                                <Typography variant="h6" fontWeight={700} gutterBottom>
                                                    Why Choose Us
                                                </Typography>

                                                <Typography color="text.secondary" lineHeight={2}>
                                                    <Box component="span" sx={{ color: "primary.main", fontWeight: 700 }}>
                                                        ✔
                                                    </Box>{" "}
                                                    &nbsp;  Experienced & skilled professionals
                                                    <br />

                                                    <Box component="span" sx={{ color: "primary.main", fontWeight: 700 }}>
                                                        ✔
                                                    </Box>{" "}
                                                    &nbsp;  POP, Gypsum & PVC ceiling expertise
                                                    <br />

                                                    <Box component="span" sx={{ color: "primary.main", fontWeight: 700 }}>
                                                        ✔
                                                    </Box>{" "}
                                                    &nbsp;  Modern lighting & custom designs
                                                    <br />

                                                    <Box component="span" sx={{ color: "primary.main", fontWeight: 700 }}>
                                                        ✔
                                                    </Box>{" "}
                                                    &nbsp;Affordable pricing & free consultation
                                                    <br />

                                                    <Box component="span" sx={{ color: "primary.main", fontWeight: 700 }}>
                                                        ✔
                                                    </Box>{" "}
                                                    &nbsp; On-time project delivery
                                                </Typography>

                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ) : id === "gallery" ? (
                                <Box>
                                    <Box sx={{ textAlign: "center", wordBreak: "break-all" }}>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                textAlign: "center",
                                                fontWeight: 700,

                                                /* Responsive font size */
                                                fontSize: {
                                                    xs: "30px",   // mobile
                                                    sm: "24px",   // tablet
                                                    md: "35px",   // desktop
                                                },

                                                /* Allow wrapping on mobile */
                                                whiteSpace: {
                                                    xs: "normal",
                                                    md: "nowrap",
                                                },

                                                background:
                                                    theme.palette.mode === "dark"
                                                        ? "linear-gradient(90deg,#90caf9,#e3f2fd)"
                                                        : "linear-gradient(90deg,#1976d2,#42a5f5)",

                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",

                                                lineHeight: 1.3,
                                            }}
                                        >
                                            Gallery
                                        </Typography>

                                        <Typography sx={{ mt: 1.5, fontWeight: 500 }} variant='h6'>Trusted by thousands of satisfied customers</Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            maxWidth: 1100,
                                            mx: "auto",
                                            p: 3,
                                            mt: 3,
                                            borderRadius: 4,
                                            background:
                                                theme.palette.mode === "dark"
                                                    ? "linear-gradient(145deg,#1b1b1b,#262626)"
                                                    : "linear-gradient(145deg,#ffffff,#f1f4fb)",
                                            border:
                                                theme.palette.mode === "dark"
                                                    ? "1px solid rgba(255,255,255,0.08)"
                                                    : "1px solid rgba(0,0,0,0.08)",
                                            boxShadow:
                                                theme.palette.mode === "dark"
                                                    ? "0 20px 40px rgba(0,0,0,0.6)"
                                                    : "0 20px 40px rgba(0,0,0,0.12)",
                                        }}
                                    >
                                        {/* LEFT ARROW */}
                                        <IconButton ref={prevRef} sx={{ ...arrowStyle, left: -20 }}>
                                            <ArrowBackIosNewIcon fontSize="small" />
                                        </IconButton>

                                        {/* RIGHT ARROW */}
                                        <IconButton ref={nextRef} sx={{ ...arrowStyle, right: -20 }}>
                                            <ArrowForwardIosIcon fontSize="small" />
                                        </IconButton>

                                        <Swiper
                                            modules={[Navigation, Pagination, Autoplay, A11y]}
                                            spaceBetween={24}
                                            slidesPerView={1}
                                            loop
                                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                                            pagination={{ clickable: true }}
                                            navigation={{
                                                prevEl: prevRef.current,
                                                nextEl: nextRef.current,
                                            }}
                                            onInit={(swiper) => {
                                                swiper.params.navigation.prevEl = prevRef.current;
                                                swiper.params.navigation.nextEl = nextRef.current;
                                                swiper.navigation.init();
                                                swiper.navigation.update();
                                            }}
                                            breakpoints={{
                                                600: { slidesPerView: 2 },
                                                960: { slidesPerView: 3 },
                                            }}
                                        >
                                            {images.map((img) => (
                                                <SwiperSlide key={img.id}>
                                                    <Card
                                                        sx={{
                                                            height: "100%",
                                                            borderRadius: 3,
                                                            overflow: "hidden",
                                                            backgroundColor:
                                                                theme.palette.mode === "dark"
                                                                    ? "#1e1e1e"
                                                                    : "#ffffff",
                                                            border:
                                                                theme.palette.mode === "dark"
                                                                    ? "1px solid rgba(255,255,255,0.08)"
                                                                    : "1px solid rgba(0,0,0,0.08)",
                                                            boxShadow:
                                                                theme.palette.mode === "dark"
                                                                    ? "0 8px 20px rgba(0,0,0,0.5)"
                                                                    : "0 8px 20px rgba(0,0,0,0.12)",
                                                            transition: "all 0.3s ease",
                                                            "&:hover": {
                                                                borderColor: theme.palette.primary.main,
                                                                transform: "translateY(-6px)",
                                                                boxShadow:
                                                                    theme.palette.mode === "dark"
                                                                        ? "0 12px 30px rgba(0,0,0,0.7)"
                                                                        : "0 12px 30px rgba(0,0,0,0.2)",
                                                            },
                                                        }}
                                                    >
                                                        {/* DOWNLOAD BUTTON */}
                                                        <Tooltip title="Download image">
                                                            <IconButton
                                                                onClick={() => handleDownload(img)}
                                                                sx={{
                                                                    position: "absolute",
                                                                    top: 10,
                                                                    right: 10,
                                                                    zIndex: 2,
                                                                    backgroundColor:
                                                                        theme.palette.mode === "dark"
                                                                            ? "rgba(0,0,0,0.6)"
                                                                            : "rgba(255,255,255,0.9)",
                                                                    "&:hover": {
                                                                        backgroundColor: theme.palette.primary.main,
                                                                        color: "#fff",
                                                                    },
                                                                }}
                                                            >
                                                                <DownloadIcon fontSize="small" />
                                                            </IconButton>
                                                        </Tooltip>

                                                        <CardMedia
                                                            component="img"
                                                            image={img.src}
                                                            alt={img.title}
                                                            sx={{
                                                                height: 250,
                                                                objectFit: "cover",
                                                            }}
                                                        />

                                                        <CardContent sx={{ textAlign: "center" }}>
                                                            <Typography fontWeight={600}>{img.title}</Typography>
                                                        </CardContent>
                                                    </Card>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </Box>
                                </Box>
                            ) : id === "reviews" ? (
                                <Box>
                                    <Box sx={{ textAlign: "center", wordBreak: "break-all" }}>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                textAlign: "center",
                                                fontWeight: 700,

                                                /* Responsive font size */
                                                fontSize: {
                                                    xs: "30px",   // mobile
                                                    sm: "24px",   // tablet
                                                    md: "35px",   // desktop
                                                },

                                                /* Allow wrapping on mobile */
                                                whiteSpace: {
                                                    xs: "normal",
                                                    md: "nowrap",
                                                },

                                                background:
                                                    theme.palette.mode === "dark"
                                                        ? "linear-gradient(90deg,#90caf9,#e3f2fd)"
                                                        : "linear-gradient(90deg,#1976d2,#42a5f5)",

                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",

                                                lineHeight: 1.3,
                                            }}
                                        >
                                            What Our Customers Say
                                        </Typography>

                                        <Typography sx={{ mt: 2, fontWeight: 500 }} variant='h6'>Trusted by thousands of satisfied customers in Nandigama</Typography>
                                    </Box>

                                    <Box mb={3} textAlign="end">
                                        <Rating value={5} readOnly precision={0.5} />
                                        <Typography variant="body2" color="text.secondary">
                                            Rated 5.0 based on Google Reviews
                                        </Typography>
                                    </Box>


                                    <Grid container spacing={2}>
                                        {[
                                            {
                                                name: "Rahul Sharma",
                                                rating: 5, comment: "Excellent ceiling work! Very professional finishing. Gyproc quality is top class.",
                                            },
                                            {
                                                name: "Mohammed Asif",
                                                rating: 5, comment: "PVC ceiling installation was perfect. On-time delivery and great workmanship.",
                                            },
                                            {
                                                name: "Suresh Kumar",
                                                rating: 4.5, comment: "Very good service and reasonable pricing. Highly recommended for false ceilings.",
                                            },
                                            {
                                                name: "Imran Khan",
                                                rating: 5, comment: "KGN Ceiling Works is the best. Gyproc Saint-Gobain materials used are genuine.",
                                            },
                                            {
                                                name: "Anjali Verma",
                                                rating: 5, comment: "Clean work, polite staff, and beautiful ceiling design. 100% satisfied!",
                                            },
                                            {
                                                name: "Naaresh",
                                                rating: 5, comment: "Outstanding work with neat and high-quality finishing at a very reasonable price.The staff are highly responsible and delivered excellent, professional service."
                                            }
                                        ].map((review, index) => (
                                            <Grid item size={{ xs: 12, md: 6 }} key={index}>
                                                <Card
                                                    sx={{
                                                        position: "relative",
                                                        borderRadius: 3,
                                                        overflow: "hidden",
                                                        transition: "all 0.35s ease",
                                                        minHeight: 130,
                                                        /* DEFAULT LEFT BORDER */
                                                        borderLeft: "4px solid",
                                                        borderLeftColor:
                                                            theme.palette.mode === "light"
                                                                ? theme.palette.grey[400]        // default soft color
                                                                : "rgba(0,229,255,0.35)",        // soft cyan for dark

                                                        /* LEFT STRIP (HOVER COLOR) */
                                                        "&::before": {
                                                            content: '""',
                                                            position: "absolute",
                                                            left: 0,
                                                            top: 0,
                                                            width: 4,
                                                            height: "100%",
                                                            backgroundColor:
                                                                theme.palette.mode === "light"
                                                                    ? theme.palette.primary.main
                                                                    : "#00e5ff",
                                                            transform: "scaleY(0)",
                                                            transformOrigin: "top",
                                                            transition: "transform 0.35s ease",
                                                        },

                                                        /* RIGHT STRIP (HOVER ONLY) */
                                                        "&::after": {
                                                            content: '""',
                                                            position: "absolute",
                                                            right: 0,
                                                            top: 0,
                                                            width: 4,
                                                            height: "100%",
                                                            backgroundColor:
                                                                theme.palette.mode === "light"
                                                                    ? theme.palette.primary.main
                                                                    : "#00e5ff",
                                                            transform: "scaleY(0)",
                                                            transformOrigin: "bottom",
                                                            transition: "transform 0.35s ease",
                                                        },

                                                        "&:hover": {
                                                            transform: "translateY(-6px)",
                                                            boxShadow:
                                                                theme.palette.mode === "light"
                                                                    ? "0 14px 30px rgba(0,0,0,0.18)"
                                                                    : "0 18px 40px rgba(0,229,255,0.35)",

                                                            /* Enhance left border on hover */
                                                            borderLeftColor:
                                                                theme.palette.mode === "light"
                                                                    ? theme.palette.primary.main
                                                                    : "#00e5ff",
                                                        },

                                                        "&:hover::before": {
                                                            transform: "scaleY(1)",
                                                        },

                                                        "&:hover::after": {
                                                            transform: "scaleY(1)",
                                                        },
                                                    }}
                                                >
                                                    <CardContent>
                                                        <Box display="flex" alignItems="center" mb={1}>
                                                            <Avatar
                                                                sx={{
                                                                    bgcolor: theme.palette.primary.main,
                                                                    mr: 2,
                                                                    fontWeight: 700,
                                                                }}
                                                            >
                                                                {review.name.charAt(0)}
                                                            </Avatar>

                                                            <Box>
                                                                <Typography fontWeight={700}>
                                                                    {review.name}
                                                                </Typography>
                                                                <Rating
                                                                    value={review.rating}
                                                                    precision={0.5}
                                                                    readOnly
                                                                    size="small"
                                                                />
                                                            </Box>
                                                        </Box>

                                                        <Typography
                                                            variant="body2"
                                                            color="text.secondary"
                                                            sx={{ mt: 1 }}
                                                        >
                                                            “{review.comment}”
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            ) : id === "contact" ? (
                                <Box>
                                    <Box sx={{ textAlign: "center", wordBreak: "break-all" }}>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                textAlign: "center",
                                                fontWeight: 700,

                                                /* Responsive font size */
                                                fontSize: {
                                                    xs: "30px",   // mobile
                                                    sm: "24px",   // tablet
                                                    md: "35px",   // desktop
                                                },

                                                /* Allow wrapping on mobile */
                                                whiteSpace: {
                                                    xs: "normal",
                                                    md: "nowrap",
                                                },

                                                background:
                                                    theme.palette.mode === "dark"
                                                        ? "linear-gradient(90deg,#90caf9,#e3f2fd)"
                                                        : "linear-gradient(90deg,#1976d2,#42a5f5)",

                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",

                                                lineHeight: 1.3,
                                            }}
                                        >
                                            Get In Touch
                                        </Typography>

                                        <Typography sx={{ mt: 1.5, fontWeight: 500 }} variant='h6'>Get in touch with us for a free consultation and quote</Typography>
                                    </Box>


                                    <Card
                                        elevation={3}
                                        sx={{
                                            p: { xs: 2, md: 4 },
                                            borderRadius: 3,
                                            mt: 2,
                                            background:
                                                theme.palette.mode === "dark"
                                                    ? "linear-gradient(135deg, #1e1e1e, #2a2a2a)"
                                                    : "linear-gradient(135deg, #ffffff, #f5f7fa)",
                                        }}
                                    >

                                        <Grid container spacing={3}>
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                {/* LEFT – QR CODE */}
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        p: 3,
                                                        borderRadius: 3,
                                                        backgroundColor:
                                                            theme.palette.mode === "dark" ? "#121212" : "#ffffff",

                                                        border: "3px solid",
                                                        borderColor:
                                                            theme.palette.mode === "dark"
                                                                ? "rgba(255,255,255,0.2)"
                                                                : "rgba(0,0,0,0.15)",

                                                        transition: "border-color 0.3s ease, box-shadow 0.3s ease",

                                                        "&:hover": {
                                                            borderColor: theme.palette.primary.main,
                                                            boxShadow:
                                                                theme.palette.mode === "dark"
                                                                    ? "0 10px 30px rgba(0,0,0,0.7)"
                                                                    : "0 10px 30px rgba(0,0,0,0.15)",
                                                        },
                                                    }}
                                                >
                                                    <img
                                                        src={contactQrCode}
                                                        alt="Contact QR Code"
                                                        style={{
                                                            width: 250,
                                                            height: 250,
                                                            objectFit: "contain",
                                                        }}
                                                    />

                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            mt: 2,
                                                            fontWeight: 600,
                                                            color: theme.palette.text.secondary,
                                                        }}
                                                    >
                                                        Scan QR Code 🤳
                                                    </Typography>
                                                </Box>

                                            </Grid>

                                            <Grid item size={{ xs: 12, md: 8 }}>
                                                {/* RIGHT – CONTACT DETAILS */}
                                                <Stack
                                                    spacing={2}
                                                    sx={{
                                                        p: { xs: 2, md: 3 },
                                                        height: 340,
                                                        borderRadius: 3,
                                                        background:
                                                            theme.palette.mode === "dark"
                                                                ? "linear-gradient(135deg,#1e1e1e,#2a2a2a)"
                                                                : "linear-gradient(135deg,#ffffff,#f6f8fc)",
                                                        boxShadow:
                                                            theme.palette.mode === "dark"
                                                                ? "0 8px 24px rgba(0,0,0,0.6)"
                                                                : "0 8px 24px rgba(0,0,0,0.1)",
                                                        borderColor:
                                                            theme.palette.mode === "dark"
                                                                ? "rgba(255,255,255,0.2)"
                                                                : "rgba(0,0,0,0.15)",

                                                        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                                                    }}
                                                >
                                                    <Typography
                                                        variant="h5"
                                                        fontWeight={700}
                                                        sx={{ color: theme.palette.primary.main }}
                                                    >
                                                        Contact Us
                                                    </Typography>

                                                    <Divider />

                                                    {[
                                                        { label: "user", value: "Shaik Abubakar Siddik - Designer Ceiling Contractor", icon: "🙍🏻‍♂️" },
                                                        { label: "Address", value: "S/O Khadar,30-94,Near Old KVR Bus Stand,Nandigama,NTR District AP-521185", icon: "📍" },
                                                        { label: "Phone", value: "9666606417", icon: "📞" },
                                                        { label: "Email", value: "roshansiddiq78@gmail.com", icon: "✉️" },
                                                    ].map((item, index) => (
                                                        <Box
                                                            key={index}
                                                            sx={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 1.5,
                                                                fontSize: 15,
                                                            }}
                                                        >
                                                            <Box component="span" sx={{ fontSize: 18 }}>
                                                                {item.icon}
                                                            </Box>
                                                            <Typography variant="body1">{item.value}</Typography>
                                                        </Box>
                                                    ))}

                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            mt: 1,
                                                            fontStyle: "italic",
                                                            opacity: 0.85,
                                                        }}
                                                    >
                                                        Contact us for a free consultation and quote
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Box>
                            ) : null
                        }
                    </Container>
                )
            }

        </Box>
    )
};

const Sections = () => {

    return (
        <>
            <Section id="home" title="Home" />
            <Section id="services" title="Services" />
            <Section id="about" title="About" />
            <Section id="gallery" title="Gallery" />
            <Section id="reviews" title="Reviews" />
            <Section id="contact" title="Contact" />
        </>
    );
};

export default Sections;