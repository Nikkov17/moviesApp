import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: left;
	flex-direction: column;
`;
const InputLabel = styled.label`
	font-size: 20px;
	font-weight: normal;
	font-family: Trebuchet MS, sans-serif;
	color: #9597cc;
`;
const InputElement = styled.input`
	width: 100%;
	line-height: 35px;
	border-radius: 10px;
	border: 0;
	outline: none;
	font-size: 22px;
	font-weight: normal;
	font-family: Trebuchet MS, sans-serif;
	padding-left: 0.5%;
`;

function Label({titleInput}){
	return (
		<InputLabel for={titleInput}>
			Find your movie
		</InputLabel>
	);
}

//PureComponent not needed here, made just for example
class Input extends React.PureComponent {
	render() {
		return (
			<InputContainer>
				<Label titleInput='titleInput' />
				<InputElement id='titleInput' type="text"></InputElement>
			</InputContainer>
		)
	}
}

export default Input;
