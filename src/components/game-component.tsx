import { Button, Modal, TextInput, Text, rem, Notification } from "@mantine/core";
import { IconX, IconCheck } from '@tabler/icons-react';
import { useEffect, useState } from "react";

interface GameProps {
  text: string
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
  const { text, opened, onClose } = props

  const styles = gameStyles()

  const [correctWord, setCorrectWord] = useState('')
  const [typedWord, setTypedWord] = useState('')
  const [showCorrectWord, setShowCorrectWord] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }}/>;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }}/>;

  useEffect(() => {

    const textAux = text.split(' ').filter(word => word.trim() !== '' &&
      word !== "\n")
    validateAndSetCorrectWord(textAux)
    readWord()
  }, []);

  useEffect(() => {
    readWord()
  }, [correctWord]);

  const validateAndSetCorrectWord = (textAux: string[]) => {
    var word = textAux[Math.floor(Math.random() * textAux.length)]
    if (".,!?:;".includes(word.charAt(word.length - 1))) {
      word = word.substring(0, word.length - 1)
    }
    if ("-".includes(word.charAt(0))) {
      word = word.substring(1, word.length)
    }
    setCorrectWord(word)
  }

  const validateInput = () => {
    if (typedWord != correctWord) {
      setShowError(true)
      setShowSuccess(false)
    } else {
      setShowError(false)
      setShowSuccess(true)
    }
  }

  const showAnswer = () => {
    setShowCorrectWord(true)
  }

  const getNewWord = () => {
    setShowCorrectWord(false)
    setShowSuccess(false)
    setShowError(false)
    const textAux = text.split(' ').filter(word => word.trim() !== '' && word !== "\n" && word.length > 2)
    textAux.filter(word => word != correctWord)
    validateAndSetCorrectWord(textAux)
  }

  const readWord = () => {
    window.speechSynthesis.cancel()
    const wordSpeaker = new SpeechSynthesisUtterance(correctWord)
    wordSpeaker.lang = "ro-RO"
    wordSpeaker.rate = 0.75
    window.speechSynthesis.speak(wordSpeaker)
  }

  return (
    <Modal opened={opened} onClose={onClose}>
      {showError
        &&
        <Notification icon={xIcon} color="red" title="Upss!" onClose={() => setShowError(false)}>
          Raspunsul nu este corect. Mai incearca!
        </Notification>
      }
      {showSuccess
        &&
        <Notification icon={checkIcon} color="teal" title="Bravo!" mt="md" onClose={() => setShowSuccess(false)}>
          Ai raspuns corect!
        </Notification>
      }

      <TextInput  label="Introdu Cuvântul" onChange={e => setTypedWord(e.target.value)}/>
      <div style={styles.buttonContainer}>
        <Button style={{width: '175px'}} onClick={validateInput}>
          Verifică
        </Button>
        <Button style={{width: '175px'}} onClick={getNewWord}>
          Următorul
        </Button>
      </div>
      <div style={styles.buttonContainer}>
        <Button style={{width: '175px'}} onClick={readWord}>
          Ascultă
        </Button>
        <Button style={{width: '175px'}} onClick={showAnswer}>
          Vezi Răspunsul
        </Button>
      </div>
      {showCorrectWord && <Text style={{
        marginTop: 10,
        textAlign: 'end',
        verticalAlign: 'middle',
        width: '100%'
      }}>Răspunsul corect este: {correctWord}</Text>}
    </Modal>
  )
}