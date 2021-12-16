import {
	call,
	spawn,
	all
} from '@redux-saga/core/effects'
import userSaga from './user/user.saga'
import profileSaga  from './profile/profile.saga';
//*** GENERATED IMPORTS GO HERE ***

export default function* rootSaga() {
	const sagas = [
		userSaga,
		profileSaga,
//*** GENERATED SAGAS GO HERE ***
	]

	const retrySagas = yield sagas.map((saga) => {
		return spawn(function* () {
			while (true) {
				try {
					yield call(saga)
					break;
				} catch (err) {
					console.log(err)
				}
			}
		})
	})

	yield all(retrySagas)
}