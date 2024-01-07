import { Button, Group, Text } from "@mantine/core";
import { useState } from "react";
import { Readable } from "../../src/components/readable-component";
import { povesteDoi } from "../../src/stories/stories-storage";

export default function IndexPage() {

  const [readableText, setReadableTex] = useState('')

  return (
    <Group mt={50} justify="center">
      <Readable text={povesteDoi} />
    </Group>
  );
}
