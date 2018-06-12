const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch({
    type: 'LOG_OUT'
  }),
  loginSuccessfull: (jwt_token, username) => dispatch({
    type: 'LOGIN_SUCCESSFULL',
    jwt_token,
    username
  }),
  loginError: (error) => dispatch({
    type: 'LOGIN_ERROR',
    error
  }),
  setMessages: (channel, messages, displayMode) => dispatch({
    type: 'SET_MESSAGES',
    channel,
    messages,
    displayMode
  }),
  unSetMessages: () => dispatch({
    type: 'UNSET_MESSAGES'
  }),
  setShowMessages: (channel, messages, displayMode) => dispatch ({
    type: 'SET_SHOW_MESSAGES',
    channel,
    messages,
    displayMode
  }),
  /////////// Errors and Info to show /////////////
  goToChannelErr: (err) => dispatch ({
    type: 'GO_TO_CHANNEL_ERR',
    err
  }),
  createChannelErr: (err) => dispatch ({
    type: 'CREATE_CHANNEL_ERR',
    err
  }),
  createChannelInfo: (info) => dispatch ({
    type: 'CREATE_CHANNEL_INFO',
    info
  }),
  showChannelErr: (err) => dispatch ({
    type: 'SHOW_CHANNEL_ERR',
    err
  }),
  resetMessagesInfo: () => dispatch ({
    type: 'RESET_MESSAGES_INFO'
  })
});

export default mapDispatchToProps;
