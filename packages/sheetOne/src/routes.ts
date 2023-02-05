import { IRouterConfig, lazy } from 'ice';

const Home = lazy(() => import('@/pages/Home'));
const Demo1 = lazy(() => import('@/pages/demo1'));
const SheetPage = lazy(() => import('@/pages/sheetpage'));

const SheetPage2 = lazy(() => import('@/pages/sheetPage2'));

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
  {
    path: '/sheetPage2',
    exact: true,
    component: SheetPage2,
  },
];

export default routerConfig;
