import { IRouterConfig, lazy } from 'ice';

const Home = lazy(() => import('@/pages/Home'));
const Demo1 = lazy(() => import('@/pages/demo1'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/HOME',
    component: Home,
  },
  {
    path: '/demo1',
    component: Demo1,
  },
];

export default routerConfig;
