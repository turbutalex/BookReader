import { Button, Group, Text } from "@mantine/core";
import { useState } from "react";
import { Readable } from "../../src/components/readable-component";
import { povesteCinci } from "../../src/stories/stories-storage";

export default function IndexPage() {

  const [readableText, setReadableTex] = useState('')

  return (
    <Group mt={50} justify="center">
      <Readable text={povesteCinci} imageSrc={"/hansel-si-gretel.png"} title={"Hansel si Gretel"} quiz={"Din ce era construită casa din pădure?"} choices={"Ciocolată,Turtă dulce,Alune,Caramel"} answer={2}/>
    </Group>
  );
}
