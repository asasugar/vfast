/**
 * prop type helpers
 * help us to write less code and reduce bundle size
 */
import type { PropType } from 'vue';

export const numericProp = [Number, String];

export const truthProp = {
  type: Boolean,
  default: true as const
};

export const makeRequiredProp = <T>(type: T) => ({
  type,
  required: true as const
});

export const makeNumberProp = <T>(defaultVal: T) => ({
  type: Number,
  default: defaultVal
});

export const makeStringProp = <T>(defaultVal: T) => ({
  type: String as unknown as PropType<T>,
  default: defaultVal
});

export const makeNumericProp = <T>(defaultVal: T) => ({
  type: numericProp,
  default: defaultVal
});

export const makeObjectProp = <T>() => ({
  type: Object as PropType<T>,
  default: () => {}
});

export const makeArrayProp = <T>() => ({
  type: Array as PropType<T[]>,
  default: () => []
});

export const unknownProp = null as unknown as PropType<unknown>;
