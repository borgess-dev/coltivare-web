import { Tab, Tooltip } from '@fluentui/react-components';
import { SetIcon } from './Icons';

export function RenderTabs() {
  return (
    <>
      <Tooltip
        positioning="after"
        withArrow
        appearance="inverted"
        content="Mapa"
        relationship="label"
      >
        <Tab className="h-10" icon={<SetIcon iconType="map" />} value="mapa" />
      </Tooltip>

      <Tooltip
        positioning="after"
        withArrow
        appearance="inverted"
        content="Cadastros"
        relationship="label"
      >
        <Tab
          className="h-10"
          icon={<SetIcon iconType="collectionsAdd" />}
          value="cadastros"
        />
      </Tooltip>
      <Tooltip
        positioning="after"
        withArrow
        appearance="inverted"
        content="Planejamento"
        relationship="label"
      >
        <Tab
          className="h-10"
          icon={<SetIcon iconType="layer" />}
          value="planejamento"
        />
      </Tooltip>
      <Tooltip
        positioning="after"
        withArrow
        appearance="inverted"
        content="Ordens de Serviço"
        relationship="label"
      >
        <Tab
          className="h-10"
          icon={<SetIcon iconType="clipboardTaskListLtr" />}
          value="os"
        />
      </Tooltip>
      <Tooltip
        positioning="after"
        withArrow
        appearance="inverted"
        content="Relatórios"
        relationship="label"
      >
        <Tab
          className="h-10"
          icon={<SetIcon iconType="dataBarVertical" />}
          value="relatorios"
        />
      </Tooltip>
    </>
  );
}
