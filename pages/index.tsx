import { Button, Group, Text } from "@mantine/core";
import { useState } from "react";
import { Readable } from "../src/components/readable-component";
import { useRouter } from "next/router";

export default function IndexPage() {
  const text = "Într-un mic sat de pe malul unei râuri, trăia o bătrână blândă și iubitoare numită Ana."

  const router = useRouter()

  const [readableText, setReadableTex] = useState('')

  return (
    <Group mt={50} justify="center">
      <Button size="xl" onClick={() => router.push('/poveste-unu')}>Poveste Unu</Button>
    </Group>
  );
}
