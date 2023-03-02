import React, { useState } from "react";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import Modal from "./components/Modal";
import Button from "./components/Button";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const changeModalOpen = React.useCallback(() => {
    setModalOpen(true);
  }, []);

  return (
    <div className="App">
      <Button onClick={changeModalOpen}>Форма обратной связи</Button>

      <Modal open={modalOpen} setOpen={setModalOpen} title={"Обратная связь"}>
        <FeedbackForm />
      </Modal>
    </div>
  );
}

export default App;
