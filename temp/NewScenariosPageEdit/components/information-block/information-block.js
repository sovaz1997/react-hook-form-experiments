import { Form, FrameCard } from "@weezevent/nacre";
import React from "react";
import useEvent from "../../../../../../hooks/useEvent";
import useI18n from "../../../../../../hooks/useI18n";
import OptionalLabel from "../../../OptionalLabel";
import FormControls from "../form-controls";

const InformationBlock = () => {
  const event = useEvent();
  const { t } = useI18n();

  const DESCRIPTION_MAX_LEN = 300;

  return (
    <FrameCard
      title={t("views.config.scenarios.edit.card.information")}
    >
      <FormControls.TranslatableInput
        name="publicName"
        label={t("views.config.scenarios.public_name")}
        allowedLocales={event.allowedLocales}
        defaultLocale={event.defaultLocale}
        defaultLabel={t("views.global.default_language_selector")}
        as={Form.Input}
      />
      <FormControls.TranslatableInput
        name="description"
        label={<OptionalLabel label={t("views.config.scenarios.description")} />}
        allowedLocales={event.allowedLocales}
        defaultLocale={event.defaultLocale}
        defaultLabel={t("views.global.default_language_selector")}
        TextAreaProps={{
          placeholder: t(
            "views.config.scenarios.description_placeholder",
            { length: DESCRIPTION_MAX_LEN },
          ),
          maxlength: DESCRIPTION_MAX_LEN,
        }}
        resize="vertical"
      />
    </FrameCard>
  );
};

export default InformationBlock;
