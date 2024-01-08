import { Button, Group, Text, useMantineColorScheme } from "@mantine/core";
import { useState } from "react";
import { Readable } from "../src/components/readable-component";
import { useRouter } from "next/router";

export default function IndexPage() {

  const router = useRouter()

  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  const [hoveredStory, setHoveredStory] = useState<string | null>(null);

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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
      <Button size="xl">Alege povestea pe care vrei să o citești!</Button>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%', marginTop: '80px', marginBottom: '80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {stories.map((story) => (
            <Button
              key={story.name}
              size="xl"
              onMouseOver={() => handleMouseOver(story.name)}
              onMouseOut={handleMouseOut}
              onClick={() => router.push(story.route)}
              style={{ marginBottom: '20px', width: '1000px' }}
            >
              {story.name}
            </Button>
          ))}
        </div>
        <img src={getStoryImageSource(hoveredStory as string)} alt="Povesti pentru copii" width="300px" height="300px"></img>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
        <Button size="xl" onClick={() => setColorScheme('dark')}>Întunecat</Button>
        <Button size="xl" onClick={() => setColorScheme('light')}>Luminos</Button>
      </div>
    </div>
  );
}
