const comments = [
  {
    id: 1,
    replies: [
      { id: 2, replies: [] },
      { id: 3, replies: [] }
    ]
  }
];

const flattenComments = [];
for (const comment of comments) {
  flattenComments.push(comment.id);
  for (const reply of comment.replies) {
    flattenComments.push(reply.id);
  }
}

console.log(flattenComments);