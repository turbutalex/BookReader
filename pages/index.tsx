import { Button, Group, Text, useMantineColorScheme } from "@mantine/core";
import { useState } from "react";
import { Readable } from "../src/components/readable-component";
import { useRouter } from "next/router";

export default function IndexPage() {
  const text = "Într-un mic sat de pe malul unei râuri, trăia o bătrână blândă și iubitoare numită Ana."

  const router = useRouter()

  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  const [readableText, setReadableTex] = useState('')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
      <Button size="xl">Alege povestea pe care vrei să o citești!</Button>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%', marginTop: '80px', marginBottom: '80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Button size="xl" onClick={() => router.push('/printesa-si-bobul-de-mazare')} style={{ marginBottom: '20px', width: '1000px' }}>Prințesa și bobul de mazăre</Button>
          <Button size="xl" onClick={() => router.push('/iepurele-si-ariciul')} style={{ marginBottom: '20px', width: '1000px' }}>Iepurele și ariciul</Button>
          <Button size="xl" onClick={() => router.push('/cei-trei-purcelusi')} style={{ marginBottom: '20px', width: '1000px' }}>Cei trei purceluși</Button>
          <Button size="xl" onClick={() => router.push('/iepurasul-Peter')} style={{ marginBottom: '20px', width: '1000px' }}>Iepurașul Peter</Button>
          <Button size="xl" onClick={() => router.push('/hansel-si-gretel')} style={{ marginBottom: '20px', width: '1000px' }}>Hansel și Gretel</Button>
        </div>
        <img src="/MainPageImage.png" alt="Povesti pentru copii" width="300px" height="300px"></img>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
        <Button size="xl" onClick={() => setColorScheme('dark')}>Întunecat</Button>
        <Button size="xl" onClick={() => setColorScheme('light')}>Luminos</Button>
      </div>
    </div>
  );
}
