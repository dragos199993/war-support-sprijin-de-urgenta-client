import Checkbox from "@/components/Form/Checkbox";
import { useTranslation } from "react-i18next";
import {ChangeEvent, FC, useState} from "react";
import Textarea from "@/components/Form/Textarea";
import clsx from "clsx";

interface IProps {
  name: string;
  value: string;
  forceVisible?: boolean;
}

const CheckboxWithDescription: FC<IProps> = ({
  name,
  value,
  children,
  ...rest
}) => {
  const [descriptionDialogOpen, setDescriptionDialogOpen] = useState(false);

  const { t } = useTranslation();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setDescriptionDialogOpen(checked);
  }

  return (
    <>
      <Checkbox
        name={name}
        value={value}
        onChange={onChange}
      >
        {children}
      </Checkbox>

      {descriptionDialogOpen && (
        <Textarea
          label={t('signup.volunteering.description')}
          name={`volunteering_resource_${value}_description`}
          className={clsx('ml-5')}
        />
      )}
    </>
  );
}

export default CheckboxWithDescription;