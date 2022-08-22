import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  return (
    <div>
      <div>{postData.contents}</div>
      {postData.recommendIDs.map((recommendID) => {
        return (
          <Link key={recommendID} href={`/post/${recommendID}`}>
            <button>{`記事${recommendID}`}</button>
          </Link>
        );
      })}
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
