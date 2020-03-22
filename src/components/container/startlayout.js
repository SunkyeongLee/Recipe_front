import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardLayout from "../presentational/CardLayout.js";
import FooterLayout from "../presentational/FooterLayout.js";
import HeroUnitLayout from "../presentational/HeroUnitLayout.js";
import AppBarLayout from "../presentational/AppBarLayout.js";

const appBarTitle = "Queens Album";

const heroTitle = "Queens Album";
const heroContent = "Introduce Queens Members ";

const cards = [
  {
    id: 1,
    title: "지언",
    content: "medikim3551@gmail.com"
  },
  {
    id: 2,
    title: "선주",
    content: "sunjukkim@gmail.com"
  },
  {
    id: 3,
    title: "선경",
    content: "sunkyong9768@gmail.com"
  },
  {
    id: 4,
    title: "종현",
    content: "green198800@yonsei.ac.kr"
  },
  {
    id: 5,
    title: "이수",
    content: "ji.deveng@gmail.com"
  }
];

const footerTitle = "Queens";
const footerContent = "https://github.com/Ji-Eon/Queen_Recipe";

export default function Album() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBarLayout appBarTitle={appBarTitle} />
      <main>
        {/* Hero unit */}
        <HeroUnitLayout heroTitle={heroTitle} heroContent={heroContent} />
        <CardLayout cards={cards} />
      </main>
      {/* Footer */}
      <FooterLayout footertitle={footerTitle} footercontent={footerContent} />
      {/* End footer */}
    </React.Fragment>
  );
}
