import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Chip,
  TextField,
  Divider,
  Box,
  Button,
  AccordionActions,
} from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const Myorders = ({ car, users }) => {
  const [progress, setprogress] = useState(null);

  const classes = useStyles();
  return (
    <div>
      <h1>My orders</h1>
      {car.map((tile) => (
        <Accordion variant="secondary">
          <AccordionSummary aria-controls="panel1c-content" id="panel1c-header">
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                <b>Car Registration</b>:{tile.carReg}
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                <b>Owner Name:</b>
                {
                  users.data.find((user) => {
                    return user._id === tile.ownerId;
                  }).name
                }
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                <Avatar
                  alt="G"
                  src={
                    users.data.find((user) => {
                      return user._id === tile.ownerId;
                    }).profilePicture
                  }
                  style={{ float: "right" }}
                />
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            {tile.services.map((item) => (
              <div className={classes.column}>
                <Chip label={item} onDelete={() => {}} />
              </div>
            ))}

            <div className={clsx(classes.column, classes.helper)}>
              <Typography variant="caption">
                <h2>Progress</h2>
                {tile.status ? (
                  <CircularProgressWithLabel value={tile.status} />
                ) : (
                  <TextField
                    id="outlined-basic"
                    label="Progress 1-100"
                    type="number"
                    variant="outlined"
                    onChange={(e) => setprogress(e.target.value)}
                  />
                )}
              </Typography>
            </div>
          </AccordionDetails>
          <Divider />
          <AccordionActions>
            <Button size="small" color="primary">
              <Link to={`/updateProgress/${progress}`}>Save</Link>
            </Button>
          </AccordionActions>
        </Accordion>
      ))}
    </div>
  );
};

export default Myorders;
