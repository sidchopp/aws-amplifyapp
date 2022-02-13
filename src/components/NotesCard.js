import {
  Card,
  Image,
  View,
  Heading,
  Flex,
  Badge,
  Text,
  Button,
  useTheme,
  Grid
} from '@aws-amplify/ui-react';

function NotesCard({ notes, deleteNote }) {
  const { tokens } = useTheme();
  return (
    <div>
      <Grid
        templateColumns="1fr 1fr"
        templateRows="10rem 10rem"
        gap="var(--amplify-space-small)"
      >
        {notes.map(note => (
          <Grid
            templateColumns="1fr 1fr"
            templateRows="10rem 10rem"
            gap="var(--amplify-space-small)"
          >
            <div key={note.id || note.name}>
              <Card>
                <Flex
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="stretch"
                  alignContent="flex-start"
                  wrap="nowrap"
                  gap="1rem"
                >
                  <Image
                    alt="my Image"
                    src={note.image}
                    width="33%"
                  />
                  <Flex
                    direction="column"
                    alignItems="flex-start"
                    gap={tokens.space.xs}
                  >
                    <Flex>
                      <Badge size="small" variation="info">
                        Plus
                      </Badge>
                      <Badge size="small" variation="success">
                        Verified
                      </Badge>
                    </Flex>
                    <Heading level={5}>
                      {note.name}
                    </Heading>
                    <Text as="span">
                      {note.description}d.
                    </Text>
                    <Button onClick={() => deleteNote(note)} variation="primary">Delete Note</Button>
                  </Flex>
                </Flex>
              </Card>
            </div>
          </Grid>
        ))
        }
      </Grid>
    </div>
  );
};

export default NotesCard;

