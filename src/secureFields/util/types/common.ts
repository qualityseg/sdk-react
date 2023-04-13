import { CardNumberEvents } from "../../cardNumber/types";

export type FieldInstance = {
  /** 
   * Field mounting method
   * 
   * @see {@link https://github.com/mercadopago/sdk-js/blob/main/API/fields.md#field-instancemountcontainer mount} documentation 
   */
  mount: (container: string) => FieldInstance;
  /** 
   * Field unmounting method 
   * 
   * @see {@link https://github.com/mercadopago/sdk-js/blob/main/API/fields.md#field-instanceunmount unmount} documentation 
   */
  unmount: () => void;
  /** 
   * Method to add event listeners to field
   * 
   * @see {@link https://github.com/mercadopago/sdk-js/blob/main/API/fields.md#field-instanceonevent-callback on} documentation 
   */
  on: (
    event: FieldEvents,
    callback /*
      TODO:
        here's how to implement differents parameters for the callback
        according to which event was sent
      https://stackoverflow.com/questions/54165536/typescript-function-return-type-based-on-input-parameter
    */
  ) => void;
}

export type FieldEvents = FieldGenericEvents | CardNumberEvents;

export type FieldGenericEvents =
  | 'blur'
  | 'focus'
  | 'ready'
  | 'change'
  | 'validityChange'
  | 'error';