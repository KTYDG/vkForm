import { useState } from "react";
import { View, Panel, PanelHeader, Group, CellButton } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import NameFormPage from "~pages/nameForm";
import CatFactPage from "~pages/catFact";

function RouterProvider() {
  const [activePanel, setActivePanel] = useState("panel1");

  return (
    <View activePanel={activePanel}>
      <Panel id="panel1">
        <PanelHeader>Блок с кнопкой и текстовым полем</PanelHeader>
        <CellButton onClick={() => setActivePanel("panel2")}>
          К форме
        </CellButton>
        <Group>
          <div className="h-48" />
          <CatFactPage />
          <div className="h-48" />
        </Group>
      </Panel>
      <Panel id="panel2">
        <PanelHeader>Форма с текстовым полем и формой отправки</PanelHeader>
        <CellButton onClick={() => setActivePanel("panel1")}>
          К фактам
        </CellButton>
        <Group>
          <div className="h-48" />
          <NameFormPage />
          <div className="h-48" />
        </Group>
      </Panel>
    </View>
  );
}

export default RouterProvider;
