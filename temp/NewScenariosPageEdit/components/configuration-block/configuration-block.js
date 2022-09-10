import React from "react";
import { FrameCard } from "@weezevent/nacre";
import FormControls from "../form-controls";
import useI18n from "../../../../../../hooks/useI18n";
import FormBlock from "../form-block";
import TriggerBlock from "../trigger-block";

const ConfigurationBlock = () => {
  const { t } = useI18n();

  return (
    <FrameCard
      title={t("views.config.scenarios.edit.card.description")}
    >
      <FormControls.ToggleLabel
        name="enabled"
        inlinePosition="left"
        label={t("views.config.scenarios.edit.enabled")}
        mini
      />
      <FormBlock name="trigger">
        <TriggerBlock />
      </FormBlock>
    </FrameCard>
  );
};

export default ConfigurationBlock;
