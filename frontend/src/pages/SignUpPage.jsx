import { useState } from "react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  })
  return (<div>SignUpPage</div>)
};

export default SignUpPage;