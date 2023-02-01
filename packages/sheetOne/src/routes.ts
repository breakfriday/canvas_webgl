import { IRouterConfig, lazy } from 'ice';

const Home = lazy(() => import('@/pages/Home'));
const Demo1 = lazy(() => import('@/pages/demo1'));
const SheetPage = lazy(() => import('@/pages/sheetpage'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/HOME',
    component: Home,
  },
  {
    path: '/demo1',
    component: Demo1,
  },
  {
    path: '/sheetPage',
    component: SheetPage,
  },
];

export default routerConfig;
