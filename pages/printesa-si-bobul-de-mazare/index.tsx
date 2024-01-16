import { Button, Group, Text } from "@mantine/core";
import { useState } from "react";
import { Readable } from "../../src/components/readable-component";
import { povesteUnu } from "../../src/stories/stories-storage";

export default function IndexPage() {

  const [readableText, setReadableTex] = useState('')

  return (
    <Group mt={50} justify="center">
      <Readable text={povesteUnu} imageSrc={"/printesa.png"} title={"Printesa si bobul de mazare"} quiz={"Câte saltele erau așezate peste bobul de mazăre?"} choices={"Douăzeci,Zece,O sută,Trei"} answer={1}/>
    </Group>
  );
}
