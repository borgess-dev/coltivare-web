import {
  makeStyles,
  Button,
  Tooltip,
  tokens,
} from '@fluentui/react-components';
import type { TooltipProps } from '@fluentui/react-components';
import {
  bundleIcon,
  SignOutFilled,
  SignOutRegular,
  Settings20Filled,
  Settings20Regular,
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  button: {
    border: 'none',
    ':hover': {
      color: tokens.colorStatusDangerForeground3,
    },
    ':hover:active': {
      color: tokens.colorStatusDangerForeground1,
    },
  },
});

const SignOut = bundleIcon(SignOutFilled, SignOutRegular);
const Settings = bundleIcon(Settings20Filled, Settings20Regular);

export function BottomButtons(props: Partial<TooltipProps>) {
  const styles = useStyles();
  return (
    <>
      <Tooltip
        positioning='after'
        withArrow
        appearance='inverted'
        content='Configurações'
        relationship='label'
      >
        <Button
          size='large'
          appearance='transparent'
          icon={<Settings></Settings>}
        ></Button>
      </Tooltip>
      <Tooltip
        positioning='after'
        withArrow
        appearance='inverted'
        content='Sair'
        relationship='label'
        {...props}
      >
        <Button
          className={styles.button}
          size='large'
          appearance='transparent'
          icon={<SignOut />}
        ></Button>
      </Tooltip>
    </>
  );
}
