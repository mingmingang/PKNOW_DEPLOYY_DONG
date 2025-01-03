import React from "react";
import Slider from "react-slick";
import "../../../style/BerandaProdi.css"; // Custom CSS for styling
import maskotP4 from "../../../assets/backBeranda/MaskotP4.png";
import maskotTPM from "../../../assets/backBeranda/maskotTPM.png";
import maskotMI from "../../../assets/backBeranda/MaskotMI.png";
import maskotMO from "../../../assets/backBeranda/MaskotMO.png";
import maskotMK from "../../../assets/backBeranda/MaskotMK.png";
import maskotTKBG from "../../../assets/backBeranda/MaskotTKBG.png";
import maskotTRPAB from "../../../assets/backBeranda/MaskotTRPAB.png";
import maskotTRL from "../../../assets/backBeranda/MaskotTRL.png";
import maskotTRPL from "../../../assets/backBeranda/MaskotTRPL.png";
import backgroundP4 from "../../../assets/BackBeranda/BackgroundP4.png";
import backgroundTPM from "../../../assets/BackBeranda/BackgroundTPM.png";
import backgroundMI from "../../../assets/BackBeranda/BackgroundMI.png";
import backgroundMO from "../../../assets/BackBeranda/BackgroundMO.png";
import backgroundMK from "../../../assets/BackBeranda/BackgroundMK.png";
import backgroundTKBG from "../../../assets/BackBeranda/BackgroundTKBG.png";
import backgroundTRPAB from "../../../assets/BackBeranda/BackgroundTRPAB.png";
import backgroundTRL from "../../../assets/BackBeranda/BackgroundTRL.png";
import backgroundTRPL from "../../../assets/BackBeranda/BackgroundTRPL.png";

export default function Prodi() {
  const handleKnowledgeDatabase = () => {
    window.location.replace("/daftar_pustaka"); // Redirect to login page
}

  const slidesData = [
    {
      title: "Program Studi Teknik Produksi Dan Proses Manufaktur",
      subtitle:
        "“Sistem Manajemen Pengetahuan ini akan membantu Anda belajar lebih efisien. Mari kita mulai dengan menjelajahi fitur-fitur yang tersedia dengan mengakses menu yang disediakan.”",
      buttonText: "Knowledge Database",
      backgroundImage: backgroundP4, // Unique background image for this slide
      mascot: maskotP4,
    },
    {
      title: "Teknik Produksi dan Proses Manufaktur",
      subtitle:
        "Sistem Manajemen Pengetahuan ini akan membantu Anda belajar lebih efisien. Mari kita mulai dengan menjelajahi fitur-fitur yang tersedia dengan mengakses menu yang disediakan.”",
      buttonText: "Knowledge Database",
      backgroundImage: backgroundTPM, // Unique background image for this slide
      mascot: maskotTPM,
    },
    {
      title: "Manajemen Informatika",
      subtitle:
        "Sistem Manajemen Pengetahuan ini akan membantu Anda belajar lebih efisien. Mari kita mulai dengan menjelajahi fitur-fitur yang tersedia dengan mengakses menu yang disediakan.”",
      buttonText: "Knowledge Database",
      backgroundImage: backgroundMI, // Unique background image for this slide
      mascot: maskotMI,
    },
    {
      title: "Mesin Otomotif",
      subtitle:
        "Sistem Manajemen Pengetahuan ini akan membantu Anda belajar lebih efisien. Mari kita mulai dengan menjelajahi fitur-fitur yang tersedia dengan mengakses menu yang disediakan.”",
      buttonText: "Knowledge Database",
      backgroundImage: backgroundMO, // Unique background image for this slide
      mascot: maskotMO,
    },
    {
      title: "Mekatronika",
      subtitle:
        "“Sistem Manajemen Pengetahuan ini akan membantu Anda belajar lebih efisien. Mari kita mulai dengan menjelajahi fitur-fitur yang tersedia dengan mengakses menu yang disediakan.”",
      buttonText: "Knowledge Database",
      backgroundImage: backgroundMK, // Unique background image for this slide
      mascot: maskotMK,
    },
    {
      title: "Teknologi Konstruksi Bangunan Gedung",
      subtitle:
        "“Sistem Manajemen Pengetahuan ini akan membantu Anda belajar lebih efisien. Mari kita mulai dengan menjelajahi fitur-fitur yang tersedia dengan mengakses menu yang disediakan.”",
      buttonText: "Knowledge Database",
      backgroundImage: backgroundTKBG, // Unique background image for this slide
      mascot: maskotTKBG,
    },
    {
      title: "Teknologi Rekayasa Pemeliharaan Alat Berat",
      subtitle:
        "“Sistem Manajemen Pengetahuan ini akan membantu Anda belajar lebih efisien. Mari kita mulai dengan menjelajahi fitur-fitur yang tersedia dengan mengakses menu yang disediakan.”",
      buttonText: "Knowledge Database",
      backgroundImage: backgroundTRPAB, // Unique background image for this slide
      mascot: maskotTRPAB,
    },
    {
      title: "Teknologi Rekayasa Logistik",
      subtitle:
        "“Sistem Manajemen Pengetahuan ini akan membantu Anda belajar lebih efisien. Mari kita mulai dengan menjelajahi fitur-fitur yang tersedia dengan mengakses menu yang disediakan.”",
      buttonText: "Knowledge Database",
      backgroundImage: backgroundTRL, // Unique background image for this slide
      mascot: maskotTRL,
    },
    {
      title: "Teknologi Rekayasa Perangkat Lunak",
      subtitle:
        "“Sistem Manajemen Pengetahuan ini akan membantu Anda belajar lebih efisien. Mari kita mulai dengan menjelajahi fitur-fitur yang tersedia dengan mengakses menu yang disediakan.”",
      buttonText: "Knowledge Database",
      backgroundImage: backgroundTRPL, // Unique background image for this slide
      mascot: maskotTRPL,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1300,
  };

  return (
    <div className="slider-container">
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className="slide"
        >
          <div className="content-wrapper" style={{ backgroundImage: `url(${slide.backgroundImage})` }} >
            <div className="text-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button className="action-button" onClick={handleKnowledgeDatabase}>{slide.buttonText}</button>
            </div>
            <div className="mascot">
              <img src={slide.mascot} alt="Mascot" />
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
}
