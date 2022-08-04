export type RoutesMap = Map<
  string,
  {
    path: string;
    component: () => Promise<typeof import("*.vue")>;
    name: string;
    meta: {
      title: string;
    };
  }
>;
