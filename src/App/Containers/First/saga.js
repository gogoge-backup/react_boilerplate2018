import { put, call } from 'redux-saga/effects'
import { fetchPosts as fetchPostsObject } from 'Api/posts'
import { fetchTask } from 'Sagas/fetch'

export function* fetchPosts() {
  try {
    const status = {
      REQUEST: 'FETCH_POSTS_REQUEST',
      SUCCESS: 'FETCH_POSTS_SUCCESS',
      FAILED: 'FETCH_POSTS_FAILED',
    }
    const { url, options } = fetchPostsObject()
    yield call(fetchTask, url, status, options)
  } catch (ex) {
    console.error('error occurs when polling: ', ex)
  } finally {
    console.info('refreshing data cancellation.')
  }
}
