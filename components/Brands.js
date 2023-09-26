import styles from "../styles/Brands.module.css";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

/// brands components
export default function Brands() {
  const router = useRouter();

  const images = [
    {
      source:
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      title: "samsung",
    },
    {
      source:
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg",
      title: "asus",
    },
    {
      source:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/768px-HP_New_Logo_2D.svg.png",
      title: "hp",
    },
    {
      source:
        "https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg",
      title: "logitech",
    },
    {
      source:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/Logo_Razer_2017.png",
      title: "razer",
    },
  ];

  // function for search brand products
  function toSearchPage(props) {
    router.push({ pathname: "./search", query: { parameter: props.title } });
  }

  // brand logos
  const brands = images.map((image, i) => {
    return (
      <div
        className={styles.imageContainer}
        key={i}
        onClick={() => toSearchPage(image)}
      >
        <img key={i} src={image.source} className={styles.image} />
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Typography
          className={styles.title}
          sx={{
            fontSize: "26px",
            margin: "10px 0px 50px 24px",
            fontWeight: "400",
            color:'#2e3436'
          }}
        >
          Brands
        </Typography>
      </div>

      <div className={styles.brands}>{brands}</div>
    </div>
  );
}
