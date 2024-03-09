import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/Layout'
import GameList from '../pages/GameList'
import GameDetail from '../pages/GameDetail'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <GameList />
            },
            {
                path: 'games/:slug',
                element: <GameDetail />
            }
        ]
    }
])
export default router