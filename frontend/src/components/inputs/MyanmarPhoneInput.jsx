import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import useAuth from "../../contexts/auth/useAuth";

const MyanmarPhoneInput = () => {
  const { phone, setPhone } = useAuth();
  return <PhoneInput
      defaultCountry="MM"
      international={false}
      countryCallingCodeEditable={false}
      withCountryCallingCode
      value={phone}
      onChange={(value) => setPhone(value)}
      placeholder="9xxxxxxxx"
    />
}

export default MyanmarPhoneInput;