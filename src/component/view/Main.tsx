import React from 'react';
import { State } from '../../redux/store';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

type StateProps = {};

type DispatchProps = {};

type MainProps = StateProps & DispatchProps;

const ConnectedMain = (props: MainProps) => {
  return (
    <div>
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => {
  return {

  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {

  };
};

const Main = connect(mapStateToProps, mapDispatchToProps)(ConnectedMain);
export default Main;