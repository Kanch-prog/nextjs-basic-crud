import Navbar from '../Navbar'
import AttractionCard from '../AttractionCard'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function HomePage({ data }) {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <div style={{ marginTop: '1em', textAlign: 'center' }}> 
          <Typography variant="h4" color="primary" gutterBottom>
            Around the World
          </Typography>
          <Grid container spacing={2}>
            {data.map((attraction) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={attraction.id}>
                <AttractionCard attraction={attraction} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://www.melivecode.com/api/attractions');
  const data = await res.json();

  return {
    props: { data },
  };
}

export default HomePage;
