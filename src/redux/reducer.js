import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import gallery from './GalleryState';
import app from '../modules/AppState';
import calendar from '../modules/calendar/CalendarState';

import links from './links'
import login from './login'

export default combineReducers({
  // ## Generator Reducers
  gallery,
  app,
  calendar,
  links,
  login
});
