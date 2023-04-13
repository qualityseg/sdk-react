export type TSecurityCodeOptions = {
  /**
   * Defines input placeholder.	
   *
   * @see {@link https://github.com/mercadopago/sdk-js/blob/main/API/fields.md#params-2 Placeholder} documentation.
   */
  placeholder?: string;
  /**
   * Defines field styles with keys named as CSS property
   *
   * @see {@link https://github.com/mercadopago/sdk-js/blob/main/API/fields.md#style Style} documentation.
   */
  style?: TSecureFieldStyle;
  /**
   * Custom Fonts is an array with src attribute defining an url from where to load a custom font.
   *
   * @see {@link https://github.com/mercadopago/sdk-js/blob/main/API/fields.md#custom-fonts Custom Fonts} documentation.
   */
  customFonts?: TSecureFieldCustomFont;
}

export type TSecureFieldStyle = {
  color?: string;
  "font-family"?: string;
  fontFamily?: string;
  "font-size"?: string;
  fontSize?: string;
  "font-style"?: string;
  fontStyle?: string;
  "font-variant"?: string;
  fontVariant?: string;
  "font-weight"?: string;
  fontWeight?: string;
  height?: string;
  margin?: string;
  "margin-bottom"?: string;
  marginBottom?: string;
  "margin-left"?: string;
  marginLeft?: string;
  "margin-right"?: string;
  marginRight?: string;
  "margin-top"?: string;
  marginTop?: string;
  padding?: string;
  "padding-bottom"?: string;
  paddingBottom?: string;
  "padding-left"?: string;
  paddingLeft?: string;
  "padding-right"?: string;
  paddingRight?: string;
  "padding-top"?: string;
  paddingTop?: string;
  "placeholder-color"?: string;
  placeholderColor?: string;
  "text-align"?: string;
  textAlign?: string;
  width?: string;
}

export type TSecureFieldCustomFont = TFontSrc[];
export type TFontSrc = { 
  /** URL from where to load the custom font */
  src: string
};