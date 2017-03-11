var posts = [
    {title: 'Post one', body: 'Lorem Ipsum'},
    {title: 'Post two', body: 'Lorem Ipsum'}
]



posts.push({title: 'Post three', body: 'Lorem Ipsum'});


var newPosts = [
    {title: 'Post four', body: 'Lorem Ipsum'},
    {title: 'Post five', body: 'Lorem Ipsum'}
]


posts.push(...newPosts);


console.log(posts);
