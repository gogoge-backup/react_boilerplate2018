export function fetchPosts() {
  const url = `https://jsonplaceholder.typicode.com/posts`
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'get',
  }

  return {
    url,
    options,
  }
}
