import { Button, Modal, TextInput, Text, rem, Notification } from "@mantine/core";
import { IconX, IconCheck } from '@tabler/icons-react';
import { useEffect, useState } from "react";

interface GameProps {
  text: string
  quiz: string
  choices: string
  answer: number
  opened: boolean
  onClose: () => void
}

const gameStyles = () => ({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10px'
  }
})

export const Game = (props: GameProps) => {
  const { text, quiz, choices, answer, opened, onClose } = props

  const styles = gameStyles()

  const [correctWord, setCorrectWord] = useState('')
  const [typedWord, setTypedWord] = useState('')
  const [showCorrectWord, setShowCorrectWord] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const [showCorrectNotification, setShowCorrectNotification] = useState(false);
  const [showWrongNotification, setShowWrongNotification] = useState(false);

  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  const handleChoiceClick = (choiceIndex: number) => {
    if (choiceIndex === answer) {
      setShowCorrectNotification(true);
      setShowWrongNotification(false);
    } else {
      setShowCorrectNotification(false);
      setShowWrongNotification(true);
    }
  };

  return (
    <Modal opened={opened} onClose={onClose} style={{ width: '2000px'}}>
      {showWrongNotification && (
        <Notification icon={xIcon} color="red" title="Upss!" onClose={() => setShowWrongNotification(false)}>
          Răspunsul nu este corect. Mai încearcă!
        </Notification>
      )}
      {showCorrectNotification && (
        <Notification icon={checkIcon} color="teal" title="Bravo!" mt="md" onClose={() => setShowCorrectNotification(false)}>
          Ai răspuns corect!
        </Notification>
      )}

      <div style={{display: "flex", flexDirection: "column", justifyContent:"space-between", width: "100%", alignItems:"center"}}>

        <p style={{fontFamily: 'Georgia', fontWeight: 'bold', fontSize:"30px", textAlign:'center'}}>{quiz}</p>  

        {choices && choices.split(',').map((choice, index) => (
          <Button
            key={index}
            style={{ width: '90%', margin: '5px', fontSize:"20px" }}
            onClick={() => handleChoiceClick(index + 1)}
          >
            {index + 1}. {choice.trim()}
          </Button>
        ))}
      </div>
    </Modal>
  );
}