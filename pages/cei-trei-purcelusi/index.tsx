import { Button, Group, Text } from "@mantine/core";
import { useState } from "react";
import { Readable } from "../../src/components/readable-component";
import { povesteTrei } from "../../src/stories/stories-storage";
import purcelusi from "../../public/purcelusi.png"
export default function IndexPage() {

  const [readableText, setReadableTex] = useState('')

  return (
    <Group mt={50} justify="center">
      <Readable text={povesteTrei} imageSrc={"/purcelusi.png"} title={"Cei trei purcelusi"} quiz={"Care dintre purceluși era cel mai muncitor?"} choices={"Primul,Al doilea,Al treilea,Niciunul"} answer={3}/>
    </Group>
  );
}
