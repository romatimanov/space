import { useEffect } from "react";
import { useAnimate } from "../hook/animate/useAnimate";
import styles from "./contact.module.css";
import { Button } from "@mui/material";
export function Contact() {
  const { animateContact, containerRef } = useAnimate();

  useEffect(() => {
    animateContact();
  }, [animateContact]);

  return (
    <div ref={containerRef} className={`${styles.bgContent} relative `}>
      <div
        style={{ boxShadow: "0 0 30px 0 rgba(0, 0, 0, 0.75)" }}
        className="absolute top-1/4  md:right-56 flex items-center flex-col text-center bg-[#0c0c0c]  rounded-md px-11 py-11"
      >
        <p className="mb-2">Pawia 5, 31-154 Kraków, Poland</p>
        <a className="mb-2" href="mailto:ouremail@gmail.com">
          ouremail@gmail.com
        </a>
        <a className="mb-6" href="tel:+148126287560">
          +48 12 628 75 60
        </a>
        <Button sx={{ width: "70%", marginBottom: "20px" }} variant="contained">
          Bēhance
        </Button>
        <Button
          sx={{
            width: "70%",
            marginBottom: "20px",
            backgroundColor: "#ea4c89",
            ":hover": {
              backgroundColor: "#f57c9c",
            },
          }}
          variant="contained"
        >
          dribbble
        </Button>
        <Button sx={{ width: "70%" }} variant="contained">
          Contact us
        </Button>
      </div>
    </div>
  );
}
