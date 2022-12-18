export const GetRoutingList = (data: JSX.Element): Set<readonly string[]> => {
  const routing: Set<string[]> = new Set();
  const array = data.props.children.props.children
  array.forEach((element: any) => {
    routing.add(element.props.path);
  });

  return routing;
}