import { Button, Group, Text } from "@mantine/core";
import { useState } from "react";
import { Readable } from "../../src/components/readable-component";
import { povestePatru } from "../../src/stories/stories-storage";

export default function IndexPage() {

  const [readableText, setReadableTex] = useState('')

  return (
    <Group mt={50} justify="center">
      <Readable text={povestePatru} imageSrc={"/iepurasul.png"} title={"Iepurasul Peter"} quiz={"Cu ce se ospăta șoarecele de rând?"} choices={"Boabe de grâu și mazăre,Brânză,Cașcaval,Insecte"} answer={1}/>
    </Group>
  );
}
