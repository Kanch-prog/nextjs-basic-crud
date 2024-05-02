import Navbar from '../Navbar'
import Container from '@material-ui/core/Container';
import Head from 'next/head'
import Typography from '@material-ui/core/Typography';

function AttractionPage({ data }) {
    return (
      <>
        <Head>
          <meta property="og:title" content={data.attraction.name} />
          <meta property="og:description" content={data.attraction.detail} />
          <meta property="og:image" content={data.attraction.coverimage} />
        </Head>
        <Navbar />
        <Container maxWidth="lg">
          <div style={{ marginTop: '2em', display: 'flex', alignItems: 'center', gap: '1em' }}> 
            <img src={data.attraction.coverimage} alt={data.attraction.name} style={{ maxWidth: '200px', maxHeight: '200px' }} /> {/* Apply inline styles */}
            <div>
              <Typography variant="h4" color="primary" gutterBottom>
                {data.attraction.name}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {data.attraction.detail}
              </Typography>
            </div>
          </div>
        </Container>
      </>
    );
  }

export async function getStaticPaths() {

  const res = await fetch('https://www.melivecode.com/api/attractions')
  const data = await res.json()

  const paths = data.map((attraction) => ({
    params: { id: String(attraction.id) },
  }))


  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://www.melivecode.com/api/attractions/${params.id}`)
  const data = await res.json()

  return { props: { data } }
}

export default AttractionPage