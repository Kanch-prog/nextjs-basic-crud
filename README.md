My Awesome Next.js Pre-rendered Website

Overview
This project demonstrates how to build a pre-rendered website using Next.js and Material-UI. Pre-rendering enhances SEO, search engine crawling, and social media sharing.
Pages
List of Tourist Attractions
	Create a page to display a list of tourist attractions.
	Use Static Generation without fetching external data.
Tourist Attraction Detail
	Create a page to show details of a specific attraction.
	Use dynamic routing (e.g., pages/[id].js).
	Fetch data for pre-rendering using getStaticProps.
Deployment Issues
The deployment to Vercel failed due to a mismatch of versions between React and Material-UI. This discrepancy led to compatibility issues, resulting in a failed deployment.

![image](https://github.com/Kanch-prog/nextjs-basic-crud/assets/121807277/81e890fe-4061-475a-bca8-dafc57aec59a)
![image](https://github.com/Kanch-prog/nextjs-basic-crud/assets/121807277/6a8ee3e3-545b-4891-8770-e4f2eb46e59c)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
