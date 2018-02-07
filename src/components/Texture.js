import React from 'react';
import {
	Provider,
	connect
} from 'react-redux';
import store from '../store/store';
import onChangeAction from '../action/action';

const Texture = (props) => (
	<div>
    <h2>{props.str}</h2>
    <input onChange={props.onChange} placeholder={props.placeholder} />
  </div>
);

const mapStateToProps = (state) => {
	return ({
		str: state.str,
		placeholder: state.placeholder
	});
};
const mapDispatchToProps = (dispatch) => {
	return ({
		onChange: (e) => {
			return dispatch(onChangeAction(e))
		}
	});
};

const TextureConnect = connect(mapStateToProps, mapDispatchToProps)(Texture);
const TextureWrapper = () => (
	<Provider store={store}>
    <TextureConnect />
  </Provider>
);
export default TextureWrapper;