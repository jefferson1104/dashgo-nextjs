import { forwardRef, ForwardRefRenderFunction } from "react";
import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) => {
  return(
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      <ChakraInput
        name={name}
        id={name}
        size="lg"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        ref={ref}
        _hover={{
          bgColor: 'gray.900'
        }}
        {...rest}
      />
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);