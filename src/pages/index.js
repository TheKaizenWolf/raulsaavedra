import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';

const Title = styled.h1.attrs({
  className: 'f2 fw8 bb bw2',
})`
  color: #5e2ca5;
`;

const StyledLink = styled(Link).attrs({
  className: 'f4 fw8 link dim dark-pink',
})``;
const Index = () => {
  const posts = usePosts();
  return (
    <Layout>
      <Hero />
      <Title className="tc-m">My Latest Posts</Title>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

export default Index;
export { Title, StyledLink };
