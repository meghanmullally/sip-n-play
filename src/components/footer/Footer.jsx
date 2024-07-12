import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import './footer.css';

function Footer() {
    return (
        <Box
            component="footer"
            className='footer'
        >
            <Box className="footer-icons">
                <IconButton
                    size="medium"
                    aria-label="instagram"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    href="https://www.instagram.com/sipnplaynyc"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon />
                </IconButton>
                <IconButton
                    size="medium"
                    aria-label="tiktok"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    href="https://www.tiktok.com/@sipnplaynycofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src='/assets/logos/tik-tok.png' alt="tiktok logo" style={{width: '20px', height: 'auto'}}/>
                </IconButton>
            </Box>
            <IconButton
                    size="medium"
                    aria-label="tiktok"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    href="mailto:sipnplaynyc@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MailOutlineIcon/>
            </IconButton>
            <IconButton
                size='medium'
                aria-label="phone"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
            >
            <PhoneOutlinedIcon/>
            </IconButton>
            <p className="footer-contact">718-971-1684</p>
            <p className="footer-contact">©2024 by Sip & Play</p>
        </Box>
    );
}

export default Footer;