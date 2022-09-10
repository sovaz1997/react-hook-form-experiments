import { Form, Icon } from "@weezevent/nacre";
import React from "react";
import { useFormContext } from "react-hook-form";
import FormControls from "../form-controls";
import useI18n from "../../../../../../hooks/useI18n";
import useEvent from "../../../../../../hooks/useEvent";
import ActionsFieldArray from "../actions-field-array";

const TriggerTopUpBlock = () => {
  const { currencies } = useFormContext();
  const { t } = useI18n();
  const event = useEvent();

  const triggerComparisonModeOptions = React.useMemo(
    () => [
      {
        value: "including_min",
        text: t("views.config.scenarios.comparaison_mode.including_min"),
      },
      {
        value: "including_max",
        text: t("views.config.scenarios.comparaison_mode.including_max"),
      },
      {
        value: "including_min_max",
        text: t("views.config.scenarios.comparaison_mode.including_min_max"),
      },
    ],
    [t],
  );

  const currency1 = currencies?.find((currency) => currency.id === 1);

  return (
    <div className="wz-p-scenarios-page-trigger-top-up">
      <div>
        <FormControls.SelectLabel
          name="comparisonMode"
          label={t("views.config.scenarios.comparaison_mode")}
          options={triggerComparisonModeOptions}
          rightIcon={<Icon name="chevron down" />}
        />
      </div>
      <div className="wz-g-remove-nacre-field-block-margin">
        <Form.Field>
          <Form.Label>{t("views.config.scenarios.trigger.top_up.min_amount")}</Form.Label>
          <div className="wz-p-scenarios-page-trigger-top-up__top-up-range">
            <FormControls.CurrencyInput
              name="minAmount"
              locale={event.defaultLocale}
              symbol={currency1?.group_details?.symbol || "currency1"}
              numberDecimals={currency1?.group_details?.nb_decimal}
            />
            <div className="wz-p-scenarios-page-trigger-top-up__arrow">
              <Icon name="chevron-right" />
            </div>
            <FormControls.CurrencyInput
              name="maxAmount"
              locale={event.defaultLocale}
              symbol={currency1?.group_details?.symbol || "currency1"}
              numberDecimals={currency1?.group_details?.nb_decimal}
            />
          </div>
        </Form.Field>
        <ActionsFieldArray name="actions" />
      </div>
    </div>
  );
};

export default TriggerTopUpBlock;
