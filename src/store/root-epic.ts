import { combineEpics } from 'redux-observable';
import { jobBoardEpics } from './job-board/epics';
import { weWireEpics } from './we-wire/epics';
import { wenexEpics } from './wenex/epics';
import { metaDataEpics } from './metadata/epics';
import { campusConnectEpics } from './campusconnect/epics';

export default combineEpics(wenexEpics, jobBoardEpics, weWireEpics, metaDataEpics, campusConnectEpics);
