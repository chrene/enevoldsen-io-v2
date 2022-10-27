import Image from "next/image";
import React from "react";
import Card from "../components/card";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "../components/icons";
import JobCard from "../components/job-card";
import Layout from "../components/layout";
import MasonryGrid from "../components/masonry-grid";
// import { getBlogPosts } from "../lib/ghost";
import { jobCardsDatasource } from "../lib/index.config";

// export async function getStaticProps() {
//   const posts = await getBlogPosts();
//   return {
//     props: {
//       posts,
//     },
//   };
// }

const WelcomeCard = () => (
  <Card className="w-full">
    <Card.Body>
      <div className="flex items-center flex-col sm:flex-row text-center space-y-4 sm:space-y-0 sm:text-left space-x-4">
        <div className="avatar">
          <div className="rounded-full">
            <Image src={"/avatar.jpg"} alt="Picture of the me" width={72} height={72} />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="font-extrabold text-2xl">Hi, I'm Christian 👋</h1>
          <p className="italic sm:not-italic">Full-stack developer, tech enthusiast, and hobby musician.</p>
        </div>
      </div>
    </Card.Body>
  </Card>
);

const SocialLinkItem = ({ Icon, text, href, ...rest }) => {
  return (
    <div className="w-full">
      <a
        target={"_blank"}
        href={href}
        rel="noopener noreferrer"
        className="btn btn-outline btn-block rounded-3xl gap-2"
        {...rest}
      >
        <Icon />
        {text}
      </a>
    </div>
  );
};

export default function Home() {
  // Site meta data
  const meta = {
    title: "Christian Enevoldsen",
    description: "I'm a developer, product owner, and hobby music producer",
  };

  return (
    <Layout meta={meta}>
      <MasonryGrid breakpointCols={{ default: 1 }}>
        <WelcomeCard />
        <MasonryGrid>
          {jobCardsDatasource.map((jobCardData, index) => (
            <JobCard key={index} {...jobCardData} />
          ))}
          <Card>
            <Card.Body>
              <div className="text-center center align-self-center">Stay in touch</div>
              <SocialLinkItem text="Github" href="https://github.com/chrene" Icon={GithubIcon} />
              <SocialLinkItem text="Twitter" href="https://twitter.com/chrsapp" Icon={TwitterIcon} />
              <SocialLinkItem
                text="LinkedIn"
                href="https://www.linkedin.com/in/christianenevoldsen"
                Icon={LinkedInIcon}
              />
            </Card.Body>
          </Card>
          {/* <Card>
            <Card.Body className="space-y-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <div className="center align-self-center text-center">
                Subscribe to receive very occasional notes and updates via email:
              </div>
              <form className="flex flex-col space-y-5">
                <input type="email" className="input input-bordered" placeholder="Your email" />
                <button type="submit" className="btn btn-outline">
                  Subscribe
                </button>
              </form>
            </Card.Body>
          </Card> */}
        </MasonryGrid>
      </MasonryGrid>
    </Layout>
  );
}
