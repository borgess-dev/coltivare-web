
import { makeStyles, Button } from "@fluentui/react-components";
import {
  bundleIcon,
  CalendarMonthFilled,
  CalendarMonthRegular,
} from "@fluentui/react-icons";

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
  },
});

export const Appearance = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <Button icon={<CalendarMonthRegular />}>Default</Button>
      <Button appearance="primary" icon={<CalendarMonthRegular />}>
        Primary
      </Button>
      <Button appearance="outline" icon={<CalendarMonth />}>
        Outline
      </Button>
      <Button appearance="subtle" icon={<CalendarMonth />}>
        Subtle
      </Button>
      <Button appearance="transparent" icon={<CalendarMonth />}>
        Transparent
      </Button>
    </div>
  );
};