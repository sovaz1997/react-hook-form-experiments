import React from "react";
import { Button, Card, Form } from "@weezevent/nacre";
import { Icon } from "semantic-ui-react";
import { useFormContext } from "react-hook-form";
import FormControls from "../form-controls";
import useI18n from "../../../../../../hooks/useI18n";
import useFormHelpers from "../../hooks/use-form-helpers";
import useEvent from "../../../../../../hooks/useEvent";

const ActionBlock = ({ onRemove, index }) => {
  const event = useEvent();
  const { t } = useI18n();

  const { watch, currencies } = useFormContext();
  const { getName } = useFormHelpers();
  const currency = watch(getName("currency"));

  const selectedCurrency = currencies?.find((cur) => cur.id === currency);

  const currencyOptions = React.useMemo(
    () => currencies
      .filter((cur) => cur.id !== 1)
      .sort((a, b) => ((b.group_details?.priority || 0) - (a.group_details?.priority || 0)))
      .map((cur) => ({
        value: cur.id,
        text: `${cur.name} (${cur?.group_details?.symbol})`,
      })),
    [currencies],
  );

  return (
    <Card
      openByDefault
      disableToggle
      className="wz-p-scenarios-page-action-top-up"
    >
      <Card.Header className="wz-p-scenarios-page-action-top-up__header">
        <Card.Title>
          { t("views.config.scenarios.action.top_up.index", { index }) }
        </Card.Title>
        <Button
          basic
          onClick={onRemove}
        >
          {t("views.config.scenarios.action.top_up.cta_remove")}
        </Button>
      </Card.Header>
      <Card.Content className="wz-p-scenarios-page-action-top-up__content">
        <div className="wz-g-remove-nacre-field-block-margin">
          <FormControls.SelectLabel
            name="currency"
            label={t("views.config.scenarios.action.top_up.currency")}
            options={currencyOptions}
            rightIcon={<Icon name="chevron down" />}
            required
          />
        </div>
        <div className="wz-g-remove-nacre-field-block-margin">
          <Form.Field>
            <Form.Label required>{t("views.config.scenarios.action.top_up.amount")}</Form.Label>
            <FormControls.CurrencyInput
              name="amount"
              locale={event.defaultLocale}
              symbol={selectedCurrency?.group_details?.symbol || " "}
              numberDecimals={selectedCurrency?.group_details?.nb_decimal}
            />
          </Form.Field>
        </div>
      </Card.Content>
    </Card>
  );
};

export default ActionBlock;
