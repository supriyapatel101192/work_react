import { combineReducers } from 'redux';
import jobBoardReducer from './job-board/reducer';
import weWireReducer from './we-wire/reducer';
import wenexReducer from './wenex/reducer';
import metaDataReducer from './metadata/reducer';
import campusconnectReducer from './campusconnect/reducer';

export default combineReducers({
  wenex: wenexReducer,
  jobBoard: jobBoardReducer,
  weWire: weWireReducer,
  metaData: metaDataReducer,
  registerFresher: campusconnectReducer,
  registerExperienced: weWireReducer,
});
