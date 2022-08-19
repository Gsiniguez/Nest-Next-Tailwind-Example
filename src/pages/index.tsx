import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { BlogPost } from 'src/shared/types/blog-post';
import { customFetch } from 'src/shared/utils/custom-fetch';

type THomeProps = {
  blogPosts: BlogPost[];
};

const Home: FC<THomeProps> = ({ blogPosts = [] }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline ">Home</h1>
      {blogPosts.map(({ title, id }) => (
        <div key={id}>
          <Link href={`/${id}`}>{title}</Link>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<THomeProps> = async () => {
  const blogPosts = await customFetch(`/api/blogs`);
  return {
    props: {
      blogPosts,
    },
  };
};

export default Home;
