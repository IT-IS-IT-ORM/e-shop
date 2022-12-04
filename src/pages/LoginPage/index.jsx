// React
import React from 'react';
// Router
import { Link } from 'react-router-dom';

// UI Lib
import { Button, Checkbox, Form, Input } from 'antd';
// Icons
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';

// Scoped style
import classes from './style.module.less';

export default function LoginPage() {
	const onFinish = values => {
		console.log('Received values of form: ', values);
	};

	return (
		<Form
			className={classes.form}
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}>
			<Form.Item
				name="username"
				rules={[
					{
						required: true,
						message: 'Username is required',
					},
				]}>
				<Input prefix={<AiOutlineUser />} placeholder="Username" />
			</Form.Item>

			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: 'Password is required',
					},
				]}>
				<Input.Password prefix={<AiOutlineLock />} placeholder="Password" />
			</Form.Item>

			<Form.Item className="flex-row">
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Link to="#">Forgot password</Link>
			</Form.Item>

			<Form.Item className="flex-col">
				<Button type="primary" htmlType="submit" block>
					Log in
				</Button>
				Or <Link to="/register">register now!</Link>
			</Form.Item>
		</Form>
	);
}
