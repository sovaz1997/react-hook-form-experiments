import { Icon } from "semantic-ui-react";
import React from "react";
import { useFormContext } from "react-hook-form";
import FormControls from "../form-controls";
import useI18n from "../../../../../../hooks/useI18n";
import TriggerTopUpBlock from "../trigger-top-up-block";
import FormBlock from "../form-block";
import useFormHelpers from "../../hooks/use-form-helpers";

const TriggerTypes = {
  TOP_UP: "topUp",
  SALE_OFFLINE: "sale",
};

const TriggerBlock = () => {
  const { t } = useI18n();

  const { getName } = useFormHelpers();
  const { watch } = useFormContext();

  const triggerType = watch(getName("type"));

  const triggerTypeOptions = React.useMemo(
    () => [
      {
        value: TriggerTypes.TOP_UP,
        text: t("views.config.scenarios.type_top_up"),
      },
      {
        value: TriggerTypes.SALE_OFFLINE,
        text: t("views.config.scenarios.type_sale"),
      },
    ],
    [t],
  );

  return (
    <div>
      <FormControls.SelectLabel
        name="type"
        label={t("views.config.scenarios.type")}
        options={triggerTypeOptions}
        rightIcon={<Icon name="chevron down" />}
        defaultValue={TriggerTypes.TOP_UP}
      />
      {triggerType === TriggerTypes.TOP_UP && (
      <FormBlock name={TriggerTypes.TOP_UP}>
        <TriggerTopUpBlock />
      </FormBlock>
      )}
    </div>
  );
};

export default TriggerBlock;
