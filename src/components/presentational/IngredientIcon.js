import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function IngredientIcon({ ingredients }) {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const useStyles = makeStyles(theme => ({
    chip: {
      margin: theme.spacing(0.5)
    }
  }));
  const classes = useStyles();
  return (
    <div>
      {ingredients.map(ingredient => (
        <Chip
          label={ingredient.name}
          onDelete={handleDelete}
          color="primary"
          variant="outlined"
          className={classes.chip}
        />
      ))}
      <Chip
        label="추가"
        onDelete={handleClick}
        color="secondary"
        deleteIcon={<AddCircleIcon color="primary" />}
        variant="outlined"
        className={classes.chip}
      />
    </div>
  );
}
export default IngredientIcon;
