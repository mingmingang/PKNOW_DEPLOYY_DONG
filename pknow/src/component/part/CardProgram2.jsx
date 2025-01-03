import React, { useState } from "react";
import Button from "./Button copy";
import CardKategoriProgram from "./CardKategoriProgram2";
import Icon from "./Icon";
import AppContext_test from "../page/Materi/master-test/TestContext";

const MAX_DESCRIPTION_LENGTH = 200; // Sesuaikan dengan panjang maksimum yang diinginkan

const CardProgram = ({ program, onChangePage }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [expandDeskripsi, setExpandDeskripsi] = useState(false);
  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };
  AppContext_test.KeyKelompokKeahlian = program["Kode KK"];
  const handleExpandDescription = () => {
    setExpandDeskripsi(!expandDeskripsi);
  };

  return (
    <div
      className={`card card-program mt-3 ${
        isContentVisible ? "border-primary" : ""
      }`}
    >
      <div
        className={`card-body d-flex justify-content-between ${
          isContentVisible
            ? "align-items-center border-bottom border-primary"
            : ""
        }`}
      >
        <div className="">
          <p
            className="fw-medium mb-0"
            style={{
              width: "100%",
              background: "#ABCCFF",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            {program["Nama Program"]}
          </p>
          <p
            className="mb-0 mt-2"
            style={{
              width: "100%",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              fontSize: "15px",
              maxHeight: expandDeskripsi ? "none" : "75px",
              overflow: "hidden",
              textAlign: "justify",
              lineHeight: "25px",
            }}
          >
            {program.Deskripsi.length > MAX_DESCRIPTION_LENGTH &&
            !expandDeskripsi ? (
              <>
                {program.Deskripsi.slice(0, MAX_DESCRIPTION_LENGTH) + " ..."}
                <a
                  className="btn btn-link text-decoration-none p-0"
                  onClick={handleExpandDescription}
                  style={{ fontSize: "12px" }}
                >
                  Baca Selengkapnya <Icon name={"caret-down"} />
                </a>
              </>
            ) : (
              <>
                {program.Deskripsi}
                {expandDeskripsi && (
                  <a
                    className="btn btn-link text-decoration-none p-0"
                    onClick={handleExpandDescription}
                    style={{ fontSize: "12px" }}
                  >
                    Tutup <Icon name={"caret-up"} />
                  </a>
                )}
              </>
            )}
          </p>
        </div>
        <div className="ps-3">
          <Button
            iconName={isContentVisible ? "caret-up" : "caret-down"}
            classType=""
            onClick={toggleContentVisibility}
            title="Detail Program"
            style={{
              background: "white",
              color: "#0A5EA8",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
              fontSize: "25px",
              padding: "5px 10px",
              borderRadius:"10px"
            }}
          />
        </div>
      </div>
      {isContentVisible && (
        <>
          <div className="">
            <p
              className="ml-3 mt-4"
              style={{
                color: "#0A5EA8",
                fontWeight: "600",
                margin: "10px 0px",
              }}
            >
              Daftar Kategori Program
            </p>
          </div>
          <div className=" card-kategori-program-container">
            {program.categories.map((kategori) => (
              <CardKategoriProgram
                key={kategori.Key}
                kategori={kategori}
                onChangePage={onChangePage}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardProgram;
