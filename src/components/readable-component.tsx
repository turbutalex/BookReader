import { Button, Group, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Game } from "./game-component";

interface ReadableProps {
  text: string
}

export const Readable = (props: ReadableProps) => {
  var speaker: any

  const { text } = props

  const router = useRouter()

  const [highlightedWord, setHighlightedWord] = useState('')
  const [hoveredWordIndex, setHoveredWordIndex] = useState(-1)
  const [isGameOpened, setIsGameOpened] = useState(false)

  useEffect(() => {
    if (window['speechSynthesis'] !== undefined) {
      speaker = new SpeechSynthesisUtterance()
      speaker.lang = "ro-RO"
      window.speechSynthesis.speak(speaker)
    }
  }, [])

  const read = (word?: string) => {
    const utterance = new SpeechSynthesisUtterance(word ? word : text);
    utterance.lang = "ro-RO"
    utterance.rate = 0.75
    if (!word) {
      utterance.onboundary = (event) => {
        const boundaryIndex = event.charIndex;
        const words = text.split(' ');
        let currentWord = '';

        for (const word of words) {
          if (boundaryIndex >= currentWord.length && boundaryIndex <= currentWord.length + word.length) {
            setHighlightedWord(word);
            break;
          }
          currentWord += word + ' ';
        }
      };
    }

    window.speechSynthesis.speak(utterance);

  }

  const handleMouseEnter = (index: number) => {
    setHoveredWordIndex(index)
  }

  const handleMouseLeave = (index: number) => {
    setHoveredWordIndex(-1)
  }

  const computeEndLine = (word: string) => {
    return word == '\n';

  }

  return (
    <>
      <Button size="xl" onClick={() => read()}>Read</Button>
      <p>
        {text.split(' ').map((word, index) => (
          <Text span key={index} style={{
            textDecoration: word === highlightedWord ? 'underline' : 'none',
            fontSize: index === hoveredWordIndex ? 25 : 15,
            transition: 'font-size 0.3s ease',
            cursor: 'pointer',
            marginRight: '7px',
          }} onClick={() => read(word)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
          >
            {word}{computeEndLine(word) ? <br/> : <></>}
          </Text>
        ))}
      </p>
      <Button onClick={() => router.push('/')}>Alta Poveste</Button>
      {isGameOpened && <Game text={text} opened={isGameOpened} onClose={() => setIsGameOpened(false)}/>}
      <Button onClick={() => setIsGameOpened(true)}>Play Game!</Button>
    </>
  );
}