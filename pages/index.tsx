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
    <Group mt={50} justify="center">
      <Button size="xl" onClick={() => router.push('/printesa-si-bobul-de-mazare')}>Printesa si bobul de mazare</Button>
      <Button size="xl" onClick={() => router.push('/iepurele-si-ariciul')}>Iepurele si ariciul</Button>
      <Button size="xl" onClick={() => router.push('/cei-trei-purcelusi')}>Cei trei purcelusi</Button>
      <Button size="xl" onClick={() => router.push('/iepurasul-Peter')}>Iepurasul Peter</Button>
      <Button size="xl" onClick={() => router.push('/hansel-si-gretel')}>Hansel si Gretel </Button>
      <Button size="xl" onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button size="xl" onClick={() => setColorScheme('light')}>Light</Button>
    </Group>
  );
}
