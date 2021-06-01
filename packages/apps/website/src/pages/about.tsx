import React, { FunctionComponent } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from '@platform/theme/Link';

const About: FunctionComponent = () => {
  return (
    <Container maxWidth='sm'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          This is the about page.
        </Typography>
        <Button variant='contained' color='primary'>
          <Link page='/'>Go to the main page</Link>
        </Button>
      </Box>
    </Container>
  );
};
export default About;
