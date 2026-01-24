import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const MyanmarPhoneInput = ({ inputValue, inputChange }) => {
  return <PhoneInput
      defaultCountry="MM"
      international={false}
      countryCallingCodeEditable={false}
      withCountryCallingCode
      value={inputValue}
      onChange={inputChange}
      placeholder="9xxxxxxxx"
    />
}

export default MyanmarPhoneInput;