export const getAllPostIds = () => {
  //データベースからすべてのidを取得
  const ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  return ids.map((id) => {
    return {
      params: {
        id: id,
      },
    };
  });
};

export const getPostData = (id) => {
  //データベースからidに紐付いた記事データと、レコメンドidを5つ取得
  const contents = `記事${id}です`; //実際には記事内容
  const recommendIDDatas = [
    { id: '1', recommendId: ['2', '3', '4', '5', '6'] },
    { id: '2', recommendId: ['1', '3', '8', '9', '10'] },
    { id: '3', recommendId: ['2', '3', '4', '5', '6'] },
    { id: '4', recommendId: ['2', '3', '4', '1', '6'] },
    { id: '5', recommendId: ['4', '3', '1', '5', '9'] },
    { id: '6', recommendId: ['1', '3', '4', '5', '6'] },
    { id: '7', recommendId: ['2', '3', '4', '5', '6'] },
    { id: '8', recommendId: ['2', '1', '5', '8', '6'] },
    { id: '9', recommendId: ['2', '3', '4', '1', '6'] },
    { id: '10', recommendId: ['2', '1', '4', '5', '6'] },
  ];
  const recommendIDs = recommendIDDatas.find((recommendIDData) => {
    return recommendIDData.id === id;
  });

  //別に具体的な記事内容を持ってきても良い
  return {
    contents: contents,
    recommendIDs: recommendIDs.recommendId,
  };
};
