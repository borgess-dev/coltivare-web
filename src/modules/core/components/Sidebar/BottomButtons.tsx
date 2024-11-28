import { Button, Tooltip } from '@fluentui/react-components';
import {
  bundleIcon,
  SignOutFilled,
  SignOutRegular,
  Settings20Filled,
  Settings20Regular,
} from '@fluentui/react-icons';

const SignOut = bundleIcon(SignOutFilled, SignOutRegular);
const Settings = bundleIcon(Settings20Filled, Settings20Regular);

export function BottomButtons() {
  return (
    <>
      <Tooltip
        positioning="after"
        withArrow
        appearance="inverted"
        content="Configurações"
        relationship="label"
      >
        <Button
          size="large"
          appearance="subtle"
          icon={<Settings></Settings>}
        ></Button>
      </Tooltip>
      <Tooltip
        positioning="after"
        withArrow
        appearance="inverted"
        content="Sair"
        relationship="label"
      >
        <Button
          size="large"
          appearance="subtle"
          icon={<SignOut></SignOut>}
        ></Button>
      </Tooltip>
    </>
  );
}
