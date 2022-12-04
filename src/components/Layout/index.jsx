// React
import React, { useMemo } from 'react';
// Router
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';

// Pages
import ComputerPage from '@/pages/ComputerPage';
import PhonePage from '@/pages/PhonePage';
import OtherPage from '@/pages/OtherPage';
import DetailPage from '@/pages/DetailPage';
import FavoritePage from '@/pages/FavoritePage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';

// UI Lib
import { Layout as AntdLayout, Menu } from 'antd';
// Icons
import { AiOutlineLogin } from 'react-icons/ai';
import { RiComputerLine } from 'react-icons/ri';
import { GoDeviceMobile } from 'react-icons/go';
import { BsBoxSeam } from 'react-icons/bs';
import { BiShoppingBag } from 'react-icons/bi';

// Scoped style
import classes from './style.module.less';

const { Header, Sider, Content } = AntdLayout;

export default function Layout() {
	const history = useHistory();
	const { pathname } = useLocation();

	const handleMenuSelect = ({ key }) => {
		history.push(key);
	};

	const menuSelectedKeys = useMemo(() => {
		return [pathname];
	}, [pathname]);

	return (
		<AntdLayout className={classes.layout}>
			<Sider width={260} className={classes.sider}>
				<div className="logo">E-Shop</div>

				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={['computers']}
					selectedKeys={menuSelectedKeys}
					onSelect={handleMenuSelect}
					items={[
						{
							key: '/computers',
							icon: <RiComputerLine />,
							label: 'Computers',
						},
						{
							key: '/phones',
							icon: <GoDeviceMobile />,
							label: 'Phones',
						},
						{
							key: '/others',
							icon: <BsBoxSeam />,
							label: 'Others',
						},
						{
							key: '/favorites',
							icon: <BiShoppingBag />,
							label: 'Favorites',
						},
					]}
				/>

				<div className="creator">
					Create by <strong>IT IS IT</strong>
				</div>
			</Sider>

			<AntdLayout>
				<Header className={classes.header}>
					<Menu
						mode="horizontal"
						onSelect={handleMenuSelect}
						selectedKeys={menuSelectedKeys}
						items={[
							{
								key: '/login',
								icon: <AiOutlineLogin />,
								label: 'Login',
							},
							{
								key: '/register',
								icon: <AiOutlineLogin />,
								label: 'Register',
							},
						]}
					/>
				</Header>

				<Content className={classes.content}>
					<Switch>
						<Route exact path={['/', '/computers']} component={ComputerPage} />
						<Route exact path="/computers/:id" component={DetailPage} />

						<Route exact path="/phones" component={PhonePage} />

						<Route exact path="/others" component={OtherPage} />

						<Route exact path="/product/:id" component={DetailPage} />

						<Route exact path="/favorites" component={FavoritePage} />

						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/register" component={RegisterPage} />
					</Switch>
				</Content>
			</AntdLayout>
		</AntdLayout>
	);
}
