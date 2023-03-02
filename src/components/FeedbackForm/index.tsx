import React, { ChangeEvent, useState } from "react";
import s from "./styles.module.scss";
import LabelInput from "../LabelInput";
import InputMask from "react-input-mask";
import Button from "../Button";
import { checkValid, convertPhoneNumbers, isValidNumberPhone } from "./utils";

const FeedbackForm = () => {
  const [{ phoneNumber, name, message }, setData] = useState({
    phoneNumber: "",
    name: "",
    message: "",
  });
  const [phoneNumberValid, setPhoneNumberValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const [warning, setWarning] = useState(false);

  const json = JSON.stringify({
    phoneNumber: convertPhoneNumbers(phoneNumber),
    name: name,
    message: message,
  });

  const onChangePhoneNumber = React.useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setData((prev: any) => ({ ...prev, phoneNumber: event.target.value }));
    },
    []
  );

  const onChangeName = React.useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setData((prev: any) => ({ ...prev, name: event.target.value }));
    },
    []
  );

  const onChangeMessage = React.useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setData((prev: any) => ({ ...prev, message: event.target.value }));
    },
    []
  );

  function downloadAsFile(data: any) {
    if (checkValid([phoneNumberValid, nameValid, messageValid])) {
      setWarning(false);
      let a = document.createElement("a");
      let file = new Blob([data], { type: "application/json" });
      a.href = URL.createObjectURL(file);
      a.download = "anyName.json";
      a.click();
    } else {
      setWarning(true);
    }
  }

  const onSubmit = () => {
    if (checkValid([phoneNumberValid, nameValid, messageValid])) {
      setWarning(false);
      console.log(json);
    } else {
      setWarning(true);
    }
  };

  return (
    <div className={s.feedbackForm}>
      <LabelInput
        value={phoneNumber}
        obligatoryValid={true}
        className={s.label}
        regExp={/^(?![0-9-]+$)/}
        isValid={isValidNumberPhone(phoneNumber)}
        setDataValid={setPhoneNumberValid}
      >
        <InputMask
          className={s.input}
          mask="+7 (999) 999-99-99"
          value={phoneNumber}
          onChange={onChangePhoneNumber}
          placeholder={"Номер телефона"}
        />
      </LabelInput>
      <LabelInput
        value={name}
        obligatoryValid={true}
        className={s.label}
        regExp={/^[a-zа-яA-ZА-Я-]+$/}
        setDataValid={setNameValid}
      >
        <input
          className={s.input}
          value={name}
          onChange={onChangeName}
          placeholder={"Имя"}
        />
      </LabelInput>
      <LabelInput
        value={message}
        obligatoryValid={true}
        className={s.label}
        regExp={/^[a-zа-яA-ZА-Я0-9-]+$/}
        setDataValid={setMessageValid}
      >
        <textarea
          className={s.textarea}
          value={message}
          onChange={onChangeMessage}
          placeholder={"Сообщение"}
        />
      </LabelInput>
      {warning && <span className={s.warning}>Форма не заполнена</span>}
      <Button onClick={() => downloadAsFile(json)} margin={"0 0 15px"}>
        Скачать файл json
      </Button>
      <Button onClick={onSubmit}>Отправить</Button>
    </div>
  );
};

export default FeedbackForm;
