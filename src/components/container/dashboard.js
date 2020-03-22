import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import CardLayout from "../presentational/CardLayout";
import SideBarLayout from "../presentational/SideBar";
import HeaderBarLayout from "../presentational/HeaderBar";
import IngredientIcon from "../presentational/IngredientIcon";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const user = "김선주";
const ingredients = [
  // {
  //   id: ingredient_id,
  //   name: "ingredient_name",
  //   limittime: 일수
  // }
  {
    id: 1,
    name: "대파",
    limittime: 1
  },
  {
    id: 2,
    name: "오뎅",
    limittime: 1
  },
  {
    id: 3,
    name: "감자",
    limittime: 1
  },
  {
    id: 4,
    name: "간마늘",
    limittime: 1
  },
  {
    id: 5,
    name: "프랑크소세지",
    limittime: 1
  },
  {
    id: 6,
    name: "김치",
    limittime: 1
  },
  {
    id: 7,
    name: "단무지",
    limittime: 1
  },
  {
    id: 8,
    name: "팽이버섯",
    limittime: 1
  },
  {
    id: 9,
    name: "돼지고기",
    limittime: 1
  },
  {
    id: 10,
    name: "오리고기",
    limittime: 1
  },
  {
    id: 11,
    name: "쌈채소",
    limittime: 1
  }
];
const cards = [
  {
    id: 1,
    title: "된장국",
    content: "재료 ",
    time: 30,
    needingredient: ["a", "b", "c"]
  },
  {
    id: 2,
    title: "우동",
    content: "재료 ",
    time: 20,
    needingredient: ["a", "b"]
  },
  {
    id: 3,
    title: "라면",
    content: "재료",
    time: 40,
    needingredient: ["a", "b", "c"]
  },
  {
    id: 4,
    title: "주먹밥",
    content: "재료",
    time: 50,
    needingredient: ["a", "b"]
  },
  {
    id: 5,
    title: "배추전",
    content: "재료",
    time: 10,
    needingredient: ["a", "b", "c", "c"]
  },
  {
    id: 6,
    title: "어묵탕",
    content: "재료",
    time: 10,
    needingredient: ["a", "b", "c", "c"]
  },
  {
    id: 7,
    title: "갈비찜",
    content: "재료",
    time: 50,
    needingredient: ["a", "b", "c", "c", "c"]
  },
  {
    id: 8,
    title: "콩나물국",
    content: "재료",
    time: 30,
    needingredient: ["a", "b", "c"]
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  title: {
    flexGrow: 1,
    fontFamily: "NanumBarunGothic",
    fontSize: 25
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderBarLayout
        user={user}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <SideBarLayout open={open} handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <IngredientIcon ingredients={ingredients} />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper} />
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <CardLayout cards={cards} />
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
