import {
  createStyles,
  Switch,
  SwitchClassKey,
  SwitchProps,
  Theme,
  withStyles,
} from "@material-ui/core";
interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}
interface Props extends SwitchProps {
  classes: Styles;
}
const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 30,
      height: 26,
      padding: "0 0 5px 0",
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(10px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: "#70B603",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#52d869",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 17,
      height: 17,
      marginTop: "1px",
    },
    track: {
      borderRadius: 20 / 2,
      border: "none",
      backgroundColor: "#454B4D",
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  })
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});
export default IOSSwitch;
