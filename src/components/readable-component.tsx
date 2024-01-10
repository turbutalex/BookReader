import { Button, Group, Text, useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Game } from "./game-component";

interface ReadableProps {
  text: string
  imageSrc: string
  title: string
}

export const Readable = (props: ReadableProps) => {

  const { text, imageSrc, title } = props

  const { colorScheme } = useMantineColorScheme();
  const [h1Color, setH1Color] = useState<'black' | 'white'>(colorScheme === 'dark' ? 'white' : 'black');

  const router = useRouter()
  const oprestePovestea = "Oprește Citirea"
  const continuaPovestea = "Continuă Povestea"

  const [highlightedIndex, sethighlightedIndex] = useState(-1)
  const [hoveredWordIndex, setHoveredWordIndex] = useState(-1)
  const [isGameOpened, setIsGameOpened] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)
  const [pausedIndex, setPausedIndex] = useState(-1)

  useEffect(() => {
    return () => {
      if (window['speechSynthesis'] !== undefined) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])


  const read = (word?: string) => {
    if (word) {
      setIsPaused(true)
      window.speechSynthesis.pause()
      window.speechSynthesis.cancel()
      window.speechSynthesis.resume()
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "ro-RO"
      utterance.rate = 0.75

      window.speechSynthesis.speak(utterance)
      window.speechSynthesis.pause()
      const continuedUtterance = new SpeechSynthesisUtterance(pausedIndex == -1 ? text : text.substring(pausedIndex));
      window.speechSynthesis.speak(continuedUtterance);
      continuedUtterance.lang = "ro-RO"
      continuedUtterance.rate = 0.75
    } else {

      const utterance = new SpeechSynthesisUtterance(pausedIndex == -1 ? text : text.substring(pausedIndex));
      utterance.lang = "ro-RO"
      utterance.rate = 0.75
      let index = 0
      utterance.onend = (event) => {
        setPausedIndex(-1)
      }
      utterance.onpause = (event) => {
        setPausedIndex(index)
        console.log("Triggered")

      }
      const words = text.split(' ');

      utterance.onboundary = (event) => {
        const boundaryIndex = event.charIndex;
        let currentWord = '';

        for (const word of text.split(' ')) {
          if (boundaryIndex >= currentWord.length && boundaryIndex <= currentWord.length + word.length) {
            sethighlightedIndex(words.indexOf(word));

            words[words.indexOf(word)] = "null"
            index++
            break;
          }
          currentWord += word + ' ';
        }
      };
      setHasStarted(true)
      setIsPaused(false)
      window.speechSynthesis.resume()
      window.speechSynthesis.speak(utterance);
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredWordIndex(index)
  }

  const handleMouseLeave = (index: number) => {
    setHoveredWordIndex(-1)
  }

  const computeEndLine = (word: string) => {
    return word == "\n";
  }

  const pauseReading = () => {
    if (!window.speechSynthesis.paused) {
      window.speechSynthesis.pause()
      setIsPaused(true)
    }
  }

  const resumeReading = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume()
      setIsPaused(false)
    }
    if (!hasStarted) {
      read()
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button size="xl" style={{ marginBottom: '20px', width:'300px' }} onClick={() => read()}>Începe Povestea</Button>
      <img src={imageSrc} alt="poza sumar poveste" width="500px" height="300px" style={{
        marginBottom:'25px',
        border: '10px solid #73F9CE',
        borderRadius: '50px'
      }}/>
      <div style={{
        width: '50%'
      }}>
        <h1 style={{fontFamily: 'Chewy', color: h1Color, fontSize: '40px', textAlign: 'center'}}>{title}</h1>
        {text.split(' ').map((word, index) => (
          <Text key={index} style={{
            textDecoration: index === highlightedIndex ? 'underline' : 'none',
            fontSize: 15,
            transition: 'font-size 0.3s ease',
            cursor: 'pointer',
            marginRight: '7px',
            whiteSpace: 'initial',
            margin: 0,
            display: 'inline',
            wordBreak: 'break-word',

          }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
          >
            {computeEndLine(word) && <br></br>}{word}{" "}
          </Text>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginTop: '20px', marginBottom: '20px' }}>
        <Button size="xl" onClick={() => router.push('/')}>Alege altă poveste!</Button>
        <Button size="xl" style={{
          width: '300px'
        }}
                onClick={() => isPaused ? resumeReading() : pauseReading()}>{isPaused ? continuaPovestea : oprestePovestea}</Button>
        {isGameOpened && <Game text={text} opened={isGameOpened} onClose={() => setIsGameOpened(false)}/>}
        <Button size="xl" onClick={() => setIsGameOpened(true)}>Ghicește cuvântul!</Button>
      </div>
    </div>
  );
}