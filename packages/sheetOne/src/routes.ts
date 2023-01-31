import { IRouterConfig, lazy } from 'ice';

const Home = lazy(() => import('@/pages/Home'));
const Demo1 = lazy(() => import('@/pages/demo1'));
// const Demo2 = lazy(() => import('@/pages/demo2'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/HOME',
    component: Home,
  },
  {
    path: '/demo1',
    component: Demo1,
  },
  // {
  //   path: '/demo2',
  //   component: Demo2,
  // },
];

export default routerConfig;
