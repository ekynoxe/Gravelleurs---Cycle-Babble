export type $Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type $RemoveChildren<T extends React.ComponentType<any>> = $Omit<
React.ComponentPropsWithoutRef<T>,
'children'
>;

export type JSONDataType = Record<string, string>

export type Lang = 'de' | 'en' | 'es' | 'fr' | 'it' | 'nl' | 'pt' | 'rs' | 'se'

export type Language = {
  key: string;
  label: string;
}

export type Column = {
  header: string;
  key: Lang;
}

export type Row = Record<Lang, string>

export type Translations = Row[]

export type TableData = {
  colDefs: Column[];
  data: Translations;
  search: string;
}
