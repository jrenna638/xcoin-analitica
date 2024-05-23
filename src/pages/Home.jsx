import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import '../styles/Home.css'; // Asegúrate de incluir el archivo CSS

function Home() {
    const navbarLinks = [
        { path: '/features', label: 'Características' },
        { path: '/about', label: 'Acerca De' },
        { path: '/contact', label: 'Contacto' }
    ];

    return (
        <div className="Home-container">
            <Navbar links={navbarLinks} />
            <iframe
        title="Analitica-test2"
        width="1140"
        height="541.25"
        src="https://app.powerbi.com/view?r=eyJrIjoiNDhkZDBkMTItNjBjZi00ZDRhLTg2ODItZDZiNzM2Y2JlODM2IiwidCI6IjFjZmQyZGRmLThjMjctNDljZi1hNzU2LWI5NWQ4YzhmZTc3MyJ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe> 
            <Footer />
        </div>
    );
}

export default Home;
