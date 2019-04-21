import React from 'react';
import styled from 'styled-components';
import Title from './components/title';
import Input from './components/input'

const Banner = styled.div`
	width: 100%;
	height: 250px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #232B61;
	background: linear-gradient(to bottom, #232B61, #3A448B);
	font-family: Rockwell, sans-serif;
	color: white;
`;

class App extends React.Component {
	render() {
		return (
			<Banner>
				<Title />
				<Input />
			</Banner>
		)
	}
}

export default App;
