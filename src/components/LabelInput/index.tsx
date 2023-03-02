import React, { useEffect, useState } from "react";
import s from "./styles.module.scss";
import {
  AiOutlineCheck as Valid,
  AiOutlineClose as NotValid,
} from "react-icons/ai";
import { LabelInputProps } from "./types";

const LabelInput: React.FC<LabelInputProps> = ({
  children,
  value,
  obligatoryValid = false,
  className,
  regExp,
  isValid = true,
  setDataValid,
}) => {
  const [formatValid, setFormatValid] = useState(false);
  const [focus, setFocus] = useState<boolean | null>(null);

  useEffect(() => {
    if (regExp.test(value) && value && isValid) {
      setFormatValid(true);
    } else {
      setFormatValid(false);
    }
  }, [value]);

  useEffect(() => {
    setDataValid(formatValid);
  }, [formatValid]);

  const onFocus = () => {
    setFocus(true);
  };

  const unFocus = () => {
    setFocus(false);
  };

  return (
    <div>
      {obligatoryValid && !value && focus === false && (
        <span className={s.warning}>Обязательное поле</span>
      )}
      {value && !formatValid && focus === false && (
        <span className={s.warning}>Неверный формат</span>
      )}
      <label
        onFocus={onFocus}
        onBlur={unFocus}
        className={className}
        style={{ border: focus ? "1px solid #61aafb" : "" }}
      >
        {children}
        {formatValid && focus === false && <Valid className={s.valid} />}
        {!formatValid && focus === false && <NotValid className={s.notValid} />}
      </label>
    </div>
  );
};

export default React.memo(LabelInput);
