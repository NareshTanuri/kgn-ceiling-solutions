import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        pt: 8,
        pb: 3,
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
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* BRAND INFO */}
          <Grid item size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              KGN Ceiling Works
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
              Your trusted ceiling experts in Nandigama. We provide professional
              POP, Gypsum, PVC & Grid ceiling solutions with modern designs and
              quality craftsmanship.
            </Typography>

            <Stack direction="row" spacing={1.5} mt={2}>
              <IconButton href="https://www.facebook.com/KgnFalseCeiling/" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://www.instagram.com/kgnceilingworks/" target="_blank">
                <InstagramIcon />
              </IconButton>
              <IconButton href={`https://api.whatsapp.com/send/?phone=91${9666606417}&text&type=phone_number&app_absent=0`} target="_blank">
                <WhatsAppIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {[
                { label: 'Home', id: 'home' },
                { label: 'Services', id: 'services' },
                { label: 'About', id: 'about' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Reviews', id: 'reviews' },
                { label: 'Contact', id: 'contact' },
              ].map(
                (item) => (
                  <Typography
                    onClick={() => handleScroll(item.id)}
                    key={item}
                    variant="body2"
                    sx={{
                      cursor: "pointer",
                      opacity: 0.9,
                      "&:hover": { opacity: 1, textDecoration: "underline" },
                    }}
                  >
                    {item.label}
                  </Typography>
                )
              )}
            </Stack>
          </Grid>

          {/* SERVICES */}
          <Grid item size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Our Services
            </Typography>
            <Stack spacing={1}>
              {[
                "POP Ceiling",
                "Gypsum Ceiling",
                "PVC Ceiling",
                "Grid Ceiling",
                "False Ceiling Designs",
              ].map((service) => (
                <Typography
                  key={service}
                  variant="body2"
                  sx={{ opacity: 0.9 }}
                >
                  {service}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* CONTACT INFO */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Contact Info
            </Typography>

            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Nandigama, Andhra Pradesh
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon fontSize="small" />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  +91 9666606417
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon fontSize="small" />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  kgnceilingworks@gmail.com
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, opacity: 0.5 }} />

        {/* COPYRIGHT */}
        <Typography
          variant="body2"
          align="center"
          sx={{ opacity: 0.85 }}
        >
          © {new Date().getFullYear()} KGN Ceiling Works. Designed & Developed by{" "}
          <strong>Naresh Tanuri</strong> (Full Stack Developer) <br /> | 📞 +91 9347081115 | ✉️ nareshtanuri8@gmail.com |
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
