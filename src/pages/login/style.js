import styled from 'styled-components';
import Bg from '../../static/bg.png';
import uname from '../../static/un.png';
import pwd from '../../static/pwd.png';
import Logo from '../../static/logo.png';

/* 页面整体 */
export const LoginBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    width: 100%;
    height: 100vh;
	background: url(${Bg}) no-repeat;
	background-size: cover;
	background-position: center;

	.logo {
		margin-top: 51px;
		width: 158px;
		height: 155px;
		background: url(${Logo});
		background-size: cover;
	}

	.welcome {
		font-size: 72px;
		color: white;
		margin-top: 29px;
	}
`;

/* 顶栏 */
export const TopBar = styled.div`
    width: 100%;
    height: 65px;
    background-color: rgba(172, 175, 249, 0.41);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);
    .title {
		line-height: 65px;
		margin-left: 36px;
        height: 27px;
        color: rgba(255, 255, 255, 1);
        font-size: 18px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
`;

/* 登录盒子 */
export const LoginBox = styled.div`
	margin-top: 11px;
	width: 713px;
	height: 364px;
	border-radius: 10px;
	background-color: rgba(255, 255, 255, 1);
	color: rgba(16, 16, 16, 1);
	box-shadow: 2px 3px 22px 8px rgba(0, 21, 41, 0.14);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Input = styled.input`
	box-sizing: border-box;
	width: 439px;
	height: 53px;
	padding: 20px;
	padding-left: 60px;
	border-radius: 20px;
	background-color: rgba(221, 223, 255, 0.41);
	color: rgba(16, 16, 16, 1);
	font-size: 18px;
	font-family: Roboto;
	outline: none;
	border: 2px solid transparent;
    transition: all 100ms ease-in;
	&:focus {
		background-color: rgba(221, 223, 255, 0.3);
		border: 2px solid #6495ED;
	}
	&::placeholder {
		color: rgba(187, 187, 187, 0.94);
	}
`;

export const Button = styled.button`
	width: 439px;
	height: 53px;
	line-height: 29px;
	border-radius: 20px;
	background-color: rgba(38, 120, 244, 0.79);
	font-size: 20px;
	color: white;
	text-align: center;
	font-family: Roboto;
	outline: none;
	border: none;
    cursor: pointer;
    transition: all 100ms ease-in;
    &:hover {
        background: #40a9ff
    }
    &:active {
        background: #096dd9;
    }
`

export const AffixWrapper = styled.div`
	position: relative;
	margin-bottom: 10px;
	.unicon {
		position: absolute;
		left: 20px;
		top: 14px;
		width: 24px;
		height: 24px;
		background: url(${uname});
		background-size: 24px;
	}
	.pwdicon {
		position: absolute;
		top: 14px;
		left: 20px;
		width: 24px;
		height: 24px;
		background: url(${pwd});
		background-size: 24px;
	}
`

export const ErrorInfo = styled.div`
    width: 439px;
    height: 25px;
    div {
		text-align: center;
        font-size: 14px;
        line-height: 18px;
		color: #DC143C;
    }
`;