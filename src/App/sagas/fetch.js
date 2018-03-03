import { call, put, take, actionChannel } from 'redux-saga/effects'

// helper
export function* fetchTask(url, status, options) {
  try {
    const opt = {
      credentials: 'include',
      mode: 'cors',
      ...options,
    }
    yield put({ type: status.REQUEST })
    const response = yield fetch(url, opt)
    const result = yield response.json()
    yield put({ type: status.SUCCESS, result })
  } catch (ex) {
    yield put({ type: status.FAILED })
    console.error('error occurs when polling: ', ex)
  } finally {
    console.info('refreshing data cancellation.')
  }
}

// listener
export function* sagaWatchers() {
  const requestChannel = yield actionChannel('SAGA_FETCH')
  while (true) {
    try {
      const { task } = yield take(requestChannel)
      yield call(task)
    } catch (ex) {
      console.error('error occurs when polling: ', ex)
    } finally {
      console.info('refreshing data cancellation.')
    }
  }
}
