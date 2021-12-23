export * from './EmptyObject';
export * from './QueryParams';
export * from './RouteParams';

export type $Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type $RemoveChildren<T extends React.ComponentType<any>> = $Omit<
React.ComponentPropsWithoutRef<T>,
'children'
>;
