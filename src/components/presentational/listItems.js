import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import KitchenIcon from "@material-ui/icons/Kitchen";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DescriptionIcon from "@material-ui/icons/Description";
import Badge from "@material-ui/core/Badge";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <KitchenIcon />
      </ListItemIcon>
      <ListItemText primary="냉장고 관리" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DescriptionIcon />
      </ListItemIcon>
      <ListItemText primary="나의 레시피" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </ListItemIcon>
      <ListItemText primary="나의 장바구니" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="레시피 둘러보기" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>최근 조회한 레시피</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="우동" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="돼지고기 불백" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="콩나물국" />
    </ListItem>
  </div>
);
