import { createBrowserRouter  } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from './pages/home.page'
import ProductPage from './pages/product.page'
import AboutPage from './pages/about.page'
import ErrorPage from './pages/error.page'

const appRoutes = createBrowserRouter([{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/product",
				element: <ProductPage />,
			},
			{
				path: "/about",
				element: <AboutPage />,
			}
		]
	},
	
]);

export default appRoutes;