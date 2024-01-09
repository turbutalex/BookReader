import { Button, Group, Text } from "@mantine/core";
import { useState } from "react";
import { Readable } from "../../src/components/readable-component";
import { povesteTrei } from "../../src/stories/stories-storage";
import purcelusi from "../../public/purcelusi.png"
export default function IndexPage() {

  const [readableText, setReadableTex] = useState('')

  return (
    <Group mt={50} justify="center">
      <Readable text={povesteTrei} imageSrc={"/purcelusi.png"} />
    </Group>
  );
}
