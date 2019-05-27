export interface IColumnDefModel {
  columnName: string;
  linkerProperty: string;
  classNames?: string | string[];
  inlineStyles?: IInlineStyles;
}

interface IInlineStyles {
  [key: string]: string;
}
