import { Button, Group, Text, useMantineColorScheme } from "@mantine/core";
import { useState, useEffect } from "react";
import { Readable } from "../src/components/readable-component";
import { useRouter } from "next/router";

export default function IndexPage() {

  const router = useRouter()

  const { setColorScheme, clearColorScheme, colorScheme } = useMantineColorScheme();

  const [hoveredStory, setHoveredStory] = useState<string | null>(null);
  const [h1Color, setH1Color] = useState<'black' | 'white'>(colorScheme === 'dark' ? 'white' : 'black');

  const stories = [
    { name: "Prințesa și bobul de mazăre", route: "/printesa-si-bobul-de-mazare" },
    { name: "Iepurele și ariciul", route: "/iepurele-si-ariciul" },
    { name: "Cei trei purceluși", route: "/cei-trei-purcelusi" },
    { name: "Iepurașul Peter", route: "/iepurasul-Peter" },
    { name: "Hansel și Gretel", route: "/hansel-si-gretel" },
  ];

  const handleMouseOver = (storyName: string) => {
    setHoveredStory(storyName);
  };

  const handleMouseOut = () => {
    setHoveredStory(null);
  };

  const getStoryImageSource = (storyName: string) => {
    return hoveredStory !== null && hoveredStory === storyName
      ? `/${storyName.replace(/\s+/g, "-")}.png`
      : "/MainPageImage.png";
  };

  const handleColorSchemeChange = (colorScheme: 'dark' | 'light') => {
    setColorScheme(colorScheme);
    setH1Color(colorScheme === 'dark' ? 'white' : 'black');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
      <h1 style={{fontFamily: 'Chewy', color: h1Color, fontSize: '40px'}}>Alege o poveste pentru a o citi sau asculta!</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%', marginTop: '50px', marginBottom: '80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {stories.map((story) => (
            <Button
              key={story.name}
              size="xl"
              onMouseOver={() => handleMouseOver(story.name)}
              onMouseOut={handleMouseOut}
              onClick={() => router.push(story.route)}
              style={{ marginBottom: '20px', width: '600px', fontSize: '25px' }}
            >
              {story.name}
            </Button>
          ))}
        </div>
        <img src={getStoryImageSource(hoveredStory as string)} alt="Povesti pentru copii" width="300px" height="300px" style={{border: '20px solid #73F9CE', borderRadius: '100px'}}></img>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
        <Button size="xl" onClick={() => handleColorSchemeChange('dark')}>Întunecat</Button>
        <Button size="xl" onClick={() => handleColorSchemeChange('light')}>Luminos</Button>
      </div>
    </div>
  );
}
