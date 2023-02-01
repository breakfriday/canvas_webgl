import { IRouterConfig, lazy } from 'ice';

const Home = lazy(() => import('@/pages/Home'));
const Demo1 = lazy(() => import('@/pages/demo1'));
const SheetPage = lazy(() => import('@/pages/sheetpage'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    exact: true,
    component: SheetPage,
  },
  {
    path: '/demo1',
    exact: true,
    component: Demo1,
  },
  {
    path: '/sheetPage',
    exact: true,
    component: SheetPage,
  },
];

export default routerConfig;
