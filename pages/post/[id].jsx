import Link from 'next/link';
import { useState } from 'react';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const onClickAdd = (recommendID) => {
    const _counts = [...counts];
    _counts[recommendID - 1]++;
    setCounts(_counts);
  };
  return (
    <div>
      <div>{postData.contents}</div>
      {postData.recommendIDs.map((recommendID) => {
        return (
          <Link key={recommendID} href={`/post/${recommendID}`}>
            <button onClick={() => onClickAdd(recommendID)}>{`記事${recommendID}`}</button>
          </Link>
        );
      })}
      <div>
        {counts.map((count, index) => {
          return <div key={index}>{count}</div>;
        })}
      </div>
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
