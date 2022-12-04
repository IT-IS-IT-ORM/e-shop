// React
import React from 'react';
// Router
import { Link } from 'react-router-dom';

// UI Lib
import { Button, Form, Input } from 'antd';
// Icons
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';

// Scoped style
import classes from './style.module.less';

export default function RegisterPage() {
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

			<Form.Item
				name="confirm"
				dependencies={['password']}
				rules={[
					{
						required: true,
						message: 'Confirm your password',
					},
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve();
							}
							return Promise.reject(
								new Error('The two passwords that you entered do not match'),
							);
						},
					}),
				]}>
				<Input.Password
					prefix={<AiOutlineLock />}
					placeholder="Confirm password"
				/>
			</Form.Item>

			<Form.Item className="flex-col">
				<Button type="primary" htmlType="submit" block>
					Register
				</Button>
				Or <Link to="/login">login now!</Link>
			</Form.Item>
		</Form>
	);
}
